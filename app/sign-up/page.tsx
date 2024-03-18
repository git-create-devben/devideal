"use client";
import { useState } from "react";
import { useSignUp, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { useClerk } from "@clerk/clerk-react";


// import GButton from "./googlebutoon"
export default function SignUpForm() {
  const { isLoaded, signUp, setActive, setSession } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
        username,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  }

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
        toast("SignUp successfully", {
          description: "You can close the modal and reload  the page. To avoid chunks",
        }
        
        )
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
      setError(err.errors[0].message);
    }
  };

  return (
    <div className="block mt-20 m-auto bg-[#ffffff] rounded-xl w-full max-w-96 p-8">
      {!pendingVerification && (
        <>
          <div className="flex flex-col justify-center text-center space-y-4">
            <div className="logo_container m-auto"> </div>
            <div>
              <h2 className="text-2xl text-[#212121] font-extrabold">SignUp</h2>
              <p className="text-sm text-[#8B8E98]">
                Get started with DevIdeal, just create an account and enjoy the
                experience
              </p>
            </div>
          </div>
          <form className="mt-10 space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="username"
                className="text-md text-[#8B8E98] font-bold"
              >
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="username"
                name="username"
                type="text"
                placeholder="DevIdeal2024"
                className=" placeholder:text-sm placeholder:p-4 w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-md text-[#8B8E98] font-bold"
              >
                Email
              </label>
              <input
                onChange={(e) => setEmailAddress(e.target.value)}
                id="email"
                name="email"
                type="email"
                placeholder="DevIdeal@gmail.com"
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
                placeholder="Password"
                className=" placeholder:text-sm placeholder:p-4  w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
              />
            </div>
            <button
              onClick={(e) => {
                handleSubmit(e);
                e.preventDefault();
                toast("Error message", {
                  description: `${error}`,
                  action: {
                    label: "Undo",
                    onClick: () => console.log("Undo"),
                  },
                });
              }}
              className="w-full h-[40px] border-0 rounded-md outline-none text-[#ffffff] cursor-pointer bg-[#115DFC]"
            >
              Sign up
            </button>
           
            <p className="text-red-400 text-md font-extrabold"> {error}</p>

        

            {/* <div className="divider">OR</div> */}
          </form>
        </>
      )}
      {pendingVerification && (
        <div>
          <form className="space-y-4 flex flex-col">
            <input
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
              className=" placeholder:text-sm placeholder:p-4  w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
            />
            <button
              onClick={onPressVerify}
              className="w-full h-[40px] border-0 rounded-md outline-none text-[#ffffff] cursor-pointer bg-[#115DFC]"
            >
              Verify Email
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
