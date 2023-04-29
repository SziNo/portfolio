import { getArrayData } from '../utils/getArrayData'
import SkillsItem from './SkillsItem'

const SkillsContainer = () => {
  const { skillsContainer } = getArrayData()

  return (
    <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
      {skillsContainer.map((item, idx) => {
        const { name, img } = item
        return <SkillsItem key={idx} name={name} img={img} />
      })}
    </div>
  )
}

export default SkillsContainer
