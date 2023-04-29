import { Link } from 'react-scroll'

const NavbarItem = ({ isDesktop, name, handleClick }) => {
  return (
    <li className={!isDesktop && 'py-6 text-4xl'}>
      <Link
        onClick={!isDesktop && handleClick}
        to={name.toLowerCase()}
        smooth={true}
        duration={500}
      >
        {name}
      </Link>
    </li>
  )
}

export default NavbarItem
