import React from "react";
import { Link } from "react-router-dom";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineClockCircle, AiFillInstagram } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

function Topbar() {
  return (
    <nav className=" bg-slate-700">
      <div className="container mx-auto flex sm:flex-row flex-col justify-between p-2 items-center text-sm text-gray-300">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <AiOutlineClockCircle className="text-blue-500" />
            <h1>
              <Link to="/">Opening - 24 hr.</Link>
            </h1>
          </div>
          <div className="flex border-l-2 border-blue-500 pl-4 items-center gap-3 text-lg">
            <a href="https://www.instagram.com/samurai.diamond/" target="_blank" className="p-1 hover:text-blue-500"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/Siwanad.Mon/" target="_blank" className="p-1 hover:text-blue-500"><BiLogoFacebook /></a>
          </div>
        </div>
        <div className="flex sm:flex-row items-center flex-col sm:gap-4 gap-2">
          <div className="flex flex-row gap-1 items-center">
            <MdEmail className="text-blue-500" />
            <p>siwanad.diamond@gmail.com</p>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <FaPhoneAlt className="text-blue-500" />
            <p>+66 922473390</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
