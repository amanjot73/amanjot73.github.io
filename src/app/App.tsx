import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingWork } from './components/CodingWork';
import { Certificates } from './components/Certificates';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <main id="home">
        <Hero />
        <Skills />
        <Projects />
        <CodingWork />
        <Education />
        <Experience />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}