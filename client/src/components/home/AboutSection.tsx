import { FaMapMarkerAlt, FaGraduationCap, FaLanguage, FaDownload, FaLaptopCode, FaMobileAlt, FaServer, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "", 0.1, 1)}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              I'm a passionate web developer with over <span className="font-semibold">1 year of experience</span> creating secure, high-performance web applications and APIs. My journey began with HTML, CSS, and JavaScript, and has evolved to embrace modern frameworks and backend technologies.
              </p>
              <p className="mb-4">
                I specialize in building <span className="text-blue-600 dark:text-blue-400">responsive, accessible, and secure</span> interfaces and APIs that deliver exceptional user experiences. My approach combines clean code, modern design principles, security best practices, and performance optimization.
                </p>
                <p className="mb-4">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical articles and mentoring.
                  </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-emerald-500" />
                  <span>Caloocan, PH</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaGraduationCap className="text-emerald-500" />
                  <span>B.S. Information Technology</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaLanguage className="text-emerald-500" />
                  <span>English</span>
                </div>
              </div>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
                  <span>Download Resume</span>
                  <FaDownload />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 grid grid-cols-2 gap-4"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div 
              variants={fadeIn("up", "", 0.1, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                <FaLaptopCode />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating responsive, modern websites and web applications.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn("up", "", 0.2, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Building interfaces that work seamlessly across all devices.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn("up", "", 0.3, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                <FaServer />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Building robust APIs and server-side applications.</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn("up", "", 0.4, 1)}
              className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105"
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400 mb-4">
                <FaDatabase />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating efficient database structures and queries.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
