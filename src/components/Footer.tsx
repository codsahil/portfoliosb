
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-lg gradient-text">Sahil Bonagiri</h3>
            <p className="text-muted-foreground text-sm">Full Stack Developer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="h-3 w-3 text-red-500 fill-red-500" /> in {currentYear}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved &copy; Sahil Bonagiri
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
