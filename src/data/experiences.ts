import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    designation: "Software Engineer",
    company: "Fortude",
    startDate: "Jan 2024",
    isCurrentJob: true,
    location: "Colombo, Sri Lanka",
    description: [
      "Engineered microservices using NestJS with PostgreSQL for scalable ERP functionalities across inventory, production, and logistics modules.",
      "Implemented GraphQL APIs for efficient client-server communication.",
      "Built responsive and interactive frontend modules with Angular and React.",
      "Enabled inter-service communication and event-driven workflows using Kafka, ensuring decoupled and reliable data flow across services.",
    ],
  },
  {
    designation: "Full Stack Developer",
    company: "Kasper Global Pvt Ltd",
    startDate: "Aug 2022",
    endDate: "Dec 2024",
    isCurrentJob: false,
    location: "Nugegoda, Sri Lanka",
    description: [
      "Developed a scalable monitoring dashboard with configurable settings for IoT devices using Node.js and React.",
      "Managed IoT device communication through RESTful APIs and MQTT protocol.",
      "Demonstrated expertise in both backend and frontend development.",
    ],
  },
  {
    designation: "Software Engineer Intern",
    company: "Surfedge pvt Ltd",
    startDate: "May 2021",
    endDate: "Jul 2022",
    isCurrentJob: false,
    location: "Remote",
    description: [
      "Developed and implemented new features for an online learning platform using Laravel PHP, translating user requirements into scalable solutions.",
      "Designed and built robust backend functionalities to ensure a seamless user experience and platform reliability.",
      "Participated in agile development processes, conducting code reviews and troubleshooting to maintain high-quality code standards.",

    ],
  },

];

export default experiences;
