"use client";

import * as React from "react";
import { currentUser, useSignIn } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

interface Props {
  message: string;
}

export default function SignIn(props: Props) {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const pathname = usePathname();
  const istitle = pathname !== "/";
  // Handle the submission of the sign-in form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    // Start the sign-in process using the email and password provided
    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      if (completeSignIn.status !== "complete") {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }

      if (completeSignIn.status === "complete") {
        await setActive({ session: completeSignIn.createdSessionId });
        toast("LogIn successfully", {
          description: "You can close the modal and reload",
        })
        router.push("/browse");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="block mt-20 m-auto bg-[#ffffff] rounded-xl w-full max-w-96 p-8">
      <div className="flex flex-col justify-center text-center space-y-4">
        <div className="logo_container m-auto"> </div>
        <div>
          <h2 className="text-2xl text-[#212121] font-extrabold">
            Welcome back
          </h2>
     

          {istitle && (
            <p className="text-sm text-[#8B8E98]">
              {props.message} Log-In to continue experience DevIdeal
            </p>
          )}
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="mt-10 space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-md text-[#8B8E98] font-bold">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
            type="email"
            value={email}
            className=" placeholder:text-sm placeholder:p-4 w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-md text-[#8B8E98] font-bold"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            name="password"
            type="password"
            value={password}
            className=" placeholder:text-sm placeholder:p-4 w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full h-[40px] border-0 rounded-md outline-none text-[#ffffff] cursor-pointer bg-[#115DFC]"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
