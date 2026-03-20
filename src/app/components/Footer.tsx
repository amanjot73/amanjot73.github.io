import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Name and Title */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">Amanjot Singh</h3>
            <p className="text-gray-400">Computer Science Student & Aspiring Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/amanjot73" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-teal-600/30"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amanjotsingh73" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-teal-600/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:kanudeep9876@gmail.com"
              className="w-12 h-12 bg-gray-800 hover:bg-teal-600 rounded-lg flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-teal-600/30"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Amanjot Singh. Built with 
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline mx-1" style={{ color: '#ef4444' }} /> 
            and React
          </p>
        </div>
      </div>
    </footer>
  );
}