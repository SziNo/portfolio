const SkillsItem = ({ name, img }) => {
  return (
    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <img className='w-20 mx-auto' src={img} alt='HTML icon' />
      <p className='my-4'>{name}</p>
    </div>
  )
}

export default SkillsItem
