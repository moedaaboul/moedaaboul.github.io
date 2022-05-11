import { FaInfo, FaEnvelope } from 'react-icons/fa';
import { BsImages, BsFileEarmarkTextFill } from 'react-icons/bs';
import Cloudinary from './images/logos/cloudinary.svg';
import CSS3 from './images/logos/css3.svg';
import Git from './images/logos/git.svg';
import Handlebars from './images/logos/hbs.svg';
import HTML5 from './images/logos/html5.svg';
import JavaScriptSvg from './images/logos/js.svg';
import MySQL from './images/logos/mysql.svg';
import NodeJS from './images/logos/nodejs.svg';
import React from './images/logos/react.svg';
import GraphQL from './images/logos/graphql.svg';
import MongoDB from './images/logos/mongodb.svg';
import MuiSVG from './images/logos/mui.svg';
import ReduxSVG from './images/logos/redux.svg';

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export const navbarLinks = [
  {
    id: 1,
    url: '/',
    icon: <FaInfo />,
    text: 'About me',
    page: 'home',
  },
  {
    id: 2,
    // url: './assets/resume.pdf',
    url: '/resume',
    icon: <BsFileEarmarkTextFill />,
    text: 'Resume',
    page: '',
  },
  {
    id: 3,
    url: '/portfolio',
    icon: <BsImages />,
    text: 'Portfolio',
    page: 'portfolio',
  },
  {
    id: 4,
    url: '/contact',
    icon: <FaEnvelope />,
    text: 'Contact',
    page: 'contact',
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/m-d-027032228/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://github.com/moedaaboul',
    icon: <FaGithub />,
  },
  {
    id: 5,
    url: 'mailto:muhammad.daaboul1989@gmail.com',
    icon: <SiGmail />,
    text: 'gmail',
  },
  {
    id: 2,
    url: 'https://twitter.com/mdaaboul3',
    icon: <FaTwitter />,
  },
  {
    id: 4,
    url: 'https://stackoverflow.com/users/14984871/m-daaboul',
    icon: <FaStackOverflow />,
  },
];

