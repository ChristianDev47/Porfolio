import { date } from "astro:schema";
import { TAGS } from "./tags";

export const EXPERIENCE = [
  {
    title: "Backend Developer",
    link: "https://www.idoctus.com/",
    date: "March 2025 - Present",
    location: "Madrid, Spain · Remote",
    description: "As a Backend Developer at iDoctus M3 Inc., I contribute to the development of scalable and robust solutions using PHP and Laravel. My role involves designing and implementing new features, optimizing system performance, and resolving technical issues to ensure a seamless user experience. Additionally, I actively participate in improving development processes by applying best practices and modern methodologies within a collaborative and remote work environment.",
    tags: [TAGS.PHP, TAGS.LARAVEL, TAGS.POSTGRESQL, TAGS.GIT, TAGS.GITHUB, TAGS.DOCKER]
  },
  {
    title: "Full Stack Developer Freelance",
    link: "https://www.linkedin.com/in/christian-delgado-sanchez",
    date: "December 2024 - January 2025",
    location: "San Francisco, California, United States · Remote",
    description: "As a Freelance Full Stack Developer, I worked on the design and development of the Pitchfy platform for a client in the U.S., using technologies such as React, Node.js, Express, and MongoDB. My involvement ranged from creating a modern and intuitive interface to implementing advanced features like an intelligent chatbot to enhance user interaction. Additionally, I integrated a Google login system using Google Cloud, a secure payment system with Stripe, and deployed the backend on an AWS EC2 server, ensuring scalability and high performance. I also managed the final deployment of the website using a GoDaddy domain and AWS Route 53. During the process, I optimized the platform's SEO, resulting in increased visibility on search engines, and improved the page's performance by 50%, significantly reducing load times and enhancing the user experience.",
    tags: [TAGS.REACT, TAGS.NODEJS, TAGS.TYPESCRIPT, TAGS.EXPRESS, TAGS.TAILWIND, TAGS.GOOGLECLOUD, TAGS.AWS, TAGS.STRIPE, TAGS.MONGODB, TAGS.GITHUB, TAGS.FIGMA, TAGS.JEST, TAGS.VITE],
  },
  {
    title: "Intern as Full Stack Developer",
    link: "https://itdstarija.edu.bo/",
    date: "March 2023 – August 2023",
    location: "Tarija, Bolivia",
    description: "During my internship, I optimized internal information systems, improving the management of academic reports and student data, which reduced the report generation time by 30%. I updated the institutional website in React, enhancing its usability and accessibility, which increased user satisfaction and reduced technical queries by 15%. Additionally, I optimized queries in SQL Server, automating the generation of academic reports and reducing processing time by 40%. I led the migration of over 10,000 records to the SAD system, ensuring a successful transition, and provided technical support, resolving more than 50 incidents.",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT, TAGS.REACT, TAGS.NODEJS, TAGS.GITHUB, TAGS.SQL, TAGS.TAILWIND, TAGS.FIGMA, TAGS.VITE],
  },
]
