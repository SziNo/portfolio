import SkillsContainer from '../components/SkillsContainer'

const Skills = () => {
  return (
    <section
      name='skills'
      className='w-full h-screen bg-[#0a192f] text-gray-300'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4'>Some of the technologies I've worked with:</p>
        </div>
        {/* Container */}
        <SkillsContainer />
      </div>
    </section>
  )
}

export default Skills
