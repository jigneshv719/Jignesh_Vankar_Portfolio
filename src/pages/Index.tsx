import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Theme toggle */}
      <ThemeToggle />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Main content */}
      <div className="content-above-particles">
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
