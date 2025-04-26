import { motion } from "framer-motion";
import { ProjectType } from "@/lib/types";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

type ProjectCardProps = {
  project: ProjectType;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group h-full">
      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-blue-600 text-white text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="View Code"
                    >
                      <FaCode />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">Completed: {project.completedDate}</span>
            <a href={project.detailsUrl || "#"} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors">
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
