export type ProjectType = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: "frontend" | "fullstack" | "mobile";
  completedDate: string;
  codeUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
};

export type ExperienceType = {
  id: number;
  title: string;
  company: string;
  description: string;
  skills: string[];
  period: string;
};

export type EducationType = {
  degree: string;
  school: string;
  description: string;
  period: string;
};
