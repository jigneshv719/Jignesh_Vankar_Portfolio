import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  
  return (
    <footer className="bg-transparent border-t border-border/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          {/* <div className="text-2xl font-bold text-primary">
            Portfolio
          </div> */}



          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Jignesh Vankar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;