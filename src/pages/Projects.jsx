import ProjectsContainer from '../components/ProjectsContainer'

const Projects = () => {
  return (
    <section
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#0a192f] py-10'
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
          <ProjectsContainer />
        </div>
      </div>
    </section>
  )
}

export default Projects
