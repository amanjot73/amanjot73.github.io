import { Award, Calendar, Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const certificates = [
  {
    title: 'Conflict Management Specialization',
    organization: 'University of California, Irvine | via Coursera',
    year: '2026',
    category: 'Soft Skills',
    link: 'https://www.coursera.org/account/accomplishments/specialization/EBXMPS23XK4D'
  },
  {
    title: 'Computational Theory: Language Principle & Finite Automata Theory',
    organization: 'Infosys',
    year: '2025',
    category: 'Technology',
    link: 'https://drive.google.com/file/d/1KxsEbH_HlSGicDzLaFDJgxbpU72-cdDw/view?usp=sharing'
  },
  {
    title: 'Master Generative AI & Generative AI Tools',
    organization: 'Infosys',
    year: '2025',
    category: 'Technology',
    link: 'https://drive.google.com/file/d/1_Y-KCJPq7wmAszlnv5QzGZDnDOeN_cMr/view?usp=sharing'
  },
  {
    title: 'Build Generative AI Apps and Solutions with No-Code Tools',
    organization: 'Infosys',
    year: '2025',
    category: 'Technology',
    link: 'https://drive.google.com/file/d/1F1Wdk7SA-EB84MD7ngj_Ig_A-X6dr-KH/view?usp=sharing'
  },
  {
    title: 'Data Structures & Algorithms',
    organization: 'Lovely Professional University',
    year: '2025',
    category: 'DSA',
    link: 'https://drive.google.com/file/d/1RqnJa1qeO4Y3ahinzhgJ6GA2bl0XqLc3/view?usp=sharing'
  },
  {
    title: 'Cloud Computing',
    organization: 'Nptel',
    year: '2025',
    category: 'Cloud Technology',
    link: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104750057904238340.pdf'
  },
  {
    title: 'Object Oriented Programming',
    organization: 'Lovely Professional University',
    year: '2024',
    category: 'Programming',
    link: 'https://drive.google.com/file/d/1wJVHJSON2INmZTaypnyyg45HtbJZ2Smn/view?usp=sharing'
  },
  {
    title: 'Legacy Responsive Web Design',
    organization: 'FreeCodeCamp',
    year: '2023',
    category: 'Design',
    link: 'https://www.freecodecamp.org/certification/amanjot84/responsive-web-design'
  },

];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>CERTIFICATES & CERTIFICATIONS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill validation through professional certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 border-l-4 border-l-teal-500 hover:border-teal-400 hover:scale-105 flex flex-col cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-900 to-teal-950 rounded-lg flex items-center justify-center shadow-lg shadow-teal-900/50">
                    <Award className="w-6 h-6 text-teal-400" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">{cert.category}</Badge>
                </div>
                <CardTitle className="text-xl text-white leading-snug">{cert.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-3 text-gray-400">
                  <span>{cert.organization}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex items-center gap-2 text-sm text-teal-400 font-semibold mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.year}</span>
                </div>
                {cert.link ? (
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-teal-400 hover:text-white transition-all duration-300 text-center"
                  >
                    See Certificate
                  </a>
                ) : (
                  <button className="w-full px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-teal-400 hover:text-white transition-all duration-300">
                    See Certificate
                  </button>
                )}
              </CardContent>
            </Card>
          ))}
          
          {/* Coming Soon Card */}
          <Card className="bg-gray-900/50 border-2 border-teal-500/60 hover:bg-gray-800/50 transition-colors flex items-center justify-center relative overflow-hidden" style={{
            animation: 'morphCard 6s ease-in-out infinite'
          }}>
            <CardContent className="p-8 text-center">
              <div className="relative mb-4">
                <Award className="w-12 h-12 text-gray-600 mx-auto" />
              </div>
              <p className="text-gray-300 font-medium">More certifications coming soon</p>
              <p className="text-sm text-gray-500 mt-2">Actively pursuing additional professional development</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}