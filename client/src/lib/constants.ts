  import { ProjectType, ExperienceType, EducationType } from "./types";

  export const projects: ProjectType[] = [
    {
      id: 1,
      title: "Front End Design for NEU College of Informatics and Computing Studies",
      description: "Front End Design for NEU College of Informatics and Computing Studies",
      image: "./images/cics.jpg",
      technologies: ["WordPress", "Elementor"],
      category: "fullstack",
      completedDate: "Mar 2023",
      codeUrl: "javascript:void(0)",
      liveUrl: "javascript:void(0)",
      detailsUrl: "javascript:void(0)",
    },
    {
      id: 2,
      title: "Front End Design for NEU Virtual Learning Environment",
      description: "Front End Design for NEU Virtual Learning Environment",
      image: "./images/cics.jpg",
      technologies: ["WordPress", "Elementor"],
      category: "frontend",
      completedDate: "Mar 2023",
      codeUrl: "javascript:void(0)",
      liveUrl: "javascript:void(0)",
      detailsUrl: "javascript:void(0)",
    },
    {
      id: 2,
      title: "Online Restaurant Reservation System for PiggyWings",
      description: "Capstone Project",
      image: "./images/piggywings.png",
      technologies: ["Bootstrap", "PHP", "MySQL"],
      category: "fullstack",
      completedDate: "Mar 2023",
      codeUrl: "javascript:void(0)",
      liveUrl: "javascript:void(0)",
      detailsUrl: "javascript:void(0)",
    },
  ];

  export const experiences: ExperienceType[] = [
    {
      id: 1,
      title: "Application Developer: Cloud FullStack",
      company: "IBM Solutions Delivery, Inc",
      description: [
        "Designed, developed, and maintained secure Rest API and SOAP APIs and microservices compliant with ISO 20022 standards, ensuring robust interoperability and adherence to industry security and regulatory requirements.",
        "Collaborated with cross-functional teams to address and resolve technical problems swiftly, maintaining system integrity and uptime.",
        "Conducted in-depth code reviews and security investigations using Splunk and Kibana, leveraging tools like SonarQube and Trivy to perform advanced security scans, ensuring API functionality and protection against vulnerabilities.",
        "Developed and managed comprehensive test data strategies for API testing, driving rigorous validation across multiple environments to ensure secure and reliable performance.",
      ],
      skills: ["SpringBoot", "Java", "XML", "JUnit5","Kibana", "Postman", "SoapUI"],
      period: "April 23, 2024 - March 28, 2025",
    },
    {
      id: 2,
      title: "Intern - Web Developer",
      company: "New Era University - Center for Data Research and Online Media",
      description: [
        "Developed Front-end Design for New Era University - College of Informatics and Computing Studies.",
        "Worked on New Era University - Virtual Learning Environment using WordPress and Elementor.",
      ],
      skills: ["WordPress", "Custom CSS", "Elementor"],
      period: "2022 - 2023",
    },
  ];

  export const education: EducationType = {
    degree: "B.S. Information Technology",
    school: "New Era University",
    description: "Graduate with Service Awardee, Most Active Officer, Dean's Lister",
    period: "2019 - 2023",
  };
