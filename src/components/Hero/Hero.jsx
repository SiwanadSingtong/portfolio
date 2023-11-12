import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="bg-slate-950 h-[700px] flex" id="hero">
      <div className="container mx-auto flex flex-col justify-center items-center text-white gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-blue-500 font-semibold">Hi, my name is</p>
          <h1 className="text-6xl font-semibold">
            Siwanad <br className="sm:hidden block" />{" "}
            <span className="text-blue-500">Singtong</span>
          </h1>

          <p className="text-xl text-blue-200">
            <TypeAnimation
              sequence={[
                "I learning to be Frontend Developer",
                1000,
                "I learning to be Fullstack Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </p>
        </div>
        <div className="">
          <button className="p-3 border-2 border-blue-500 rounded-md hover:bg-blue-500">
            <a href="#contact" className="text-xl">
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
