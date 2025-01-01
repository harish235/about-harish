import project1 from "../assets/projects/project-1.jpeg";
import project2 from "../assets/projects/project-2.jpeg";
import project4 from "../assets/projects/project-4.jpeg";

export const INTRO_CONTENT = `I’m a software developer with a passion for pushing the boundaries of technology. From crafting high-performance backend solutions for large-scale e-commerce platforms to exploring the exciting realms of blockchain, smart contracts, and NFTs, I thrive on solving complex problems. My toolkit spans across Spring Boot, MongoDB, Postgres, Kafka, Solidity, Web3.js, and more. Whether it’s developing scalable infrastructure, automating systems, or diving into data with NLP and computer vision, I’m all about delivering cutting-edge solutions that fuel innovation and business growth.`;

export const ABOUT_TEXT = `I'm a software developer passionate about backend systems and blockchain technologies. With experience building scalable solutions and exploring innovative tech, I thrive on solving complex challenges. I’m always looking for ways to push the boundaries of what’s possible while collaborating with dynamic teams. I enjoy staying ahead of the curve and delivering impactful results that drive growth and efficiency.`;

export const EXPERIENCES = [
  {
    year: "01 / 2023 - Present",
    role: "Software Developer",
    company: "Quinbay Technologies",
    description: `Developed robust backend solutions for an Indonesian e-commerce platform using Spring Boot. Collaborated closely with stakeholders to define project requirements, streamline workflows, and meet delivery timelines, ensuring high performance and scalability.`,
    technologies: ["Spring boot", "MongoDB", "Postgres", "Redis", "Kafka"],
  },
  {
    year: "01 / 2022 - 06 / 2022",
    role: "Blockchain Research Intern",
    company: "Optisol Business Solutions",
    description: `Explored blockchain technologies like smart contracts and NFTs and decentralized app's. Led a team to develop blockchain solutions, including payroll automation and certificate verification.`,
    technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
  },
  {
    year: "06 / 2021 - 12 / 2021",
    role: "Data Analyst Intern",
    company: "Optisol Business Solutions",
    description: `Worked on NLP and computer vision projects, tackling audio processing challenges and transforming unstructured text data like resumes into valuable insights.`,
    technologies: ["Python", "NLTK", "AWS Transcribe", "OpenCV"],
  },
];

export const PROJECTS = [
  {
    title: "Speech analytics of customer calls",
    image: project1,
    description:
      "The objective is to classify the calls in which the customers are satisfied or not satisfied based on their conversation with the agent.",
    technologies: ["Python", "AWS Transcribe", "NLTK", "AWS S3"],
  },
  {
    title: "Intelligent Resume Text Extraction System",
    image: project2,
    description:
      "To develop an intelligent system to extract and structure key information from resumes in PDF format using NLP techniques, handling complex layouts and multiple text instances in the same line.",
    technologies: ["Python", "OPenCv", "Tesseract", "EAST model", "NLTK"],
  },
  {
    title: "Personality Traits Analysis",
    image: project4,
    description:
      "The idea of this project is to build a sentiment analysis model that detects the emotions that underlie a tweet, rather than the usual sentiment classification that only involves truly contrasting sentiments of Positive and Negative.",
    technologies: ["Python", "NLTK", "LSTM"],
  },
];

export const CONTACT = {
  phoneNo: "+(91) 9578355667 ",
  email: "harishsundar235@gmail.com",
};
