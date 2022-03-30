import { FaInfo, FaEnvelope } from 'react-icons/fa';
import { BsImages, BsFileEarmarkTextFill } from 'react-icons/bs';
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

export const navbarLinks = [
  {
    id: 1,
    url: '/',
    icon: <FaInfo />,
    text: 'About me',
  },
  {
    id: 2,
    url: './assets/resume.pdf',
    icon: <BsFileEarmarkTextFill />,
    text: 'Resume',
  },
  {
    id: 3,
    url: '',
    icon: <BsImages />,
    text: 'Portfolio',
  },
  {
    id: 4,
    url: '',
    icon: <FaEnvelope />,
    text: 'Contact',
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/m-d-027032228/',
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    url: 'https://twitter.com/mdaaboul3',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://github.com/moedaaboul',
    icon: <FaGithub />,
  },
  {
    id: 4,
    url: 'https://stackoverflow.com/users/14984871/m-daaboul',
    icon: <FaStackOverflow />,
    text: 'Contact',
  },
];
