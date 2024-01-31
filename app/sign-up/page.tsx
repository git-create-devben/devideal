"use client";
import { useState } from "react";
import { useSignUp, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const { isLoaded, signUp, setActive, setSession } = useSignUp();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const router = useRouter();
  // start the sign up process.

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  const handleOAuthSignIn = async (provider: any) => {
    try {
      await signInOAuth({
        provider: provider,
        signInUrl: "/sso-callback", // Adjust as per your configuration
        callbackUrl: "/", // Adjust as per your configuration
      });
    } catch (err) {
      console.error(err);
    }
  };
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
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <div className="block m-auto bg-[#ffffff] rounded-xl w-full max-w-96 p-8">
      {!pendingVerification && (
        <>
          <div className="flex flex-col justify-center text-center space-y-4">
            <div className="logo_container m-auto"> </div>
            <div>
              <h2 className="text-2xl text-[#212121] font-extrabold">
                SignUp
              </h2>
              <p className="text-sm text-[#8B8E98]">
                Get started with our app, just create an account and enjoy the
                experience
              </p>
            </div>
          </div>
          <form className="mt-10 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md text-[#8B8E98] font-bold">Email</label>
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
              <label htmlFor="password" className="text-md text-[#8B8E98] font-bold">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className=" placeholder:text-sm placeholder:p-4  w-auto h-[40px] p-[0 0 0 40px] rounded-md border-2 border-solid border-[#e5e5e5] filter shadow-sm outline-none transition-all focus:border-transparent focus:shadow-xl focus:bg-transparent"
              />
            </div>
            <button onClick={handleSubmit} className="w-full h-[40px] border-0 rounded-md outline-none text-[#ffffff] cursor-pointer bg-[#115DFC]">Sign up</button>
            <div className="divider">OR</div>
            <button onClick={() => handleOAuthSignIn("google")} className="w-full h-[40px] border-0 rounded-md outline-none text-[#ffffff] cursor-pointer bg-[#115DFC]">Sign in with Google</button>
          </form>
        </>
      )}
      {pendingVerification && (
        <div>
          <form>
            <input
              value={code}
              placeholder="Code..."
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={onPressVerify}>Verify Email</button>
          </form>
        </div>
      )}
    </div>
  );
}
function signInOAuth(arg0: {
  provider: any; signInUrl: string; // Adjust as per your configuration
  callbackUrl: string;
}) {
  throw new Error("Function not implemented.");
}

