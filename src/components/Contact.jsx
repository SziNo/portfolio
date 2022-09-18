import React from 'react'

function Contact() {
  return (
    <section
      name='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'
    >
      <form
        method='POST'
        action='https://getform.io/f/506c139b-8e43-45c7-8edf-a0826c900e5e'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email
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
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flext items-center'>
          Let's collaborate
        </button>
      </form>
    </section>
  )
}

export default Contact
