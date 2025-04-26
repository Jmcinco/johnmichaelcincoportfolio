import { TimelineItem } from "@/components/ui/timeline-item";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { experiences, education } from "@/lib/constants";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Work <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
          
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                variants={fadeIn("up", "", index * 0.1, 0.75)}
              >
                <TimelineItem
                  experience={experience}
                  isEven={index % 2 === 1}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0.2, 0.75)}
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Education</h3>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xl mx-auto">
            <h4 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{education.degree}</h4>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{education.school}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{education.description}</p>
            <p className="text-gray-500 dark:text-gray-400">{education.period}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
