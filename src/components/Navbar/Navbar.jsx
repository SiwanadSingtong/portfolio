import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";
import Navmenu from './NavMenu';

function Navbar() {
  return (
    <nav className='bg-slate-900 sticky top-0 border-b-4 border-blue-600 shadow-2xl shadow-blue-500 z-10'>
        <div className="container mx-auto flex sm:flex-row flex-col justify-between text-white p-5 md:items-center sm:px-0 px-2 relative">
            <h1 className='text-2xl font-bold'><a href="/" className='p-2 hover:text-blue-500'>Diamond</a></h1>
            {/* <div className='flex gap-5'>
                <ul className='flex sm:flex-row flex-col gap-2 items-center text-sm'>
                    <li><a href="#" className='p-2 hover:bg-blue-500 rounded-md'>Home</a></li>
                    <li><a href="#about" className='p-2 hover:bg-blue-500 rounded-md'>About Me</a></li>
                    <li><a href="#project" className='p-2 hover:bg-blue-500 rounded-md'>Project</a></li>
                    <li><a href="#contact" className='bg-red-600 hover:bg-red-800 p-3 rounded-md font-bold text-sm'>Contact</a></li>
                </ul>
            </div> */}
            <Navmenu />
        </div>
    </nav>
  )
}

export default Navbar