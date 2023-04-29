import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import SocialIconsContainer from './SocialIconsContainer'
import NavbarContainer from './NavbarContainer'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const isDesktop = useMediaQuery({ minWidth: 768 })

  return (
    <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
      {/* Logo */}
      <div>
        <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
          <img
            src={logo}
            alt='logo'
            style={{
              width: '95px',
              filter:
                'invert(77%) sepia(2%) saturate(863%) hue-rotate(173deg) brightness(96%) contrast(80%)',
            }}
          />
        </Link>
      </div>

      {/* Hamburger */}
      <div
        className=' text-4xl md:hidden z-10 cursor-pointer'
        onClick={handleClick}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu */}
      <NavbarContainer
        isDesktop={isDesktop}
        nav={nav}
        handleClick={handleClick}
      />

      {/* Social Icons */}
      <SocialIconsContainer />
    </nav>
  )
}

export default Navbar
