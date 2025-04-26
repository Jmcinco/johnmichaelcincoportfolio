import { motion } from "framer-motion";

type SkillBarProps = {
  name: string;
  percentage: number;
};

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
