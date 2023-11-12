import React from "react";

//ICONS
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto items-center text-center px-3">
        <h1 className="text-5xl font-semibold text-blue-500">Contact</h1>
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-2xl font-semibold">
            send me an email if you want to connect! Additionally
          </h2>
          <div className="flex items-center justify-center gap-2">
            <MdEmail className="text-blue-500" />
            <h2 className="text-xl font-semibold text-blue-500">
              siwanad.diamond@gmail.com
            </h2>
          </div>
          <h3 className="text-md font-medium">
            Or fell free to connect on social media.
          </h3>
          <div className="flex justify-center items-center text-3xl gap-2">
            <a
              href="https://www.instagram.com/samurai.diamond/"
              target="_blank"
              className="p-1 hover:text-blue-500"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/Siwanad.Mon/"
              target="_blank"
              className="p-1 hover:text-blue-500"
            >
              <BiLogoFacebook />
            </a>
            <a
              href="https://www.linkedin.com/in/siwanad-singtong-79778a24b/"
              target="_blank"
              className="hover:text-blue-500"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/SiwanadSingtong"
              target="_blank"
              className="hover:text-blue-500 text-4xl"
            >
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
