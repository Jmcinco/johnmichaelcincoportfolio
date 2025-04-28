import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen, FaChevronDown } from "react-icons/fa";
import { fadeIn, slideIn, textVariant } from "@/lib/motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900 z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial="hidden"
            animate="show"
            variants={fadeIn("right", "", 0.1, 1)}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white leading-tight"
              variants={textVariant(0.3)}
            >
              <span className="block">Hello, I'm</span>
              <span className="text-blue-600 dark:text-blue-400 inline-block">
                <TypeAnimation
                  sequence={[
                    'John Michael Cinco',
                    2000,
                    'a Web Developer',
                    2000,
                    'a Application Developer',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light"
              variants={textVariant(0.5)}
            >
              Full-stack web developer specializing in <span className="text-emerald-500 font-semibold">modern</span> JavaScript frameworks
            </motion.p>
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4"
              variants={textVariant(0.7)}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium rounded-md shadow-md hover:shadow-lg"
              >
                Contact Me
              </Button>
            </motion.div>
            <motion.div 
              className="flex space-x-4 justify-center md:justify-start pt-4"
              variants={textVariant(0.9)}
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaGithub className="text-2xl" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-2xl" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaTwitter className="text-2xl" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaCodepen className="text-2xl" />
                <span className="sr-only">CodePen</span>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
            initial="hidden"
            animate="show"
            variants={slideIn("left", "", 0.2, 1)}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 shadow-xl">
              <img 
                src="./src/public/about.jpg" 
                alt="Professional headshot" 
                className="w-full h-full object-cover rounded-full p-2 bg-white dark:bg-gray-800"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
      >
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#about");
          }}
          className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <FaChevronDown className="text-2xl" />
          <span className="sr-only">Scroll down</span>
        </a>
      </motion.div>
    </section>
  );
}
