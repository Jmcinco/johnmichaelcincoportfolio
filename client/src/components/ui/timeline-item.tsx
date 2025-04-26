import { ExperienceType } from "@/lib/types";
import { FaBriefcase } from "react-icons/fa";

type TimelineItemProps = {
  experience: ExperienceType;
  isEven: boolean;
};

export function TimelineItem({ experience, isEven }: TimelineItemProps) {
  return (
    <div className="relative z-10 mb-12">
      <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} md:w-1/2 mb-8 md:mb-0 ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
          <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow ${isEven ? '' : 'md:text-right'}`}>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{experience.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{experience.company}</p>
            <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            <div className={`flex flex-wrap mt-3 gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
              {experience.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center z-20">
          <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center shadow-md">
            <FaBriefcase className="text-white" />
          </div>
        </div>
        
        <div className={`md:w-1/2 ${isEven ? 'md:pr-8 flex justify-end' : 'md:pl-8 flex justify-start'}`}>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded shadow text-center">
            <p className="font-medium text-gray-700 dark:text-gray-200">{experience.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
