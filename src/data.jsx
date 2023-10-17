import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Danielle',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Graham',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '33 years',
  },

  {
    id: 4,
    title: 'Location : ',
    description: 'United States',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address :',
    description: '4806 Addison Drive    Cedar Falls, Iowa 50613',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '(319)269-0149',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'dani.graham720@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'dani.graham',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },


];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Looking For Experience',
    title: 'Web Developer <span>  </span>',
    desc: '',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Looking For Experience',
    title: 'UI/UX Designer <span>  </span>',
    desc: '',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'Looking For Experience',
    title: 'Full Stack Engineer <span> </span>',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Bachelors Degree <span> Colorado State University Global </span>',
    desc: 'Bachelor of Science degree in Computer Science',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018',
    title: 'Associates Degree <span> Hawkeye Community College </span>',
    desc: 'Associate of Arts degree in Liberal Arts',
  },

 
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '85',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '80',
  },

  {
    id: 4,
    title: 'Java',
    percentage: '75',
  },

  {
    id: 5,
    title: 'C++',
    percentage: '20',
  },

  {
    id: 6,
    title: 'Python',
    percentage: '50',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '25',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: '3D Graphics',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Interactive Cube',
      },
      {
        icon: <FiUser />,
        title: 'Course : ',
        desc: 'Graphics and Visualization',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, WebGL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Android Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Mortgage Calculator',
      },
      {
        icon: <FiUser />,
        title: 'Project Type : ',
        desc: 'Business Implementation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java, XML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Web Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Student Roster',
      },
      {
        icon: <FiUser />,
        title: 'Project Type : ',
        desc: 'Business Implementation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Android Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Quiz Application',
      },
      {
        icon: <FiUser />,
        title: 'Project Type : ',
        desc: 'Business Implementation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java, XML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Project Type : ',
        desc: 'Foundational',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Android Application',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Invententory Tracking System',
      },
      {
        icon: <FiUser />,
        title: 'Project Type : ',
        desc: 'Business Implementation',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Java, XML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.github.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
