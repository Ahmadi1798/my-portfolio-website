import project from '../assets/project.png';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.webp';
import project4 from '../assets/project-4.webp';
import project5 from '../assets/project-5.webp';
import project6 from '../assets/project-6.webp';

const PROJECTS = [
  {
    title: 'Mern Blog App',
    image: project,
    description:
      'A modern, full-stack blog platform built with the MERN stack (MongoDB, Express, React, Node.js) and Firebase Authentication. Users can register, log in (including Google login), verify email, reset password, create and manage blog posts, comment, and interact with a beautiful, responsive UI.',
    technologies: [
      'HTML',
      'Tailwind',
      'React',
      'Express.js',
      'Node.js',
      'MongoDB',
      'Firebase',
      'flowbite',
    ],
    liveLink: 'https://mern-blog-five-eta.vercel.app',
  },

  {
    title: 'Jobify Website',
    image: project1,
    description:
      'Jobify is a job tracking application built with React and Express, utilizing Vite for fast development and Tailwind CSS for styling. This application allows users to manage job applications, including adding, editing, and deleting job entries.',
    technologies: [
      'HTML',
      'Tailwind',
      'React',
      'Express.js',
      'Node.js',
      'MongoDB',
    ],
    liveLink: 'https://mern-app-ckej.onrender.com/',
  },
  {
    title: 'Agency Website',
    image: project2,
    description:
      'A modern agency website built with React and Tailwind CSS, featuring a responsive design, smooth animations, and a user-friendly interface. The site showcases services, team members, and client testimonials, providing an engaging experience for visitors.',
    technologies: ['HTML', 'Tailwind', 'React', 'JavaScript'],
    liveLink: 'https://agency-website-tb1a.vercel.app/',
  },
  {
    title: 'ToDo App',
    image: project3,
    description:
      'The To-Do App is a simple and intuitive task management application that allows users to create, manage, and organize their daily tasks efficiently. With a clean and user-friendly interface, this app helps users stay productive by providing features such as task addition, deletion, and status updates',
    technologies: ['HTML', 'Tailwind', 'React', 'JavaScript'],
    liveLink: 'https://to-do-app-one-liart.vercel.app/',
  },
  {
    title: 'InSure Landing Page',
    image: project4,
    description:
      'The InSure Landing Page is a modern and visually appealing website designed to provide users with information about life insurance coverage. The site emphasizes a user-friendly experience, showcasing the benefits of choosing InSure for insurance needs',
    technologies: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
    liveLink: 'https://ahmadi1798.github.io/InSure-Landing-Page/',
  },
  {
    title: 'LoopStudio Website',
    image: project5,
    description:
      "The Loop Studios website showcases the company's expertise in creating world-class virtual reality projects since 2011. It highlights their innovative digital experiences that transform businesses and enhance brand engagement",
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    liveLink: 'https://loopstudio-website1.netlify.app/',
  },
  {
    title: 'Fylo Website',
    image: project6,
    description:
      'The Fylo website is a sleek and modern platform designed for secure file storage and sharing. It emphasizes accessibility, allowing users to access their files from anywhere using various devices. ',
    technologies: ['HTML', 'Tailwind', 'JavaScript'],
    liveLink: 'https://fylo-website-ten.vercel.app/',
  },
];
export default PROJECTS;
