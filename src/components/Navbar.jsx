import React from 'react'
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);    //to check if it's mobile view or desktop view to collapse or display navbar

    const handleNav=()=>{
        setNav(!nav);
    }

  return (
    <div className='bg-gradient-to-r from-[#151b34]  to-[#030d35] h-[100px] text-gray-400 mx-auto flex justify-around items-center font-roboto sticky top-0 z-10'>
        <a href="#">

        <img className="w-12 h-12 cursor-pointer" src="https://cdn2.iconfinder.com/data/icons/devops-soft-fill/60/Developer-dev-female-person-user-avatar-programmer-512.png" alt="" />
        </a>
        <ul className='hidden md:flex font-md text-xl '>
            <li className='p-5 hover:text-white' ><a href='#about'>About</a></li>
            <li className='p-5 hover:text-white' ><a href='#work'>Work</a></li>
            <li className='p-5 hover:text-white' ><a href='#projects'>Project</a></li>
            <li className='p-5 hover:text-white' ><a href='#skills'>Skills</a></li>
            <li className='p-5 hover:text-white' ><a href='#contact'>Contact</a></li>
        </ul>
      <div onClick={handleNav} className=" md:hidden">
            {nav?<AiOutlineClose className='hover:fill-white' size={20}/>:<AiOutlineMenu className='hover:fill-white' size={20}/>}
      </div>
      <div className={nav?'fixed h-full top-0 left-0 w-[40%] bg-black ease-in-out duration-500':'fixed left-[-100%]'}>
      <h1 className='bg-gradient-to-r from-pink-500 to-purple-600 font-bold text-3xl bg-clip-text text-transparent ml-4 h-[100px] flex  justify-center items-center'>Jasmine</h1>
        <ul className=' font-md text-xl flex flex-col justify-center items-center '>
            <li className='p-5 hover:text-white' ><a href='#about'>About</a></li>
            <li className='p-5 hover:text-white' ><a href='#work'>Work</a></li>
            <li className='p-5 hover:text-white' ><a href='#projects'>Project</a></li>
            <li className='p-5 hover:text-white' ><a href='#skills'>Skills</a></li>
            <li className='p-5 hover:text-white' ><a href='#contact'>Contact</a></li>
        </ul>
      </div>
   
    </div>
  )
}

export default Navbar
