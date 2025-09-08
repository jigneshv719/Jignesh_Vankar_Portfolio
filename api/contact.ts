import type { VercelRequest, VercelResponse } from '@vercel/node';
import { get, put } from '@vercel/blob';

const BLOB_KEY = 'contact/submissions.json';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

async function readAllSubmissions(): Promise<ContactSubmission[]> {
  try {
    const file = await get(BLOB_KEY);
    if (!file || !file.url) return [];
    const res = await fetch(file.url);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data as ContactSubmission[] : [];
  } catch {
    return [];
  }
}

async function writeAllSubmissions(submissions: ContactSubmission[]): Promise<void> {
  // Overwrite the JSON file atomically
  const body = JSON.stringify(submissions);
  await put(BLOB_KEY, body, {
    contentType: 'application/json',
    access: 'public',
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method === 'GET') {
    const submissions = await readAllSubmissions();
    // newest first
    submissions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return res.status(200).json(submissions);
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { name, email, subject, message } = body || {};
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const newEntry: ContactSubmission = {
        id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
        name,
        email,
        subject,
        message,
        createdAt: new Date().toISOString(),
      };

      const existing = await readAllSubmissions();
      existing.push(newEntry);
      await writeAllSubmissions(existing);

      return res.status(201).json({ ok: true, entry: newEntry });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to save submission' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}


