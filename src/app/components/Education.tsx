import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    period: '2023 - Ongoing',
    grade: 'CGPA: 8.5/10',
    highlights: [
      'Focused on Data Science, building data-driven solutions and extracting insights\nfrom real-world datasets.',
      'Exploring full-stack and web development, expanding skills in backend systems and\nmodern web technologies.',
      'Passionate about solving complex problems through algorithms, logical thinking, and\nefficient code'
    ]
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Manu Shiksha Kendra Hr. Sec. School',
    location: 'Kathua, Jammu & Kashmir',
    period: '2022 - 2023',
    grade: 'Percentage: 92%',
    highlights: [
      'Completed higher secondary education in the Science stream with Computer Science,\n building a strong foundation in programming and analytical thinking.',
      'Achieved School Topper recognition in Computer Science for outstanding academic\n performance.',
      'Participated in regional sports competitions, developing teamwork and discipline.'
    ]
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'Manu Shiksha Kendra Hr. Sec. School',
    location: 'Kathua, Jammu & Kashmir',
    period: '2020 - 2021',
    grade: 'Percentage: 85%',
    highlights: [
      'Built a strong academic foundation in Mathematics and Science, strengthening\n analytical and logical thinking skills.',
      'Participated in the school science fair, showcasing interest in experimentation\n and scientific learning.',
      'Active member of the Bhangra Club, promoting teamwork and cultural participation.'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>EDUCATION</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 hidden md:block z-10"></div>
                
                <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:border-blue-500 md:ml-20 hover:scale-[1.02] cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/50">
                        <GraduationCap className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div>
                            <CardTitle className="text-2xl text-white mb-2">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg text-gray-300 mb-1">{edu.institution}</CardDescription>
                            <p className="text-gray-400">{edu.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-teal-400">
                              <Award className="w-4 h-4" />
                              <span className="font-semibold">{edu.grade.replace('%', '')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-[88px] space-y-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span style={{ whiteSpace: 'pre-line' }}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}