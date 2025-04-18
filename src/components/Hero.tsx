
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';
import { Download } from 'lucide-react';
import { toast } from './ui/use-toast';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleResumeClick = () => {
    // Using a public resume URL
    const resumeUrl = "https://drive.google.com/file/d/1jxYmOClqCbz5oV4id0qTnPh3LonWVvL0/view";
    
    // Open in new tab
    window.open(resumeUrl, '_blank');
    
    // Show toast notification
    toast({
      title: "Opening Resume",
      description: "Your resume is opening in a new tab",
    });
  };

  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center hero-gradient pt-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4">
              Hello, I'm
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 gradient-text">
              Sahil Bonagiri
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8">
              Full Stack Developer
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12">
              Transforming ideas into exceptional web experiences with 
              <span className="text-primary font-medium"> JavaScript</span>, 
              <span className="text-primary font-medium"> React</span>, and 
              <span className="text-primary font-medium"> Node.js</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button 
                variant="ghost" 
                size="lg" 
                onClick={handleResumeClick}
                className="w-full sm:w-auto rounded-full px-6 sm:px-8 flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </Button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              aria-label="Scroll down"
            >
              <ArrowDown size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
