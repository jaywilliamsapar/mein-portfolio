import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#172d4e]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#e2a165] font-bold hover:text-[#fff] hover:border-[#ffa]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#fff]' >Jay William</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#d47924]'>Front-End Developer.</h2>
            <p className='text-[#e2a165] py-4 max-w-[700px] font-semibold'>I'm a Software Engineer specializing in creating, building 
                (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack Web applications.
            </p>

            <div>
              <Link  to="project" smooth={true} duration={500}>
                <button className='text-[#fff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% font-semibold hover:border-[#e2a165]'>
                    View Project
                  <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='animate-bounce w-6 h-6 ml-3'/>
                  </span>
                </button>
              </Link>
            </div>
        </div>

        
      
    </div>
  )
}

export default Home;