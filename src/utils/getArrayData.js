export const getArrayData = () => {
  const socialIconNames = ['LinkedIn', 'GitHub', 'Email']
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

  return {
    socialIconNames,
    navbarLinkNames,
    projectItems,
  }
}
