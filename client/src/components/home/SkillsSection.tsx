import { SkillBar } from "@/components/ui/skill-bar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { FaReact, FaJs, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaDocker, FaAws, FaFigma, FaDatabase, FaServer } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

const technicalSkills = [
  { name: "JavaScript / TypeScript", percentage: 95 },
  { name: "React / Next.js", percentage: 90 },
  { name: "HTML5 / CSS3", percentage: 95 },
  { name: "Node.js / Express", percentage: 85 },
  { name: "MongoDB / SQL", percentage: 80 },
];

const languageSkills = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "SQL",
  "PHP",
];

const tools = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaDatabase />, name: "MongoDB" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("right", "", 0.1, 1)}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
            
            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-6"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={fadeIn("right", "", index * 0.1, 0.75)}
                >
                  <SkillBar name={skill.name} percentage={skill.percentage} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn("left", "", 0.1, 1)}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Tools & Technologies</h3>
            
            <motion.div 
              className="grid grid-cols-3 md:grid-cols-4 gap-4"
              variants={staggerContainer(0.05, 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={fadeIn("up", "", index * 0.05, 0.75)}
                  className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md flex flex-col items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="text-3xl text-gray-700 dark:text-gray-300 mb-2">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0.2, 1)}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">Languages I Speak</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {languageSkills.map((language, index) => (
              <motion.div
                key={language}
                variants={fadeIn("up", "", index * 0.1, 0.75)}
                className="bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-md"
              >
                <span className="text-blue-600 dark:text-blue-400 font-mono">{language}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
