import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#172d4e] text-gray-300'>
      
      <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-6'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-400 text-[#e2a165] hover:text-[#fff] hover:border-[#ffa]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6'>
                    <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm<span className='text-yellow-500'> Jay William</span>, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p className='text-[#e2a165] font-semibold'>I am passionate in creating and building software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About