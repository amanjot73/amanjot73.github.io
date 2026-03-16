import { Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A multi-module Django-based hospital management system designed to streamline hospital operations with role-based access for admins, doctors, patients, receptionists, and pharmacists. Supports appointment scheduling, prescription handling, and centralized patient record management.',
    techStack: ['Python', 'Django'],
    link: '#',
    github: 'https://github.com/amanjot73/Hospital-Management-System'
  },
  {
    title: 'Khalsa Threads',
    description: 'Developed a Django backend for an e-commerce platform to understand backend architecture and request handling. Implemented product management, inventory tracking, order processing, and database validation to maintain consistent data.',
    techStack: ['Python', 'Django'],
    link: '#',
    github: 'https://github.com/amanjot73/Khalsa_Threads'
  },
  {
    title: 'AQI Prediction System',
    description: 'Built a machine learning model to predict Air Quality Index (AQI) using historical environmental datasets. Applied data cleaning, feature engineering, and multiple ML algorithms to improve prediction accuracy and evaluate performance.',
    techStack: ['Python', 'Machine Learning', 'Pandas'],
    link: '#',
    github: 'https://github.com/amanjot73/Air-Quality-Prediction'
  },
  {
    title: 'Movie Recommendation System',
    description: 'Developed a movie recommendation engine that suggests movies based on user preferences using similarity metrics and filtering techniques. Implemented data preprocessing and content-based recommendation algorithms for personalized suggestions.',
    techStack: ['Python', 'Machine Learning', 'Pandas'],
    link: '#',
    github: 'https://github.com/amanjot73/Movie-Recommendation'
  },
  {
    title: 'World Happiness Analysis Dashboard',
    description: 'Created an interactive Power BI dashboard analyzing global happiness trends using the World Happiness Report dataset. Applied data preparation, DAX calculations, and data modeling to generate meaningful visual insights across countries and regions.',
    techStack: ['Power BI', 'DAX', 'Data Modeling'],
    link: '#',
    github: 'https://github.com/amanjot73/World-Happiness-Analysis-Dashboard'
  },
  {
    title: 'More Projects Coming Soon',
    description: 'I\'m constantly working on new and exciting projects. Check back soon to see more of my work!',
    techStack: [],
    link: '',
    github: '',
    comingSoon: true
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 tracking-wide" style={{ fontFamily: 'var(--font-section)' }}>FEATURED PROJECTS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications and academic projects showcasing my technical abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} className={`flex flex-col ${project.comingSoon ? 'bg-gray-900/50 border-2 border-teal-500/60' : 'bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/30 hover:border-teal-500 hover:scale-105 cursor-pointer'} transition-all duration-300`} style={project.comingSoon ? { animation: 'morphCard 6s ease-in-out infinite' } : {}}>
              <CardHeader className="space-y-3">
                <CardTitle className={`text-2xl ${project.comingSoon ? 'text-gray-400' : 'text-white'}`}>{project.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              {project.techStack.length > 0 && (
                <CardContent className="flex-1 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIdx) => (
                      <Badge key={techIdx} variant="secondary" className="bg-teal-950 text-teal-300 border border-teal-800 hover:bg-teal-900 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              )}
              {!project.comingSoon && (
                <CardFooter className="pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-600 text-black hover:bg-teal-950 hover:text-teal-300 hover:border-teal-600 transition-all"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}