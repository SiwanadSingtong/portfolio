import React from "react";
import laravel from "../../assets/laravel-featured.webp";
import { BsCalendar3 } from "react-icons/bs";
import { FaSquareGithub } from "react-icons/fa6";

function Project() {
  return (
    <section id="project" className="bg-slate-950 py-20">
      <div className="container mx-auto text-white flex flex-col gap-3">
        <h1 className=" text-center font-semibold text-5xl text-blue-500">
          Project
        </h1>
        <p className="text-xl text-center text-blue-200 font-medium mt-2">
          This is my project
        </p>
        <div className="flex sm:flex-row flex-col gap-4 items-center justify-center">
          <div className="sm:w-1/3 w-full sm:px-0 px-3 flex flex-col gap-3">
            <a
              href="https://github.com/SiwanadSingtong/vocabulary"
              target="_blank"
              className="hover:text-blue-500"
            >
              <img src={laravel} alt="" className="rounded-md relative duration-300 opacity-90 hover:opacity-100" />
              <h1 className="font-medium text-xl pt-2 px-1">
                Vocabulaly Laravel Project
              </h1>
            </a>
            <div className="flex flex-col gap-3 px-1">
              <p className="text-blue-100 font-light text-sm flex items-center gap-1">
                <BsCalendar3 className="text-blue-500" />
                August 18, 2020
              </p>
              <p>
                I completed a university graduation project by developing a
                website using the Laravel framework. This website is used to
                create English language classes and manage members. It allows
                posting assignments and enables students to respond to
                questions. Additionally, it can generate assignments by randomly
                selecting words that students have answered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
