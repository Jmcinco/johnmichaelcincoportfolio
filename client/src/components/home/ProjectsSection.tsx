import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";
import { FaArrowRight } from "react-icons/fa";
import { projects } from "@/lib/constants";

type FilterCategory = "all" | "frontend" | "fullstack" | "mobile";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeIn("up", "", 0, 1)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="mt-2 w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each represents a unique challenge and solution.
          </p>
        </motion.div>
        
        {/* Project Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {[
            { label: "All", value: "all" },
            { label: "Frontend", value: "frontend" },
            { label: "Full Stack", value: "fullstack" },
            { label: "Mobile", value: "mobile" },
          ].map((filter, index) => (
            <motion.div key={filter.value} variants={fadeIn("up", "", index * 0.1, 0.75)}>
              <Button
                variant={activeFilter === filter.value ? "default" : "outline"}
                className={`rounded-full font-medium ${
                  activeFilter === filter.value
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                }`}
                onClick={() => setActiveFilter(filter.value as FilterCategory)}
              >
                {filter.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn("up", "", index * 0.1, 0.75)}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={zoomIn(0.5, 0.75)}
        >
          <Button
            size="lg"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-md hover:shadow-lg"
          >
            <span>View All Projects</span>
            <FaArrowRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
