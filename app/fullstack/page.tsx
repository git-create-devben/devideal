import React from "react";
import "./frontend.css";
import data from "./json/beginner.json";
import data2 from "./json/intern.json";
import data3 from "./json/nerd.json";
import { Novice } from "../types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

interface NoviceData {
  novice: Novice[];
}

interface InternData {
  intern: Novice[];
}

interface NerdData {
  nerd: Novice[];
}

const Frontend = () => {
  const { novice } = data as unknown as NoviceData;
  const { intern } = data2 as unknown as InternData;
  const { nerd } = data3 as unknown as NerdData;
  return (
    <React.Fragment>
      <div className="bg-white  flex flex-col py-10 items-center space-y-5">
        <h1 className="text-black lg:text-5xl text-4xl">Frontend Developer</h1>
        <p className="text-[#111111] text-center">
          Step by step project guide to becoming high fashion Frontend in 2024
        </p>
      </div>
      <section className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-white text-2xl text-center">Front-end Projects</h1>
        <div className="lg:hidden border-2 border-dashed h-[70px] mt-4 -mb-5"></div>
        <main className="flex lg:flex-row flex-col items-center">
          <div className="lg:border-r-4">
            <div className="text-white p-2 flex  items-center mt-10">
              <hr className="text-white border-2 lg:w-52 w-[8rem]" />
              <span className="border-[2px] border-[#cccccc3b] rounded-md  text-sm  px-4 py-1 bg-transparent hover:border-[#cccc]">
                Novice 😎
              </span>
              <hr className="text-white border-2 lg:w-52 w-[8rem]" />
            </div>
            <main className="flex flex-col gap-4">
              {novice.map((novices, index) => (
                <Drawer key={index}>
                  <DrawerTrigger asChild>
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name={novices.title}
                        id={novices.title}
                        className="w-6"
                      />
                      <h2 className="text-white lg:text-2xl cursor-pointer">
                        {novices.title}
                      </h2>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-2xl">
                      <DrawerHeader>
                        <DrawerTitle className="text-2xl font-extrabold">
                          {novices.title}
                        </DrawerTitle>
                        <DrawerDescription className="text-balance">
                          {novices.desc}
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="ml-4">
                        <div>
                          <h2 className="text-xl font-extrabold">
                            Recommended language
                          </h2>
                          <ul className="flex flex-col ">
                            {novices.tools.map((tool) => (
                              <li key={index} className="opacity-40">
                                <Link passHref href={tool.url}>
                                  {tool.lang}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2 mt-4">
                        <h2 className="text-xl font-extrabold">
                          Visit these resources to learn more :
                        </h2>
                        <ol>
                          {novices.resources.map((resource) => (
                            <li
                              key={index}
                              className="underline opacity-35 hover:opacity-95"
                            >
                              <Link passHref href={resource.url}>
                                {resource.name}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              ))}
            </main>
          </div>
          <div>
            <div className="text-white p-2 flex  items-center mt-10">
              <hr className="text-white border-2 lg:w-52 w-[8rem]" />
              <span className="border-[2px] border-[#cccccc3b] rounded-md text-sm  px-4 py-1 bg-transparent hover:border-[#cccc]">
                Intern 😁
              </span>
              <hr className="text-white border-2 lg:w-52 w-[8rem]" />
            </div>
            <main className="flex flex-col gap-4 ">
              {intern.map((interns, index) => (
                <Drawer key={index}>
                  <DrawerTrigger asChild>
                    <div className="flex gap-2 lg:ml-4">
                      <input
                        type="checkbox"
                        name={interns.title}
                        id={interns.title}
                        className="w-6"
                      />
                      <h2 className="text-white lg:text-2xl cursor-pointer">
                        {interns.title}
                      </h2>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-2xl">
                      <DrawerHeader>
                        <DrawerTitle className="text-2xl font-extrabold">
                          {interns.title}
                        </DrawerTitle>
                        <DrawerDescription className="text-balance">
                          {interns.desc}
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="ml-4">
                        <div>
                          <h2 className="text-xl font-extrabold">
                            Recommended language
                          </h2>
                          <ul className="flex flex-col ">
                            {interns.tools.map((tool) => (
                              <li key={index} className="opacity-40">
                                <Link passHref href={tool.url}>
                                  {tool.lang}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="ml-4 space-y-2 mt-4">
                        <h2 className="text-xl font-extrabold">
                          Visit these resources to learn more :
                        </h2>
                        <ol>
                          {interns.resources.map((resource) => (
                            <li
                              key={index}
                              className="underline opacity-35 hover:opacity-95"
                            >
                              <Link passHref href={resource.url}>
                                {resource.name}
                              </Link>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>
                  </DrawerContent>
                </Drawer>
              ))}
            </main>
          </div>
        </main>
        <div className="text-white p-2 flex  items-center mt-10">
          <hr className="text-white border-2 lg:w-52 w-[8rem]" />
          <span className="border-[2px] border-[#cccccc3b] rounded-md text-sm  px-4 py-1 bg-transparent hover:border-[#cccc]">
            Nerd 🙄
          </span>
          <hr className="text-white border-2 lg:w-52 w-[8rem]" />
        </div>
        <section className="flex flex-col gap-4 ">
          {nerd.map((nerds, index) => (
            <Drawer key={index}>
              <DrawerTrigger asChild>
                <div className="flex gap-2 ">
                  <input
                    type="checkbox"
                    name={nerds.title}
                    id={nerds.title}
                    className="w-6"
                  />
                  <h2 className="text-white lg:text-2xl cursor-pointer">
                    {nerds.title}
                  </h2>
                </div>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-2xl">
                  <DrawerHeader>
                    <DrawerTitle className="text-2xl font-extrabold">
                      {nerds.title}
                    </DrawerTitle>
                    <DrawerDescription className="text-balance">
                      {nerds.desc}
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="ml-4">
                    <div>
                      <h2 className="text-xl font-extrabold">
                        Recommended language
                      </h2>
                      <ul className="flex flex-col ">
                        {nerds.tools.map((tool) => (
                          <li key={index} className="opacity-40">
                            <Link passHref href={tool.url}>
                              {tool.lang}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="ml-4 space-y-2 mt-4">
                    <h2 className="text-xl font-extrabold">
                      Visit these resources to learn more :
                    </h2>
                    <ol>
                      {nerds.resources.map((resource) => (
                        <li
                          key={index}
                          className="underline opacity-35 hover:opacity-95"
                        >
                          <Link passHref href={resource.url}>
                            {resource.name}
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          ))}
        </section>
      </section>
    </React.Fragment>
  );
};

export default Frontend;
