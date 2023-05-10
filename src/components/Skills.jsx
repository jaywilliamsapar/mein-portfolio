import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import FireBase from '../assets/firebase.png';
import Mongo from '../assets/mongo.png';


// import NODE from '../assets/node.png';
// import Tailwind from '../assets/tailwind.png';
// import AWS from '../assets/aws.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#172d4e] text-gray-300'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-red-400 text-[#e2a165] hover:text-[#fff] hover:border-[#ffa]'>Skills</p>
                <p className='py-4 font-semibold'>|💫| These are the technologies I've worked with</p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='  hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>HTML</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>CSS</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JS-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>JAVASCRIPT</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="REACT-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>REACT</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={GitHub} alt="GITHUB-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>GITHUB</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={FireBase} alt="FIREBASE-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>FIREBASE</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={Node} alt="NODE-icon" />
                    <p className='text-[#e2a165] hover:text-[#1ca81c] font-semibold'>NODE.JS</p>
                </div>
                <div className=' hover:scale-125 duration-200'>
                    <img className='w-20 mx-auto' src={Mongo} alt="MONGODB-icon" />
                    <p className='text-[#e2a165]  hover:text-[#1ca81c] font-semibold'>MONGO DB</p>
                </div>      
            </div>
            
        </div>
      
    </div>
  )
}

export default Skills