
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
        <div className="flex h-7 gap-10 items-center">
          <Logo />
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.name} className="text-white hover:underline">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
           <Submit/>
          </ul>
          <div className="flex gap-4">
            <Button className="bg-white hover:bg-slate-100">
            </Button>
            <Button className="bg-white hover:bg-slate-100">
            </Button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
