import { getArrayData } from '../utils/getArrayData'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nodejs from '../assets/node.png'
import mongodb from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'
import typescript from '../assets/ts.png'

const SkillsContainer = () => {
  const { skillNames } = getArrayData()

  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
          Skills
        </p>
        <p className='py-4'>Some of the technologies I've worked with:</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={html} alt='HTML icon' />
          <p className='my-4'>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={css} alt='CSS icon' />
          <p className='my-4'>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img
            className='w-20 mx-auto'
            src={javascript}
            alt='JavaScript icon'
          />
          <p className='my-4'>JavaScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img
            className='w-20 mx-auto'
            src={typescript}
            alt='TypeScript icon'
          />
          <p className='my-4'>TypeScript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={react} alt='React icon' />
          <p className='my-4'>React</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon' />
          <p className='my-4'>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={nodejs} alt='NodeJS icon' />
          <p className='my-4'>NodeJS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
          <img className='w-20 mx-auto' src={mongodb} alt='MongoDB icon' />
          <p className='my-4'>MongoDB</p>
        </div>
      </div>
    </div>
  )
}

export default SkillsContainer
