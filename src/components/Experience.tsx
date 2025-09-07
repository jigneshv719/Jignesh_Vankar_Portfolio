import { Calendar, MapPin, Code, Server, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      period: 'Jan 2022 - March 2025',
      title: 'Full Stack Web Developer',
      company: 'CoreMentors Pvt Ltd',
      description: 'Developed responsive websites and full-stack web applications using WordPress, React.js, and Node.js. Worked with APIs, dynamic UI components, and backend logic to deliver scalable solutions. Focused on optimizing performance, maintaining code quality, and ensuring cross-device compatibility.',
      icon: Code,
      current: false
    },
    {
      period: '2022-2022',
      title: 'Front-end & Back-end Developer',
      company: 'Odmantis Pvt. Ltd.',
      description: '3-month internship covering both front-end and back-end development with focus on modern web technologies and best practices.',
      icon: Server,
      current: false
    },
    {
      period: '2021-2022',
      title: 'Front-end Development Intern',
      company: 'Balkrushna Technologies Pvt. Ltd.',
      description: '4-month internship specializing in front-end development using modern frameworks and responsive design principles.',
      icon: Code,
      current: false
    },
    {
      period: '2020-2021',
      title: 'Web Development Intern',
      company: 'Clever Minds TechSoI LLP',
      description: '3-month internship focused on web development using Node.js and React, gaining hands-on experience with full-stack development.',
      icon: Server,
      current: false
    },
    {
      period: '2020-2025',
      title: 'Freelancing (WordPress Development)',
      company: 'Self-employed',
      description: 'Web development and WordPress sites for various clients. 1 year of hands-on freelance experience building custom solutions.',
      icon: Database,
      current: false
    }
  ];

  return (
    <section id="experience" className="py-10 sm:py-16 md:py-20 bg-transparent relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 md:px-6 lg:px-8">
        {/* Header - Mobile optimized */}
        <div className="text-center mb-6 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 text-foreground">My Experience</h2>
          <p className="text-xs sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-1 sm:px-0">
            A timeline of my hands-on experience building dynamic, scalable web applications using WordPress, MERN stack, and AWS — backed by real-world projects, client collaboration, and continuous learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line - Hidden on mobile to prevent overlap */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30"></div>

          <div className="space-y-6 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'
                }`}
              >
                {/* Timeline dot with icon - Always centered */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg z-10 border-2 sm:border-4 border-background">
                  <exp.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                </div>

                {/* Content card - Mobile optimized spacing with top margin to avoid icon overlap */}
                <div className={`w-full sm:w-5/12 mt-6 sm:mt-0 ${
                  index % 2 === 0 ? 'sm:pr-16' : 'sm:pl-16'
                }`}>
                  <Card className="shadow-card hover-scale border-0 bg-card/80 backdrop-blur">
                    <CardContent className="p-3 sm:p-6">
                      {/* Date pill */}
                      <div className="inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2 sm:mb-4">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        {exp.period}
                      </div>
                      
                      {/* Job title */}
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-2 text-foreground">{exp.title}</h3>
                      
                      {/* Company */}
                      <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                        <span className="text-muted-foreground font-medium text-xs sm:text-base">{exp.company}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-base">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;