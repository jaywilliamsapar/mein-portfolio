import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#172d4e] flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/9dd3d013-7743-486b-8714-657e8aad7d98" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-400 text-[#e2a165] hover:text-[#fff] hover:border-[#ffa]'>Contact</p>
                <p className='text-gray-300 py-4 font-semibold'>௹ Submit the form below or hit me an email..  </p>
                <p> <span className='text-[#e2a165] font-mono'> 
                ↪ 🎯 jaywilliamsapar@gmail.com | +63 994-901-8821</span> </p>
            </div>
            <input className='bg-[#3e5279] p-2 text-base text-[#ffa70f] ' type="text" placeholder='₦ame' name='name' />
            <input className='my-4 p-2 bg-[#3e5279] text-base text-[#ffa70f] ' type="email" placeholder='€mail' name='email' />
            <textarea className='bg-[#3e5279] p-2 text-base text-[#ffa70f] ' name="message" rows="4" placeholder='₼essage'></textarea>
            <button className='text-white border-2 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  hover:border-[#e2a165] px-4 py-3 my-10 mx-auto flex items-center font-semibold animate-bounce w-35 h-15'> Let's Coɭɭaborate 🔥</button>
        </form>
    </div>
  )
}

export default Contact