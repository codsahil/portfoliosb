
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref: textRef, inView: textInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 200
  });
  
  const { ref: cardsRef, inView: cardsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 400
  });
  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center gradient-text">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-10" ref={textRef}>
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/lovable-uploads/6370a9ac-ffc3-4ac8-8ee4-9752407037be.png"
                  alt="Sahil Bonagiri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                Available for hire
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <p className="text-lg leading-relaxed mb-6">
              I'm Sahil Bonagiri — a passionate Full Stack Developer with a flair for transforming concepts into dynamic, user-friendly web applications. With a strong foundation in JavaScript, React, Node.js, and MongoDB, I specialize in crafting seamless front-end experiences backed by powerful, efficient back-end architecture.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              What excites me most is solving real-world problems through code. Whether it's building an EV-integrated parking system or designing an intuitive movie search engine, I'm always exploring new ways to optimize performance and enhance usability. My projects have been praised for their clean UI, robust API integration, and data-driven functionality — some even seeing hundreds of users just weeks after launch.
            </p>
            
            <p className="text-lg leading-relaxed">
              With a Bachelor's degree in Information Technology and certifications in MERN Stack and Web Development from ExcelR, I continuously strive to expand my skill set. From Git and Postman to deployment platforms like Render and Netlify, I leverage the right tools to ensure efficiency and scalability in everything I build.
            </p>
          </div>
        </div>
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} 
          ref={cardsRef}
        >
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground mb-4">Bachelor's degree in Information Technology</p>
            <p className="text-sm">MERN Stack and Web Development certification from ExcelR</p>
          </div>
          
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-muted-foreground mb-4">Full Stack Developer with expertise in MERN stack</p>
            <p className="text-sm">Building responsive and efficient web applications</p>
          </div>
          
          <div className="bg-card border rounded-xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">Based in Maharashtra, India</p>
            <p className="text-sm">Available for remote work and collaborations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
