
import React from "react";
import { Logo } from "./logo";
import Link from "next/link";

import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import Submit from "./submitIdeal";
export default async function navbar() {
  const menu = [
    { name: "browse Ideal", link: "/browse" },
    { name: "Questions", link: "/Questions" },
    { name: "portfolio", link: "/" },
  ];

  return (
    <React.Fragment>
      <nav className="py-10 md:flex md:justify-center items-center">
        <div className="flex h-7 gap-10 items-center justify-between">
          <Logo />
          <ul className="gap-4 hidden md:flex lg:flex">
            {menu.map((item) => (
              <li key={item.name} className="text-white hover:underline">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
           <Submit/>
          </ul>
          <div className="gap-4 flex">
            <Button className="bg-white hover:bg-slate-100">
            <Link href="/app/sign-up/page.tsx" className="text-black">
                LogIn
              </Link>
            </Button>
            <Button className="bg-white hover:bg-slate-100">
              <Link href="/sign-up" className="text-black">
                SignUp
              </Link>
            </Button>
          </div>
        </div>
      </nav>
      <MobileNav/>
    </React.Fragment>
  );
}


export const MobileNav = () =>{
  const menu = [
    { name: "browse Ideal", link: "/browse" },
    { name: "Questions", link: "/Questions" },
    { name: "portfolio", link: "/" },
  ];
  return(
    <>
    <main className="absolute bottom-6 right-0 left-0 lg:hidden md:hidden ">
      <nav className="bg-white rounded-lg  py-4 w-full max-w-96 m-auto animate-bounce">
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
  )
}