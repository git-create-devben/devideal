"use client"
import { useUser, useClerk, SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const SignOut = () => {
  const { signOut, openUserProfile } = useClerk();
  const router = useRouter();
  const { user } = useUser();
  return (
    <>
      <Button onClick={() => signOut(() => router.push("/"))} className="bg-white hover:bg-slate-100 text-black">
        Sign Out
      </Button>
    </>
  );
};

export default SignOut;