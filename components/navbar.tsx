import React from "react";

import { Logo } from "./logo";
import Link from "next/link";
import { Button } from "./ui/button";
import Submit from "./submitIdeal";
import Settings from "./profiler";
import { auth, currentUser } from "@clerk/nextjs";
export default async function navbar() {
  const menu = [
    { name: "browse Ideal", link: "/browse" },
    { name: "Questions", link: "/Questions" },
    { name: "portfolio", link: "https://wallp.vercel.app" },
  ];
  const { userId } = auth();
  const user = await currentUser();


  return (
    <React.Fragment>
      <nav className="py-10 md:flex md:justify-center items-center">
        <div className="flex h-7 gap-12 items-center justify-around">
          <Logo />

          <ul className="gap-4 hidden md:flex lg:flex items-center">
            {menu.map((item) => (
              <li key={item.name} className="text-white hover:underline">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <Submit />
          </ul>

          {!user && (
            <div className="gap-4 flex">
              <Button className="bg-white hover:bg-slate-100">
                <Link href="/signIn" className="text-black">
                  LogIn
                </Link>
              </Button>

              <Button className="bg-white hover:bg-slate-100">
                <Link href="/sign-up" className="text-black">
                  SignUp
                </Link>
              </Button>
            </div>
          )}
          <div className="gap-4 flex">
            <Settings />
          </div>
        </div>
      </nav>
      <MobileNav />
    </React.Fragment>
  );
}

export const MobileNav = () => {
  const menu = [
    { name: "browse Ideal", link: "/browse" },
    { name: "Questions", link: "/Questions" },
    { name: "portfolio", link: "https://walpp.vercel.app" },
  ];
  return (
    <>
      <main className="fixed bottom-5 left-1/2 z-30 w-full lg:hidden md:hidden -translate-x-1/2 transform animate-fade-slide-up   transition-all duration-300">
        <nav className="bg-white rounded-lg  py-4 w-full max-w-96 m-auto animate-bounce p-2">
          <ul className="flex gap-6 justify-center">
            {menu.map((item) => (
              <li key={item.name} className="text-black hover:underline ">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
    </>
  );
};
