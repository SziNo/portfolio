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
      name: 'Memory Game',
      stacks: ['React', 'CSS'],
      codePath: 'https://github.com/SziNo/memoryGame',
      demoPath: 'https://dashing-seahorse-e2dcf5.netlify.app/',
    },
    {
      name: 'Fitness App',
      stacks: ['React', 'MUI'],
      codePath: 'https://github.com/SziNo/fitnessApp',
      demoPath: 'https://fitness-app-xkzx.vercel.app/',
    },
    {
      name: 'GitHub Finder',
      stacks: ['React', 'Tailwind'],
      codePath: 'https://github.com/SziNo/githubFinder',
      demoPath: 'https://github-finder-kappa-sepia.vercel.app/',
    },
    {
      name: 'Likey Blog',
      stacks: ['React', 'TypeScript', 'Firebase', 'CSS'],
      codePath: 'https://github.com/SziNo/likeyReactFirebaseTSApp',
      demoPath: 'https://likey-app.vercel.app/',
    },
    {
      name: 'Real Estate App',
      stacks: ['React', 'Firebase', 'CSS'],
      codePath: 'https://github.com/SziNo/realEstateAppWithFirebase',
      demoPath: 'https://real-estate-app-with-firebase.vercel.app/',
    },
  ]

  const skillsContainer = [
    { name: 'HTML', img: html },
    { name: 'CSS', img: css },
    { name: 'JavaScript', img: javascript },
    { name: 'TypeScript', img: typescript },
    { name: 'React', img: react },
    { name: 'Tailwind', img: nodejs },
    { name: 'NodeJS', img: mongodb },
    { name: 'MongoDB', img: tailwind },
  ]

  return {
    socialIcons,
    navbarLinkNames,
    projectItems,
    skillsContainer,
  }
}
