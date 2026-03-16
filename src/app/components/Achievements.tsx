import { Trophy, Star, Target, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const achievements = [
  {
    icon: Target,
    title: 'LeetCode 100+',
    description: 'Solved over 100 problems on LeetCode across various difficulty levels',
    date: '2026',
    category: 'Coding Practice'
  },
  {
    icon: Trophy,
    title: 'Hackathon Runner Up',
    description: 'Second place in inter-college hackathon for developing an innovative healthcare management solution',
    date: '2025',
    category: 'Competition'
  },
  
  {
    icon: Users,
    title: 'Technical Workshop Leader',
    description: 'Conducted workshop on Data Structures for 100+ students in university',
    date: '2024',
    category: 'Leadership'
  },
  {
    icon: Trophy,
    title: 'Project Exhibition Award',
    description: 'Best project award in annual tech fest for innovative database management system',
    date: '2023',
    category: 'Competition'
  },
  {
    icon: Star,
    title: 'Academic Excellence',
    description: 'Scholarship recipient for maintaining consistent academic performance',
    date: '2023',
    category: 'Academic'
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>ACHIEVEMENTS & AWARDS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and recognition earned through dedication and hard work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => (
            <Card key={idx} className="bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:border-amber-500 hover:scale-105 cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/50">
                    <achievement.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                    {achievement.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">{achievement.title}</CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">{achievement.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-teal-400 font-semibold">{achievement.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}