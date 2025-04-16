import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Preloader from '../components/Preloader';
import { useEffect } from 'react';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Preloader />
      <NavBar />
      
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
