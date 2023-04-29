import { getArrayData } from '../utils/getArrayData'
import SocialIconDetails from './SocialIconDetails'

const SocialIconsContainer = () => {
  const { socialIcons } = getArrayData()

  return (
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        {socialIcons.map((icon, idx) => {
          const { name, color, hrefPath } = icon
          return (
            <SocialIconDetails
              key={idx}
              name={name}
              color={color}
              hrefPath={hrefPath}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default SocialIconsContainer
