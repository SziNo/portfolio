import { getArrayData } from '../utils/getArrayData'
import ProjectsItem from './ProjectsItem'

const ProjectsContainer = () => {
  const { projectItems } = getArrayData()

  return (
    <>
      {projectItems.map((item, idx) => {
        return <ProjectsItem key={idx} {...item} />
      })}
    </>
  )
}

export default ProjectsContainer
