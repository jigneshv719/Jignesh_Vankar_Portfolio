import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme, isDark } = useTheme();

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background/90 transition-all duration-300 shadow-lg hover:shadow-xl rounded-full w-12 h-12"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500 transition-transform hover:rotate-90" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 transition-transform hover:rotate-12" />
      )}
    </Button>
  );
};

export default ThemeToggle; 