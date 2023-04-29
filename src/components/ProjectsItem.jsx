import cover from '../assets/cover.jpg'

const ProjectsItem = ({ name, stacks, codePath, demoPath }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cover})` }}
      className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div relative'
    >
      {/* Title */}
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start mt-3 group-hover:opacity-0 pointer-events-none'>
        <span className='text-3xl font-bold text-gray-300 font-sans'>
          {name}
        </span>
      </div>
      {/* Hover effects */}
      <div className='opacity-0 group-hover:opacity-100 p-6 transition duration-300 transform scale-0 group-hover:scale-100'>
        <div className='flex flex-col justify-center items-center'>
          <span className='text-2xl font-bold text-white tracking-wider'>
            {stacks.join(' / ')}
          </span>
          <div className='pt-8 text-center'>
            <a href={codePath} target='_blank' rel='noreferrer'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                Code
              </button>
            </a>
            <a href={demoPath} target='_blank' rel='noreferrer'>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-pink-600 font-bold text-lg'>
                Demo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem
