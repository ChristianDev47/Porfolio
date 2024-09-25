import GitHub from '../icons/GitHub.astro';
import React from '../icons/React.astro';
import AstroIcon from '../icons/AstroIcon.astro';
import Cloudinary from '../icons/Cloudinary.astro';
import Css from '../icons/Css.astro';
import Django from '../icons/Django.astro';
import Docker from '../icons/Docker.astro';
import Express from '../icons/Express.astro';
import Figma from '../icons/Figma.astro';
import Git from '../icons/Git.astro';
import Html from '../icons/Html.astro';
import Jest from '../icons/Jest.astro';
import Js from '../icons/Js.astro';
import MongoDB from '../icons/MongoDB.astro';
import MySQL from '../icons/MySQL.astro';
import NextJS from '../icons/NextJS.astro';
import NodeJS from '../icons/NodeJS.astro';
import Npm from '../icons/Npm.astro';
import PostgreSQL from '../icons/PostgreSQL.astro';
import Postman from '../icons/Postman.astro';
import Python from '../icons/Python.astro';
import SQL from '../icons/SQL.astro';
import Swagger from '../icons/Swagger.astro';
import Tailwind from '../icons/Tailwind.astro';
import Typescript from '../icons/Typescript.astro';
import Vercel from '../icons/Vercel.astro';
import Vite from '../icons/Vite.astro';
import Vsc from '../icons/Vsc.astro';
import Azure from '../icons/Azure.astro';
import Cloudflare from '../icons/Cloudflare.astro';

export const TAGS = {
  NEXT: {
    name: 'Next.js',
    icon: NextJS,
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    icon: Tailwind,
  },
  REACT: {
    name: 'React',
    icon: React,
  },
  ASTRO: {
    name: 'Astro',
    icon: AstroIcon,
  },
  CLOUDINARY: {
    name: 'Cloudinary',
    icon: Cloudinary,
  },
  CSS: {
    name: 'CSS',
    icon: Css,
  },
  DJANGO: {
    name: 'Django',
    icon: Django,
  },
  DOCKER: {
    name: 'Docker',
    icon: Docker,
  },
  EXPRESS: {
    name: 'Express',
    icon: Express,
  },
  FIGMA: {
    name: 'Figma',
    icon: Figma,
  },
  GIT: {
    name: 'Git',
    icon: Git,
  },
  HTML: {
    name: 'HTML',
    icon: Html,
  },
  JEST: {
    name: 'Jest',
    icon: Jest,
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    icon: Js,
  },
  MONGODB: {
    name: 'MongoDB',
    icon: MongoDB,
  },
  MYSQL: {
    name: 'MySQL',
    icon: MySQL,
  },
  NODEJS: {
    name: 'Node.js',
    icon: NodeJS,
  },
  NPM: {
    name: 'NPM',
    icon: Npm,
  },
  POSTGRESQL: {
    name: 'PostgreSQL',
    icon: PostgreSQL,
  },
  POSTMAN: {
    name: 'Postman',
    icon: Postman,
  },
  PYTHON: {
    name: 'Python',
    icon: Python,
  },
  SQL: {
    name: 'SQL',
    icon: SQL,
  },
  SWAGGER: {
    name: 'Swagger',
    icon: Swagger,
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    icon: Typescript,
  },
  VERCEL: {
    name: 'Vercel',
    icon: Vercel,
  },
  VITE: {
    name: 'Vite',
    icon: Vite,
  },
  VSC: {
    name: 'VS Code',
    icon: Vsc,
  },
  AZURE: {
    name: 'Azure',
    icon: Azure,
  },
  CLOUDFLARE: {
    name: 'Cloudflare',
    icon: Cloudflare,
  },
  GITHUB: {
    name: 'Github',
    icon: GitHub,
  },
};



