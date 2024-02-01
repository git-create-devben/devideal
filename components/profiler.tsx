"use client";

import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Settings = () => {
  const { isLoaded, user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const router = useRouter();

  // Make sure that the useUser() hook has loaded
  if (!isLoaded) return null;
  // Make sure there is valid user data
  if (!user?.id) return null;
  return (
    <Dialog>
      <DialogTrigger asChild className="flex">
        <Button variant="outline">
          <Image
            alt={user?.primaryEmailAddress?.emailAddress!}
            src={user?.imageUrl}
            width={50}
            height={50}
            className="mr-1 rounded-full border border-gray-200 drop-shadow-sm"
          />
          <span>
            {user?.username
              ? user.username
              : user?.primaryEmailAddress?.emailAddress!}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>

        <Button onClick={() => openUserProfile()}>Profile</Button>

        <Button onClick={() => signOut(() => router.push("/"))}>LogOut</Button>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
