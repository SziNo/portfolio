import { getArrayData } from '../utils/getArrayData'
import NavbarItem from './NavbarItem'

const NavbarContainer = ({ isDesktop, isNavVisible, handleClick }) => {
  const { navbarLinkNames } = getArrayData()

  return (
    <ul
      className={
        isDesktop
          ? 'hidden md:flex'
          : isNavVisible
          ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          : 'hidden'
      }
    >
      {navbarLinkNames.map((name, idx) => {
        return (
          <NavbarItem
            key={idx}
            isDesktop={isDesktop}
            name={name}
            handleClick={handleClick}
          />
        )
      })}
    </ul>
  )
}

export default NavbarContainer
