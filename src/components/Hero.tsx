
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
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
              <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto rounded-full px-6 sm:px-8">
                <a href="https://www.linkedin.com/in/sahil-bonagiri-0a2916292/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Resume
                </a>
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