export const PROJECTS = [
  {
    title: 'GrinChat',
    subtitle: 'Fullstack Online Chat Application',
    description: 'GrinChat is a fullstack online chat application that provides a comprehensive real-time communication solution, combining a robust backend with a modern frontend. The backend, developed with Node.js and Express, provides a complete RESTful API that manages JWT authentication, CRUD operations, and real-time communication using Socket.IO. It uses MongoDB for data storage, ensuring a scalable and efficient architecture. The frontend, built with Next.js and TypeScript, offers a modern and responsive user interface for user registration, instant messaging, contact management, and audio/video calls. The entire system is designed to provide a smooth and continuous user experience with real-time notifications and full integration with backend services. The project demonstrates the implementation of a fullstack solution using modern tools and technologies, with a modular architecture that allows for easy maintenance and scalability.',
    resume: 'GrinChat is a real-time communication application that integrates a robust backend with a modern frontend. It uses Node.js, Express, and MongoDB for managing users, chats, and messages. The frontend is built with Next.js and TypeScript, providing a dynamic and smooth user experience for messaging, calls, and contact management.',
    link: 'https://grinchat.vercel.app',
    github: 'https://github.com/ChristianDev47/GrinChat',
    image: '/projects/grinchat.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/grinchat.mp4',
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.CSS, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MONGODB, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Ecomtren',
    subtitle: 'Fullstack E-Commerce Application',
    description: 'Ecomtren is a fullstack application designed and implemented to manage online e-commerce activities. The project includes a robust backend and a dynamic frontend, both built with modern technologies to provide a scalable and user-friendly system. The backend is developed with Django, implementing JWT authentication for advanced security, route protection, and testing with Jest to ensure reliability. Additionally, it uses Swagger with DRF Spectacular for API documentation. The frontend, built with React and TypeScript, provides a responsive user interface for managing products, shopping carts, and user profiles. The system is designed to offer a smooth and efficient experience in purchasing and managing products, with full integration between frontend and backend.',
    resume: 'Ecomtren is a fullstack e-commerce application, built with Django and React. The backend manages users and orders with JWT authentication and Swagger documentation. The frontend, developed with React and TypeScript, allows for managing products, making purchases, and updating profiles with a dynamic and responsive interface.',
    link: 'https://e-commerce-nine-ebon.vercel.app',
    github: 'https://github.com/ChristianDev47/E-commerce',
    image: '/projects/ecomtren.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/ecomtren.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.DJANGO, TAGS.PYTHON, TAGS.CLOUDINARY, TAGS.POSTGRESQL, TAGS.DOCKER, TAGS.SWAGGER],
  },
  {
    title: 'Boardify',
    subtitle: 'Fullstack Project Management Application',
    description: 'Boardify is a self-designed and implemented fullstack application adapted for effective project management and collaboration. Inspired by Trello, Boardify combines a sophisticated backend with a dynamic and responsive frontend, offering a smooth user experience for managing projects, boards, lists, and cards. The backend is developed with Node.js, Express, and MongoDB, using JWT for authentication, Bcrypt for password security, and Cloudinary for media management. The frontend, built with React and Tailwind CSS, provides a rich user interface with drag-and-drop functionality, calendar visualization, and real-time notifications. The application is deployed in Docker to ensure a consistent development and production environment.',
    resume: 'Boardify is a project management tool inspired by Trello, with a backend based on Node.js and MongoDB. The frontend uses React and Tailwind CSS for an interactive interface with drag-and-drop functionality. Boardify allows for the creation of boards and lists, with integration of calendars and real-time notifications.',
    link: 'https://boardify-liart.vercel.app',
    github: 'https://github.com/ChristianDev47/Boardify',
    image: '/projects/boardify.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/boardify.mp4',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.TAILWIND, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MONGODB, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Tasty Trails',
    subtitle: 'Fullstack Restaurant Ordering System',
    description: 'Tasty Trails is a self-designed and implemented fullstack application for managing online orders for restaurants. It includes both a backend API and a frontend interface, each built with modern technologies to offer a robust, scalable, and user-friendly system. The backend is developed with Node.js and Express, using a MySQL database and following an MVC architecture for efficient data and operation management. Authentication and authorization are managed via JWT, and the system includes CRUD operations for users, roles, orders, and dishes. The frontend, developed with Next.js and TypeScript, provides a dynamic and responsive interface, integrating with the backend API for order and user profile management. The application uses Tailwind CSS for design, React Hook Form for form handling, and Zod for data validation. Both parts of the system are dockerized to ensure a consistent development and production environment.',
    resume: 'Tasty Trails is a restaurant ordering platform, built with Node.js and MySQL on the backend. The frontend is developed with Next.js and Tailwind CSS, offering an intuitive interface for placing orders and managing profiles. The application is fully scalable and user-friendly.',
    link: 'https://tasty-trails-self.vercel.app',
    github: 'https://github.com/ChristianDev47/Tasty_Trails',
    image: '/projects/tasty_trails.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/tasty_trails.mp4',
    tags: [TAGS.NEXT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.CLOUDINARY, TAGS.NODEJS, TAGS.EXPRESS, TAGS.SWAGGER, TAGS.MYSQL, TAGS.JEST, TAGS.DOCKER],
  },
  {
    title: 'Google Translate Copy',
    subtitle: 'Fullstack Translation System',
    description: 'Google Translate Copy is a fullstack application designed to provide efficient text translation services inspired by the traditional Google Translator. The system includes a backend API and a frontend interface, each built with modern technologies to ensure a robust, scalable, and user-friendly translation system. The backend, developed with Django and Django REST Framework (DRF), handles all server-side operations related to text translation, leveraging Cloudflare AI services for automatic language detection and customizable language options. It includes endpoints for text translation, language detection, and error handling. The frontend interface, built with React and TypeScript and styled with Tailwind CSS, offers a clean and intuitive interface for entering text, selecting languages, and viewing translations. It integrates additional features such as text-to-speech and copying translations. Both parts of the system are designed to provide a consistent and efficient user experience across all devices.',
    resume: 'Google Translate Copy is a fullstack text translation application inspired by Google Translate. It uses Django on the backend and React on the frontend, with support for automatic language detection. It includes text-to-speech and translation copying features, ensuring a smooth experience for users.',
    link: 'https://google-translate-pink.vercel.app',
    github: 'https://github.com/ChristianDev47/Google_Translate',
    image: '/projects/google_translate.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/google_translate.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND, TAGS.DJANGO, TAGS.PYTHON, TAGS.CLOUDFLARE],
  },
  {
    title: 'To-Do App',
    subtitle: 'Task Management',
    description: 'To-Do App is a responsive task management application built with React and TypeScript, styled with Tailwind CSS. It provides an intuitive interface for managing tasks, including adding, marking as completed, and deleting tasks. The application also features local storage functionality to keep tasks through page reloads.',
    resume: 'To-Do App is a task management application built with React and TypeScript. It allows users to add, complete, and delete tasks easily. The responsive design and local storage persistence ensure a smooth user experience.',
    link: 'https://to-do-app-nine-flame.vercel.app',
    github: 'https://github.com/ChristianDev47/To-do-app',
    image: '/projects/to_do_app.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/to_do_app.mp4',
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND],
  },
  {
    title: 'Tic Tac Toe',
    subtitle: 'The Classic Game',
    description: 'The Tic-Tac-Toe Game is a responsive frontend implementation of the classic Tic-Tac-Toe game, developed using React with JavaScript and CSS. The application offers a simple and intuitive interface for players to enjoy the game on various devices, with local storage functionality to persist the game state.',
    resume: 'Tic-Tac-Toe Game is a modern version of the classic Tic-Tac-Toe game. Developed with React and JavaScript, it provides a smooth and simple gaming experience. The interface is responsive, and the game state is saved in local storage, allowing players to continue the game after refreshing the page.',
    link: 'https://tic-tac-toe-react-five.vercel.app',
    github: 'https://github.com/ChristianDev47/TicTacToe',
    image: '/projects/tic_tac_toe.webp',
    video: 'https://res.cloudinary.com/dv38v80kd/video/upload/v1727108730/projects/chat_online/videos/tic_tac_toe.mp4',
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS],
  }
];

