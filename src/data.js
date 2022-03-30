import { FaInfo, FaEnvelope } from 'react-icons/fa';
import { BsImages, BsFileEarmarkTextFill } from 'react-icons/bs';

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
