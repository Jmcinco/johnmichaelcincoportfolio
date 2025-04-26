import { Link } from "wouter";
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a 
              href="#hero" 
              className="flex items-center space-x-2 text-blue-400"
              onClick={(e) => scrollToSection(e, "#hero")}
            >
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-emerald-500">&lt;</span>
                DevPortfolio
                <span className="text-emerald-500">/&gt;</span>
              </span>
            </a>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating elegant, efficient, and user-focused web solutions. Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 mb-8 md:mb-0 text-center md:text-right">
            <a href="#about" onClick={(e) => scrollToSection(e, "#about")} className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, "#skills")} className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "#projects")} className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" onClick={(e) => scrollToSection(e, "#experience")} className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex flex-col space-y-2 text-center md:text-right">
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alex Parker. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaGithub className="text-xl" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaLinkedin className="text-xl" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter className="text-xl" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaCodepen className="text-xl" />
              <span className="sr-only">CodePen</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
