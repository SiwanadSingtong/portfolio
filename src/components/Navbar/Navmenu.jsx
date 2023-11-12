import React, { useState } from "react";

const Navmenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        toggleMenu();
      };
  
    return (
      <div>
        <button className="block md:hidden absolute top-6 right-2" onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
  
        <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className='flex sm:flex-row flex-col sm:gap-2 gap-5 items-center text-sm sm:mt-0 mt-3'>
            <li><a href="#" className='p-2 hover:bg-blue-500 rounded-md' onClick={handleLinkClick}>Home</a></li>
            <li><a href="#about" className='p-2 hover:bg-blue-500 rounded-md' onClick={handleLinkClick}>About Me</a></li>
            <li><a href="#project" className='p-2 hover:bg-blue-500 rounded-md' onClick={handleLinkClick}>Project</a></li>
            <li><a href="#contact" className='bg-blue-500 hover:bg-blue-600 p-3 rounded-md font-bold text-sm' onClick={handleLinkClick}>Contact</a></li>
          </ul>
        </div>
      </div>
    );
  };
  

export default Navmenu;
