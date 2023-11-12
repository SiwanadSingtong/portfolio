import React from "react";

function Aboutme() {
  return (
    <section className="bg-slate-950 py-20" id="about">
      <div className="container mx-auto text-white">
        <h1 className="text-center font-semibold text-5xl text-blue-500">About Me</h1>
        <div className="flex sm:flex-row flex-col gap-2 w-full mt-5">
          <div className="sm:w-1/2 w-full px-3">
            <p>
              I have experience in developing websites using the Laravel
              framework for my university graduation project. I have also
              developed single-page WordPress websites. Currently, I am studying
              ReactJS
            </p>
          </div>
          <div className="sm:w-1/2 w-full flex flex-col gap-2 px-3">
            <p>Languages / Frameworks</p>
            <ul className="flex flex-wrap gap-4">
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">HTML/CSS</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">Wordpress</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">React</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">Laravel</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">JavaScript</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">Bootstrap</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">Tailwind</p></li>
            </ul>
            <p>Learning</p>
            <ul className="flex flex-wrap gap-4">
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">NodeJS</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">PHP</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">MongoDB</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">MUI</p></li>
              <li><p className="bg-blue-500 p-2 rounded-lg sm:text-base text-sm">TypeScript</p></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
