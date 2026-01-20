import bss from '../pics/bss2.png';
import pgc from '../pics/pgc2.png';
import gcu from '../pics/gcu2.png';

import github from '../pics/github.png';

import Axcenders from '../pics/Axcenders.png';
import mCollection from '../pics/mCollection.jpg';
import AG from '../pics/AG.jpg';

import mc from '../pics/mc.jpg';
import amazon from '../pics/amazon.jpg';
import toDo from '../pics/toDo.jpg';
import calculator from '../pics/calculator.png';
import rps from '../pics/rps.png';
import fb from '../pics/fb.jpg';
import yt from '../pics/yt.jpg';
import userManagementSystem from '../pics/userManagementSystem.png';
import colorMixer from '../pics/colorMixer.png';
import NetStream from '../pics/NetStream.jpg'

import corel from '../pics/corel0.png';
import logoMaker from '../pics/logoMaker.png';
import canva from '../pics/canva.png';

import cpp from '../pics/cpp.png';
import c from '../pics/c.png';
import python from '../pics/python.png';
import scratch from '../pics/scratch.png';

import html from '../pics/html.png';
import css from '../pics/css.png';
import tailwind from '../pics/tailwind.png';
import bootstrap from '../pics/bootstrap.png';
import js from '../pics/js.ico';
import react from '../pics/react.ico';
import sql from '../pics/sql.png'

import firebase from '../pics/fireBase.png';
import vercel from '../pics/vercel.png';
import git from '../pics/git.png';
import vsCode from '../pics/vsCode.png';
import emailJSImg from "../pics/EmailJs.jpg";
import MicrosoftSQLServer from "../pics/Microsoft SQL Server.png";

export const skillsInfo = [
  {
    title: 'Website Development',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'JavaScript', logo: js },
      { name: 'Tailwind CSS', logo: tailwind },
      { name: 'Bootstrap', logo: bootstrap },
      { name: 'React JS', logo: react }
    ]
  },
  {
    title: 'Programming',
    skills: [
      { name: 'C++', logo: cpp },
      { name: 'JavaScript', logo: js },
      { name: 'C', logo: c },
      { name: 'Python', logo: python },
      { name: 'Scratch', logo: scratch },
      { name: 'SQL', logo: sql },
    ]
  },
  {
    title: 'Graphic Design',
    skills: [
      { name: 'CorelDraw', logo: corel },
      { name: 'LogoMaker', logo: logoMaker },
      { name: 'Canva', logo: canva },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'VS Code', logo: vsCode },
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'Vercel', logo: vercel },
      { name: 'Firebase', logo: firebase },
      { name: 'Email JS', logo: emailJSImg },
      { name: 'Microsoft SQL Server', logo: MicrosoftSQLServer},
      
    ]
  }
];

export const experiences = [
  {
    id: 0,
    img: Axcenders,
    role: 'Co-founder',
    company: 'Axcend',
    date: 'June 2025 - Present',
    desc: 'I co-founded Axcend, a modern web development startup, alongside two other passionate developers. As the Frontend Developer, I focus on building fast, responsive, and visually engaging web applications using the latest technologies. Along with coding, I also contribute to product design ideas, client collaboration, and shaping the startup’s growth journey.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Tailwind CSS',
      'Bootstrap',
      'React JS'
    ]
  },
  {
    id: 1,
    img: mCollection,
    role: 'Sales Supervisor',
    company: 'M Collection',
    date: 'January 2025 – Present',
    desc: 'As a Sales Supervisor at M Collection, I manage day-to-day retail operations while ensuring smooth inventory flow and accurate stock tracking. My role also includes monitoring sales and finances to support business growth, alongside leading the team to deliver exceptional customer service and build strong client relationships.',
    skills: [
      'Retail Operations',
      'Inventory Management',
      'Sales Tracking',
      'Financial Monitoring',
      'Customer Service',
      'Team Leadership',
      'Client Relationship Management'
    ]
  },
  {
    id: 2,
    img: AG,
    role: 'Design Intern',
    company: 'Al Awan Graphics',
    date: 'Aug – Sep 2024',
    desc: 'During my internship at Al Awan Graphics, I worked on creative design projects including packaging, marketing materials, and business cards. I ensured all designs aligned with the company’s brand identity, delivering visually appealing and professional outputs that strengthened brand consistency across platforms.',
    skills: [
      'LogoMaker',
      'CorelDraw',
      'Graphic Design',
      'Brand Identity',
      'Packaging Design',
      'Marketing Material Design',
      'Business Card Design',
      'Visual Consistency'
    ]
  },
];

export const education = [
  {
    id: 0,
    img: gcu,
    school: "GC University Lahore",
    date: "Sept 2024 - Present",
    grade: "3.3 CGPA",
    desc: "I am currently pursuing my Bachelor's degree (BSCS) in Computer Science from GC University, Lahore. During my time at GCU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Applications of Information Technology, Programming Fundamentals, Object-Oriented Programming, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GC University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor's of Computer Science",
  },
  {
    id: 1,
    img: pgc,
    school: "Punjab Group of Colleges",
    date: "Sept 2022 - May 2024",
    grade: "78%",
    desc: "I completed Intermediate in Computer Science from Punjab Group of Colleges, Lahore, under the BISE board, where I studied Statistics, Mathematics, and Computer Science.",
    degree: "Intermediate in Computer Science",
  },
  {
    id: 2,
    img: bss,
    school: "Beaconhouse School System",
    date: "Aug 2009 - May 2022",
    grade: "83%",
    desc: "I completed my class 10 education from Beaconhouse School System under the BISE board, where I studied Physics, Chemistry, Mathematics, and Computer Science. I also developed multiple soft skills like debating, drama, arts, and public speaking, and learned tech tools like Scratch, a block-based visual programming language for game and story development.",
    degree: "Matric in Science (CS)",
  },
];

