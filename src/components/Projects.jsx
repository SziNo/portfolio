import cover from '../assets/cover.jpg'

const Projects = () => {
  return (
    <section
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid item */}
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            {/* Title */}
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                Helpdesk App
              </span>
            </div>
            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-100 flex p-6'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  MERN / Mongoose / Redux Toolkit / JWT
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/helpdesk-mern-app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://helpdesk-mern.onrender.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                Memory Game
              </span>
            </div>
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  ReactJS / CSS
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/memoryGame'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://dashing-seahorse-e2dcf5.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                Fitness App
              </span>
            </div>
            <div className='opacity-0 group-hover:opacity-100 p-4'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  ReactJS / Material UI
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/fitnessApp'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://fitness-app-xkzx.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                GitHub Finder
              </span>
            </div>
            <div className='opacity-0 group-hover:opacity-100'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  ReactJS / Tailwind
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/githubFinder'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://github-finder-kappa-sepia.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                Likey Blog
              </span>
            </div>
            <div className='opacity-0 group-hover:opacity-100 p-2'>
              <div>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  ReactJS / TypeScript / Firebase / CSS
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/likeyReactFirebaseTSApp'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://likey-app.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cover})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
          >
            <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
              <span className='text-3xl font-bold text-gray-300 font-sans'>
                Real Estate App
              </span>
            </div>
            <div className='opacity-0 group-hover:opacity-100'>
              <div className='p-4'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  ReactJS / Firebase / CSS
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://github.com/SziNo/realEstateAppWithFirebase'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a
                    href='https://real-estate-app-with-firebase.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
