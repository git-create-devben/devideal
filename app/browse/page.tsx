import Link from "next/link";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";


const BrowseIdea = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const roadmap = [
    { title: "Frontend Developer", link: "/frontend" },
    { title: "Backend Developer", link: "/browse", soon:"comming soon" },
    { title: "Android Developer", link: "/browse",soon:"comming soon" },
    { title: "FullStack Developer", link: "/browse", soon:"comming soon" },
    { title: "Blockchain Developer", link: "/browse", soon:"comming soon" },
    { title: "JavaScript guide", link: "/browse", soon:"comming soon" },
    { title: "React Developer", link: "/browse", soon:"comming soon" },
    { title: "Python Developer", link: "/browse", soon:"comming soon"},
  ];
  return (
    <React.Fragment>
      <div className="bg-white flex flex-col py-10 items-center space-y-5">
        <h1 className="text-black lg:text-5xl text-4xl">Developer Project Idea</h1>
        <p className="text-[#111111] text-center">
          Step by step guides to build different project base on different
          P &apos; languages
        </p>
      </div>
      <section className="grid lg:grid-cols-2 gap-6 px-8 mt-28 lg:px-80">
        {roadmap.map((item) => (
          <div key={item.title} className="bg-white p-8 rounded-lg border-2 border-[#ffffff] hover:border-2 hover:border-black">
            {
              user ? (
                <Link  href={item.link}>
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="text-sm opacity-55">
                  Step by step project guide to becoming high fashion {item.title}{" "}
                  in 2024
                </p>
                {item.soon ? (
                <Badge className="bg-blue-200 text-gray-700 hover:bg-blue-200 ">{item.soon}</Badge>
              ) : (
                <div></div>
              )}
              </Link>
              )
              :
              (
                <Link  href={"/signIn"}>
                <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <p className="text-sm opacity-55">
                  Step by step project guide to becoming high fashion {item.title}{" "}
                  in 2024
                </p>
              </Link>

              )
            }
           
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default BrowseIdea;