export const portfolio = [
  {
    id: 1,
    name: 'legogram',
    technologies: [
      'Node.js',
      'JavaScript',
      'Handlebars',
      'Cloudinary',
      'HTML5',
      'CSS3',
      'Git',
      'MySQL',
    ],
    images: [
      'images/legogram/legogram.png',
      'images/legogram/legogram2.png',
      'images/legogram/legogram3.png',
      'images/legogram/legogram4.png',
      'images/legogram/legogram5.png',
      'images/legogram/legogram6.png',
    ],
    github: 'https://github.com/moedaaboul/legogram',
    url: 'https://legogram.herokuapp.com/',
  },
  {
    id: 2,
    name: 'tech-blog',
    technologies: ['Node.js', 'JavaScript', 'HTML5', 'CSS3', 'MySQL'],
    images: [
      'images/blog/tech-blog1.png',
      'images/blog/tech-blog2.png',
      'images/blog/tech-blog3.png',
      'images/blog/tech-blog4.png',
      'images/blog/tech-blog5.png',
      'images/blog/tech-blog6.png',
      'images/blog/tech-blog7.png',
    ],
    github: 'https://github.com/moedaaboul/tech-blog',
    url: 'https://mdaaboul-tech-blog.herokuapp.com/',
  },
  {
    id: 3,
    name: 'jobs-finder',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Git'],
    images: [
      'images/jobs-finder/jobs-finder-1.png',
      'images/jobs-finder/jobs-finder-2.png',
      'images/jobs-finder/jobs-finder-3.png',
      'images/jobs-finder/jobs-finder-4.png',
      'images/jobs-finder/jobs-finder-5.png',
      'images/jobs-finder/jobs-finder-6.png',
    ],
    github: 'https://github.com/moedaaboul/jobs-finder',
    url: 'https://moedaaboul.github.io/jobs-finder/',
  },
  {
    id: 4,
    name: 'team-profile-generator',
    technologies: ['Node.js', 'HTML5', 'CSS3'],
    images: [
      'images/team-generator/team-profile-generator-1.png',
      'images/team-generator/team-profile-generator-2.png',
      'images/team-generator/team-profile-generator-3.png',
    ],
    github: 'https://github.com/moedaaboul/team-profile-generator',
    url: 'https://drive.google.com/file/d/1KAaGDYgHObkcrLzAKw4rKIMEY04-3JRm/view',
  },
  {
    id: 5,
    name: 'quiz-app',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    images: [
      'images/quiz-app/quiz-app-1.png',
      'images/quiz-app/quiz-app-2.png',
      'images/quiz-app/quiz-app-3.png',
      'images/quiz-app/quiz-app-4.png',
      'images/quiz-app/quiz-app-5.png',
      'images/quiz-app/quiz-app-6.png',
      'images/quiz-app/quiz-app-7.png',
      'images/quiz-app/quiz-app-8.png',
    ],
    github: 'https://github.com/moedaaboul/quiz-app',
    url: 'https://moedaaboul.github.io/quiz-app/',
  },
  {
    id: 6,
    name: 'weather-dashboard',
    technologies: ['JavaScript', 'HTML5', 'CSS3'],
    images: [
      'images/weather/weather1.png',
      'images/weather/weather2.png',
      'images/weather/weather3.png',
    ],
    github: 'https://github.com/moedaaboul/weather-dashboard',
    url: 'https://moedaaboul.github.io/weather-dashboard//',
  },
  {
    id: 7,
    name: 'password-generator',
    technologies: ['JavaScript'],
    images: [
      'images/password-generator/password-generator-1.png',
      'images/password-generator/password-generator-2.png',
      'images/password-generator/password-generator-3.png',
      'images/password-generator/password-generator-4.png',
      'images/password-generator/password-generator-5.png',
      'images/password-generator/password-generator-6.png',
      'images/password-generator/password-generator-7.png',
    ],
    github:
      'https://drive.google.com/file/d/1KAaGDYgHObkcrLzAKw4rKIMEY04-3JRm/view',
    url: 'https://moedaaboul.github.io/password-generator/',
  },
  {
    id: 8,
    name: 'book-search-engine',
    technologies: ['React', 'Node.js', 'GraphQL'],
    images: [
      'images/mern/mern1.png',
      'images/mern/mern2.png',
      'images/mern/mern3.png',
      'images/mern/mern4.png',
      'images/mern/mern5.png',
    ],
    github: 'https://github.com/moedaaboul/book-search-engine',
    url: 'https://google-books-search-save-app.herokuapp.com',
  },
  {
    id: 9,
    name: 'babylon',
    technologies: [
      'MongoDB',
      'GraphQL',
      'React',
      'Node.js',
      'Cloudinary',
      'MUI',
      'Git',
      'CSS3',
    ],
    images: [
      'images/babylon/babylon-1.png',
      'images/babylon/babylon-2.png',
      'images/babylon/babylon-3.png',
      'images/babylon/babylon-4.png',
      'images/babylon/babylon-5.png',
      'images/babylon/babylon-6.png',
      'images/babylon/babylon-7.png',
      'images/babylon/babylon-8.png',
      'images/babylon/babylon-9.png',
      'images/babylon/babylon-10.png',
      'images/babylon/babylon-11.png',
      'images/babylon/babylon-12.png',
      'images/babylon/babylon-13.png',
    ],
    github: 'https://github.com/moedaaboul/babylon',
    url: 'https://ebabylon.herokuapp.com/',
  },
  {
    id: 10,
    name: 'redux-store',
    technologies: ['Redux', 'React', 'MongoDB'],
    images: [
      'images/redux-store/redux-store-1.png',
      'images/redux-store/redux-store-2.png',
      'images/redux-store/redux-store-3.png',
      'images/redux-store/redux-store-4.png',
    ],
    github: 'https://github.com/moedaaboul/redux-store',
    url: 'https://redux-store-mdaaboul.herokuapp.com/',
  },
];

export const skills = [
  { name: 'React', classDesc: 'is-rounded', src: React, type: 'Frontend' },
  {
    name: 'JavaScript',
    classDesc: 'is-rounded',
    src: JavaScriptSvg,
    type: 'Frontend',
  },
  {
    name: 'GraphQL',
    classDesc: 'is-rounded p-1',
    src: GraphQL,
    type: 'Backend',
  },
  {
    name: 'Node.js',
    classDesc: 'is-rounded',
    src: NodeJS,
    type: 'Backend',
  },
  { name: 'MySQL', classDesc: '', src: MySQL, type: 'Backend' },
  {
    name: 'MongoDB',
    classDesc: 'is-rounded has-background-light-blue',
    src: MongoDB,
    type: 'Backend',
  },
  {
    name: 'HTML5',
    classDesc: 'is-rounded',
    src: HTML5,
    type: 'Frontend',
  },
  {
    name: 'CSS3',
    classDesc: 'is-rounded',
    src: CSS3,
    type: 'Frontend',
  },
  {
    name: 'MUI',
    classDesc: 'is-rounded has-background-light-blue',
    src: MuiSVG,
    type: 'Frontend',
  },
  {
    name: 'Cloudinary',
    classDesc: 'is-rounded has-background-dark-blue p-1',
    src: Cloudinary,
    type: 'Media',
  },
  {
    name: 'Git',
    classDesc: 'is-rounded',
    src: Git,
    type: 'Version Control',
  },
  {
    name: 'Handlebars',
    classDesc: 'is-rounded has-background-warning-dark p-1',
    src: Handlebars,
    type: 'Frontend',
  },
  {
    name: 'Redux',
    classDesc: 'is-rounded',
    src: ReduxSVG,
    type: 'Frontend',
  },
];
