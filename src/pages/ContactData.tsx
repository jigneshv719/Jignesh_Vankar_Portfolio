import { useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};

const ContactData = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);

  useEffect(() => {
    (async () => {
      // Try server first
      try {
        const res = await fetch('/api/contact');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setSubmissions(data);
            return;
          }
        }
      } catch (error) {
        // ignore and try local
      }

      // Fallback to localStorage
      try {
        const existing = localStorage.getItem('contactSubmissions');
        const parsed = existing ? JSON.parse(existing) : [];
        if (Array.isArray(parsed)) {
          setSubmissions(parsed);
        }
      } catch (error) {
        console.error('Failed to read submissions from localStorage', error);
      }
    })();
  }, []);

  const handleClear = () => {
    localStorage.removeItem('contactSubmissions');
    setSubmissions([]);
  };

  const formatted = useMemo(() => {
    return submissions
      .slice()
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [submissions]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact Submissions</h1>

        <Card className="shadow-card border-0 bg-card/80 backdrop-blur">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground">Total: {formatted.length}</p>
              <div className="space-x-2">
                <Button variant="outline" onClick={() => window.location.reload()}>Refresh</Button>
                <Button variant="destructive" onClick={handleClear}>Clear All</Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {formatted.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-muted-foreground">No submissions yet.</TableCell>
                    </TableRow>
                  ) : (
                    formatted.map((s) => (
                      <TableRow key={s.id}>
                        <TableCell className="whitespace-nowrap">{new Date(s.createdAt).toLocaleString()}</TableCell>
                        <TableCell className="whitespace-nowrap">{s.name}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          <a href={`mailto:${s.email}`} className="text-primary hover:underline">{s.email}</a>
                        </TableCell>
                        <TableCell className="whitespace-nowrap">{s.subject}</TableCell>
                        <TableCell className="max-w-[400px]">
                          <div className="line-clamp-3 break-words">{s.message}</div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactData;


