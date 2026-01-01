import './App.css';
import About from './compnents/About';
import Contact from './compnents/Contact';
import Experience from './compnents/Experience';
import Footer from './compnents/Footer';
import Hero from './compnents/Hero';
import Navbar from './compnents/Navbar';
import PracticeAreas from './compnents/PracticeAreas';
import Testimonials from './compnents/Testimonials';

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <About />
    <PracticeAreas />
    <Experience />
    <Testimonials />
    <Contact />
    <Footer />
   </>
  );
}

export default App;
