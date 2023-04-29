import { getArrayData } from '../utils/getArrayData'
import SkillsItem from './SkillsItem'

const SkillsContainer = () => {
  const { skillNames, imagesContainer } = getArrayData()

  return (
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
      <div>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
          Skills
        </p>
        <p className='py-4'>Some of the technologies I've worked with:</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        {skillNames.map((name, idx) => {
          return <SkillsItem key={idx} name={name} img={imagesContainer[idx]} />
        })}
      </div>
    </div>
  )
}

export default SkillsContainer
