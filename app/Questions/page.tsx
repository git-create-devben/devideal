import Link from "next/link";
import React from "react";
import { auth, currentUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";

const Questions = async () => {
  const { userId } = auth();
  const user = await currentUser();
  const roadmap = [
    {
      title: "Frontend Developer",
      link: "/frontend",
      questions: "20 Questions",
      topics: "9 topics",
      new: "new",
    },
    {
      title: "Backend Developer",
      link: "/frontend",
      questions: "23 Questions",
      topics: "5 topics",
      new: "new",
    },
  ];
  return (
    <React.Fragment>
      <div className="bg-white flex flex-col py-10 items-center space-y-5">
        <h1 className="text-black lg:text-5xl text-4xl">Questions</h1>

        <p className="text-[#111111] text-center">
          Quizzes to help you test and improve your knowledge and skill up
        </p>
      </div>
      <section className="grid lg:grid-cols-2 gap-6 px-8 mt-28 lg:px-80">
        {roadmap.map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-lg border-2 border-[#ffffff] hover:border-2 hover:border-black"
          >
            {user ? (
              <Link href={item.link} className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-extrabold">{item.title}</h2>
                  <div className="text-sm opacity-55 flex gap-2">
                    <span>{item.questions}</span>.<span>{item.topics}</span>
                  </div>
                </div>

                {/*  show badges based on the status of the user in that particular role */}
                {item.new ? (
                  <Badge className="text-green-400 animate-pulse">{item.new}</Badge>
                ) : (
                  <div></div>
                )}
              </Link>
            ) : (
                <Link href={item.link} className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-extrabold">{item.title}</h2>
                  <div className="text-sm opacity-55 flex gap-2">
                    <span>{item.questions}</span>.<span>{item.topics}</span>
                  </div>
                </div>

                {/*  show badges based on the status of the user in that particular role */}
                {item.new ? (
                  <Badge className="text-green-400 animate-pulse">{item.new}</Badge>
                ) : (
                  <div></div>
                )}
              </Link>
            )}
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Questions;
