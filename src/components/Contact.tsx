import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center gradient-text">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a question or want to work together? Feel free to reach out! I'm currently 
          open to new opportunities and collaborations.
        </p>
        
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a 
                  href="mailto:bonagirisahil@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  bonagirisahil@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Maharashtra, India</p>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/codsahil" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sahil-bonagiri/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/sahil_bonagiri" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
