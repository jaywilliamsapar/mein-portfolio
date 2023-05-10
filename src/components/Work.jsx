import React, { useState } from 'react';
import WorkImg from '../assets/workImg.jpeg';
import LegalHome from '../assets/LegalHome.svg';
import White from '../assets/white.png';
import Cars from '../assets/cars.jpg';
import Welcome from '../assets/welcome.svg';
import Aryas from '../assets/aryas.svg';

const Work = () => {

    const [dick, setDick] = useState(false)
    const handleClick = () => setDick(!dick)


  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#172d4e]'>

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-400 text-[#e2a165] hover:text-[#fff] hover:border-[#ffa]'>Projects</p>
            <p className='py-6 font-semibold'>|💤| Check out some of my recent projects</p>
        </div>

        {/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

        {/* Grid Items */}  
                <div style={{backgroundImage: `url(${LegalHome})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Project 1 */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                             LAW FIRM
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://jwilliamsapar.my.canva.site/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${Aryas})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Project 2 */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                            ARYAS COFFEE & TEA
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${WorkImg})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Projects 3 */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                            smartNote
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${White})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Project 4*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                            Airsoft Sho[p]
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="https://jwilliamsapar.my.canva.site/white-photocentric-food-and-restaurant-bio-link-website">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${Welcome})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Project 5 */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                            Home Builders
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                <div style={{backgroundImage: `url(${Cars})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
        {/* Hover Effects Project 6 */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider font-mono'>
                            Toyota
                        </span>
                        <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-stone-500 text-amber-500 font-bold text-lg'>Coded</button>
                        </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>
                {/* <ul className={!dick ? 'visible' : 'absolute top-0 left-0 w-full h-screen bg-[#1a8083] flex flex-col justify-center items-center'}>
            <button className='text-[#fff] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e2a165] font-semibold hover:border-[#e2a165]'>See more ૱</button>
                </ul> */}
      </div>
    </div>
  )
}



export default Work