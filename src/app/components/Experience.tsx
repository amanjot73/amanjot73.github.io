import { Briefcase, GraduationCap, Lightbulb, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const experiences = [
  {
    icon: GraduationCap,
    type: 'TRAINING',
    title: 'Python Full Stack Development',
    period: 'Jan \'26 – Feb \'26',
    description: 'Completed an intensive 45-day Python Full Stack Development training conducted by an industry trainer from Deloitte, gaining exposure to modern web development practices. Learned the fundamentals of front-end and back-end development, understanding how client interfaces interact with server-side logic and databases to build complete web applications.',
    skills: ['Python', 'Django', 'Full Stack Development', 'Backend Routing', 'Database Integration']
  },
  {
    icon: GraduationCap,
    type: 'TRAINING',
    title: 'Data Structures Training',
    period: 'Jun\' 25 – Jul\' 25',
    description: 'Assimilated core concepts of linear and non-linear data structures, including arrays, linked lists, stacks, queues, trees, and graphs, through structured academic instruction.',
    skills: ['Data Structures', 'Sorting Algorithms', 'Searching Algorithms', 'Algorithmic Efficiency']
  },
  {
    icon: Heart,
    type: 'VOLUNTEER EXPERIENCE AT AASHARA FOUNDATION TRUST ',
    title: 'Food Security & Nutrition Project',
    period: 'Jun\' 24 – Jul\' 24',
    description: 'Volunteered with the NGO to support the Food Security and Nutrition initiative, contributing approximately 30 hours to community development activities. Assisted in managing and organizing food storage facilities used for storing and distributing essential food supplies. Gained awareness about precautionary measures during climate-related disasters.',
    skills: ['Community Development', 'Inventory Management', 'Storage Management', 'Disaster Preparedness']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>EXPERIENCE & TRAINING</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building expertise through practical learning and real-world applications
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 hidden md:block z-10"></div>
                
                <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:border-teal-500 md:ml-20 hover:scale-[1.02] cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/50">
                        <exp.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <span className="text-sm text-teal-400 font-semibold uppercase tracking-wide">{exp.type}</span>
                          <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                        </div>
                        <CardTitle className="text-2xl mb-2 text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-base leading-relaxed">{exp.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 ml-[72px]">
                      {exp.skills.map((skill, skillIdx) => (
                        <span 
                          key={skillIdx}
                          className="px-3 py-1.5 bg-gray-700 text-gray-200 rounded-lg text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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