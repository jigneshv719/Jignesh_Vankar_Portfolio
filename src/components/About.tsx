import { Code, Server, Database, Terminal, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      description: 'HTML, CSS, JavaScript, PHP, WordPress',
    },
    {
      icon: Server,
      title: 'Frameworks & Libraries',
      description: 'Node.js, React.js, Express.js',
    },
    {
      icon: PenTool,
      title: 'Designing Tools',
      description: 'Canva, Figma, Photoshop, Adobe XD'
    },
    {
      icon: Terminal,
      title: 'Tools & Platform',
      description: 'Git, VS Code, Cursor AI, ChatGPT',
    }
  ];

  return (
    <section className="bg-transparent relative py-24 z-10">
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          Dedicated and versatile developer with a strong foundation in programming and real-world experience in building responsive, scalable, and user-friendly digital products. I enjoy working across the full web stack and thrive in both collaborative and independent settings.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <Card
              key={idx}
              className="bg-card rounded-3xl p-0 border border-border shadow-card transition-transform hover:scale-[1.03]"
            >
              <CardContent className="p-8 text-left">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-400 text-white flex items-center justify-center mb-6 shadow-lg border-2 border-white">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{skill.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
