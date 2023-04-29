import { HiOutlineMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialIconDetails = ({ name, color, hrefPath }) => {
  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-${color}-800`}
    >
      <a
        className='flex justify-between items-center w-full text-gray-300'
        href={hrefPath}
        target='_blank'
        rel='noreferrer'
      >
        {name === 'LinkedIn' ? (
          <>
            LinkedIn <FaLinkedin size={30} />
          </>
        ) : name === 'GitHub' ? (
          <>
            GitHub <FaGithub size={30} />
          </>
        ) : (
          <>
            Email <HiOutlineMail size={30} />
          </>
        )}
      </a>
    </li>
  )
}

export default SocialIconDetails
