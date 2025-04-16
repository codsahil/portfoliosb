
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Hello, I'm
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              Sahil Bonagiri
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8">
              Full Stack Developer
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              Transforming ideas into exceptional web experiences with 
              <span className="text-primary font-medium"> JavaScript</span>, 
              <span className="text-primary font-medium"> React</span>, and 
              <span className="text-primary font-medium"> Node.js</span>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-8">
                <a 
                  href="https://www.linkedin.com/in/sahil-bonagiri-0a2916292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <line x1="10" y1="9" x2="8" y2="9"/>
                  </svg>
                  Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="animate-bounce">
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/40 text-primary"
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
