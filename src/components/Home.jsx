import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <section name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi there, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Norbert Szikora
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Front-End developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          focused on learning and building basically anything related to ReactJS
          and CSS.
          <br /> In the future I'd like to broaden my knowledge with many other
          technologies, such as NextJS, React Native, MERN stack and many more I
          don't even know of yet.
        </p>
        <div>
          <Link to='projects' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Projects
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
