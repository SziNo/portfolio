import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/ts.png'
import react from '../assets/react.png'
import nodejs from '../assets/node.png'
import mongodb from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'

export const getArrayData = () => {
  const socialIcons = [
    {
      name: 'LinkedIn',
      color: 'blue',
      hrefPath: 'https://www.linkedin.com/in/norbert-szikora-9172b8250/',
    },
    {
      name: 'GitHub',
      color: 'gray',
      hrefPath: 'https://github.com/SziNo',
    },
    {
      name: 'Email',
      color: 'red',
      hrefPath: 'mailto:szino1848@gmail.com',
    },
  ]

  const navbarLinkNames = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  const projectItems = [
    {
      name: 'Helpdesk App',
      stacks: ['MERN', 'Mongoose', 'Redux Toolkit', 'JWT'],
      codePath: 'https://github.com/SziNo/helpdesk-mern-app',
      demoPath: 'https://helpdesk-mern.onrender.com/',
    },
    {
      name: 'Shirtify',
      stacks: ['React', 'ThreeJS', 'Tailwind', 'Framer Motion'],
      codePath: 'https://github.com/SziNo/Shirtify/tree/master/client',
      demoPath: 'https://shirtify.vercel.app/',
    },
    {
      name: 'Sumz',
      stacks: ['React', 'Tailwind', 'RTK Query'],
      codePath: 'https://github.com/SziNo/gpt-4-summarizer',
      demoPath: 'https://gpt-4-summarizer.vercel.app/',
    },
    {
      name: 'Metaverse',
      stacks: ['Next', 'Tailwind', 'Framer Motion'],
      codePath: 'https://github.com/SziNo/metaverse-next13',
      demoPath: 'https://metaverse-next13-phi.vercel.app/',
    },
    {
      name: 'Real Estate App',
      stacks: ['React', 'Firebase', 'CSS'],
      codePath: 'https://github.com/SziNo/realEstateAppWithFirebase',
      demoPath: 'https://real-estate-app-with-firebase.vercel.app/',
    },
    {
      name: 'HooBank',
      stacks: ['React', 'Tailwind'],
      codePath: 'https://github.com/SziNo/hoobank',
      demoPath: 'https://hoobank-alpha.vercel.app/',
    },
  ]

  const skillsContainer = [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: javascript },
    { name: 'TypeScript', img: typescript },
    { name: 'React', img: react },
    { name: 'Tailwind', img: tailwind },
    { name: 'NodeJS', img: nodejs },
    { name: 'MongoDB', img: mongodb },
  ]

  return {
    socialIcons,
    navbarLinkNames,
    projectItems,
    skillsContainer,
  }
}
