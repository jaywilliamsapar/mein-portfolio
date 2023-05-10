import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';
import { MdAttachEmail } from 'react-icons/md';
import { ImFilePdf } from 'react-icons/im';
import EmailButton from './emailButton';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[85px] flex justify-between items-center px-4 text-[#fff] font-mono font-semibold'>
      
      <div><Link to="home" smooth={true} duration={400}>
        <img src={Logo} alt="Logo Images" className='mt-16' style={{ width: '110px' }}/>
        </Link>
      </div>

      {/*---------------- WEB MENU ---------------------🧧🧧*/}

      <div>
        <ul className='hidden md:flex'>
          <li><Link to="home" smooth={true} duration={600}>
          <p className='font-semibold hover:text-[#93d424]'>Home</p>
         </Link>
        </li>
          <li><Link to="about" smooth={true} duration={500}>
          <p className='font-semibold hover:text-[#93d424]'>About</p>
         </Link>
         </li>
          <li><Link to="skills" smooth={true} duration={500}>
          <p className='font-semibold hover:text-[#93d424]'>Skills</p>
         </Link>
         </li>
          <li><Link to="project" smooth={true} duration={500}>
          <p className='font-semibold hover:text-[#93d424]'>Projects</p>
         </Link>
         </li>
          <li><Link to="contact" smooth={true} duration={500}>
          <p className='font-semibold hover:text-[#93d424]'>Contact</p>
         </Link>
         </li>
        </ul>
      </div>

      {/* HAMBURGER ICONS  🧧🧧 */ }

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        {/* <FaTimes /> */}
      </div>

      {/*🤖🙂-----------------   MOBILE MENU     ----------------------🧧🧧*/}

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#10102b] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl' >
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
             🏠 Home
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
             🎨 About
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
             💻 Skills
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="project" smooth={true} duration={500}>
             🔥 Projects
         </Link></li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
             📱 Contact
         </Link></li>
      </ul>

      {/*---------------------        SIDE ICONS MENU          --------------------🧧🧧 */}

      <div className='hidden lg:flex fixed flex-col top-[25%] left-0'>
        <ul>
            <li  className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
              <a className='flex justify-between items-center w-full text-[#fff] font-semibold'
                href="https://www.linkedin.com/in/williamsapar/" target="_blank">
                Linkedin <FaLinkedin size={30} /> 
              </a>
            </li>
            <li  className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2b262c]'>
              <a className='flex justify-between items-center w-full text-[#fff] font-semibold'
                href="https://github.com/jaywilliamsapar" target="_blank">
                GitHub <FaGithub size={30}  className='text-gray-300'/> 
              </a>
            </li>
            <li  className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#50b16a]'>
              <a  className='flex justify-between items-center w-full text-[#fff] font-semibold'
              href="mailto:jaywilliamsapar@gmail.com" target="_blank">
                Email <MdAttachEmail size={30} /> 
              </a>
            </li>
            <li  className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#be4343]'>
              <a className='flex justify-between items-center w-full text-[#fff] font-semibold'
              href="/" target="_blank">
                Resume <ImFilePdf size={30} /> 
              </a>
            </li><li  className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6d39d6]'>
              <a className='flex justify-between items-center w-full text-[#fff] font-semibold'
              href="https://discord.com/channels/@me" target="_blank">
                Discords <FaDiscord size={30} /> 
              </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar