
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
                <a href="#" download className="flex items-center gap-2">
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
