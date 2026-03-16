import { Code2, Wrench, Brain, Database, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'SQL', 'C', 'Java']
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: ['Django', 'React', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn']
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Database Design']
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['VS Code', 'Git', 'Power BI', 'Figma', 'GitHub', 'Microsoft Clipchamp', 'SQL Workbench']
  },
  {
    icon: Brain,
    title: 'Core Concepts',
    skills: ['DSA', 'DBMS', 'Data Analysis', 'UI/UX Design', 'Machine Learning']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>SKILLS & EXPERTISE</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies, frameworks, and concepts I use to build impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card 
              key={idx} 
              className="border-gray-700 bg-gray-800 hover:shadow-2xl hover:shadow-teal-500/30 transition-all duration-300 hover:border-teal-500 hover:scale-105 hover:bg-gray-750" 
            >
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-teal-900 to-teal-950 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">
                  <category.icon className="w-7 h-7 text-teal-400 hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl text-white">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <Badge 
                      key={skillIdx} 
                      variant="secondary" 
                      className="bg-gray-700 text-gray-200 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 border border-gray-600 hover:border-teal-400 px-3 py-1 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}