export const projects = [
  {
    id: 9,
    title: "NetStream (Netflix Clone)",
    description:
      "Developed a feature-rich streaming platform inspired by Netflix using React (with Vite) and Firebase, implementing secure authentication, real-time video streaming with YouTube embedding, and dynamic search across movies and TV shows. Built responsive layouts with TailwindCSS, interactive Netflix-style UI components, and integrated TMDB API for fetching movie and TV show data, ensuring a modern, production-ready experience across mobile, tablet, and desktop devices.",
    image: NetStream,
    tags: ["React", "Vite", "Firebase", "Tailwind CSS", "React Router DOM", "TMDB API", "Authentication", "Video Streaming", "Responsive Design", "UI/UX"],
    github: "https://github.com/arfa642/NetStream-Netflix-Clone-",
  },
  {
    id: 0,
    title: "User Management System",
    description:
      "Developed a user management web app with React and JSON Server, implementing full CRUD operations with real-time API integration. Built responsive layouts using Tailwind CSS and Bootstrap, with dynamic forms for user management, plus validation, error handling, and a clean UI/UX for seamless experience.",
    image: userManagementSystem,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap", "JSON Server", "CRUD", "API"],
    github: "https://github.com/arfa642/User-Management-System-React-JSON-Server-Project",
  },
  {
    id: 1,
    title: "RGB Color Mixer with Persistent Storage",
    description:
      "Built an RGB Color Mixer app with React and Bootstrap featuring sliders and inputs for dynamic color adjustment with real-time preview. Added quick-set white/black, validation for inputs, and error handling. Integrated localStorage for persistent colors and designed a clean, responsive UI for better usability.",
    image: colorMixer,
    tags: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "localStorage"],
    github: "https://github.com/arfa642/RGB-Color-Mixer-with-Persistent-Storage-React-Bootstrap",
  },
  {
    id: 2,
    title: "M Collection Fashion E-Commerce Store",
    description:
      "Developed a responsive product collection web app with HTML, CSS, and vanilla JavaScript. Designed a mobile-friendly grid layout with hover animations. Integrated EmailJS for real-time email functionality, enabling user confirmations and admin notifications without a backend. Optimized for performance and seamless browsing.",
    image: mc,
    tags: ["HTML", "CSS", "JavaScript", "EmailJS", "Responsive Design"],
    github: "https://github.com/arfa642/M-Collection-E-Commerce-store-HTML-CSS-JavaScript-Project"
  },
  {
    id: 3,
    title: "Amazon Shopping Clone",
    description:
      "Built an Amazon-style shopping cart app with HTML, CSS, and JavaScript. Implemented dynamic product listing, add-to-cart, quantity updates, and real-time price calculation via DOM manipulation. Used localStorage to persist cart data and designed a clean, responsive e-commerce layout with intuitive navigation.",
    image: amazon,
    tags: ["HTML", "CSS", "JavaScript", "localStorage", "DOM Manipulation", "E-commerce"],
    github: "https://github.com/arfa642/Amazon-Shopping-Clone-HTML-CSS-JavaScript-Project"
  },
  {
    id: 5,
    title: "Rock Paper Scissors Web Game",
    description:
      "Developed an interactive Rock-Paper-Scissors game using HTML, CSS, and JavaScript with an image-based UI. Added modular game logic, keyboard shortcuts (r, p, s), and auto-play mode. Implemented localStorage for persistent score tracking and responsive button animations, ensuring a fun and engaging experience",
    image: rps,
    tags: ["HTML", "CSS", "JavaScript", "localStorage", "Game Development", "Responsive Design"],
    github: "https://github.com/arfa642/rock-paper-scissors-html-css-js"
  },
  {
    id: 6,
    title: "To-Do List Web App",
    description:
      "Developed a fully functional To-Do List web app using HTML, CSS, and JavaScript. Implemented real-time task addition, deletion, and detail toggling via DOM manipulation. Integrated localStorage to persist tasks across sessions, with a responsive and visually appealing layout for improved usability and interaction.",
    image: toDo,
    tags: ["HTML", "CSS", "JavaScript", "localStorage", "DOM Manipulation", "Responsive Design"],
    github: "https://github.com/arfa642/To-Do-List-Web-App-HTML-CSS-JavaScript-Project"
  },
  {
    id: 7,
    title: "YouTube Interface Clone",
    description:
      "Created a responsive front-end clone of the YouTube homepage using HTML and CSS. Replicated core layout elements including header, video thumbnails, and sidebar navigation with modular CSS for clean structure. Designed a visually accurate, mobile-friendly interface to practice modern front-end development techniques.",
    image: yt,
    tags: ["HTML", "CSS", "Responsive Design", "Frontend Development", "UI Clone"],
    github: "https://github.com/arfa642/YouTube-Interface-Clone-HTML-CSS-Web-Development-Project"
  },
  {
    id: 8,
    title: "Facebook Interface Clone",
    description:
      "Built a responsive front-end clone of the Facebook homepage using HTML and modular CSS. Replicated major layout components including header, sidebar, news feed, stories, and reels. Designed with clean, structured CSS to ensure scalability and responsiveness, closely mimicking the look and feel of the original platform.",
    image: fb,
    tags: ["HTML", "CSS", "Responsive Design", "Frontend Development", "UI Clone"],
    github: "https://github.com/arfa642/Facebook-Interface-Clone-HTML-CSS-Web-Development-Project"
  },
];
