function Contact() {
  return (
    <section
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center px-4 pb-2'
    >
      <form
        method='POST'
        action='https://getform.io/f/506c139b-8e43-45c7-8edf-a0826c900e5e'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pt-1'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or feel free to use my email or LinkedIn!
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='email'
          placeholder='Email'
          name='email'
        />
        <textarea
          name='message'
          rows='10'
          className='bg-[#ccd6f6] p-2'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center transition duration-300 rounded-lg transform hover:scale-125'>
          Send
        </button>
      </form>
    </section>
  )
}

export default Contact
