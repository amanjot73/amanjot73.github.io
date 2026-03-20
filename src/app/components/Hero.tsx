import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import profileImg from "../../assets/profile.webp";
import { useState, useEffect } from 'react';

const roles = [
  'Data Science Enthusiast',
  'Python Django Backend Developer',
  'Data Analytics Specialist',
  'Algorithmic Problem Solver'
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);

  const fullText = "I enjoy solving real-world problems through clean and efficient code. My focus lies in building scalable backend systems, data-driven applications, and intuitive user experiences. I'm continuously learning new technologies and sharpening my problem-solving skills through projects and development work.";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, 15); // 15ms for very fast typing
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className="space-y-8 transition-all duration-700 ease-out"
            style={{
              transform: isImageHovered ? 'translateX(-20px)' : 'translateX(0)',
              opacity: isImageHovered ? 0.95 : 1
            }}
          >
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-7xl font-bold tracking-wider"
                style={{
                  fontFamily: 'var(--font-heading)',
                  animation: isTypingDone ? 'colorShift 8s ease-in-out infinite' : 'none',
                  color: isTypingDone ? '' : 'white'
                }}
              >
                AMANJOT SINGH
              </h1>
              <p className="text-2xl text-teal-400 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                <span className="inline-block transition-all duration-500" style={{
                  animation: 'fadeSlide 0.5s ease-in-out'
                }} key={currentRole}>
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              {typedText}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 hover:scale-105"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-400 hover:bg-teal-950 hover:text-teal-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://drive.google.com/file/d/1BfGzIfL6ShpV5id1UKf7wzLDHPfoVF7S/view?usp=drive_link', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div
              className="relative cursor-pointer group"
              onMouseEnter={(e) => {
                const glowDiv = e.currentTarget.querySelector('.glow-effect') as HTMLElement;
                if (glowDiv) {
                  glowDiv.style.opacity = '0.7';
                  glowDiv.style.transform = 'scale(1.1)';
                }
                setIsImageHovered(true);
              }}
              onMouseLeave={(e) => {
                const glowDiv = e.currentTarget.querySelector('.glow-effect') as HTMLElement;
                if (glowDiv) {
                  glowDiv.style.opacity = '0.4';
                  glowDiv.style.transform = 'scale(1)';
                }
                setIsImageHovered(false);
              }}
            >
              <div
                className="glow-effect absolute -inset-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-40 blur-3xl animate-pulse"
                style={{ transition: 'all 0.5s ease' }}
              ></div>
              <img
                src={profileImg}
                alt="Profile"
                fetchPriority="high"
                loading="eager"
                className="relative w-[450px] h-[450px] object-cover border-[12px] border-teal-500/30 shadow-2xl ring-4 ring-teal-400/50 transition-all duration-500 group-hover:scale-110 group-hover:ring-8 group-hover:ring-teal-300/60 group-hover:border-teal-400/50"
                style={{ animation: 'morphBorder 8s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}