import React from "react";
import { Role } from "./project/role";
import { Skill } from "./project/skill";
import { Question } from "./project/Question";

const Hero = () => {
  return (
    <React.Fragment>
      <main className="mt-8">
        <header className="space-y-6 lg:mt-14">
          <h1 className="text-[#89cc55] lg:text-5xl text-4xl text-center text-pretty">
            Developer project Ideal
          </h1>
          <p className="text-md text-[#cccccc] max-w-[40rem] w-full text-center leading-6 m-auto">
            DevIdealHub: A community-driven platform curating project Ideas and
            guides to assist developers in navigating and enhancing their
            learning paths.
          </p>
        </header>
        {/* Role base */}
        <div className="divider mt-14 p-2 ">
          <span className="border-[2px] border-[#cccccc3b] rounded-md lg:text-lg text-sm  px-4 py-1 bg-transparent hover:border-[#cccc]">
            Role based project roadmap
          </span>
        </div>
        <section>
          <Role />
        </section>
        <div className="divider mt-14 p-2 ">
          <span className="border-[2px] border-[#cccccc3b] rounded-md lg:text-lg text-sm  lg:px-4 py-1 bg-transparent hover:border-[#cccc]">
            Skills based project roadmap
          </span>
        </div>
        {/* Skills base */}
        <section>
          <Skill/>
        </section>
        <div className="divider mt-14 p-2 ">
          <span className="border-[2px] border-[#cccccc3b] rounded-md lg:text-lg text-sm px-4 py-1 bg-transparent hover:border-[#cccc]">
         Questions
          </span>
        </div>
        <section>
          <Question/>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Hero;
