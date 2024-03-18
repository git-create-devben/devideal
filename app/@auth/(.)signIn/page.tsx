"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SignIn from "../../signIn/page";
import { useRouter} from "next/navigation";

export default function Page() {
  const router = useRouter()
  const handleClose = (e: any) => {
     router.back()
  }
  return (
    <>
      <Dialog open onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-[425px]">
            <SignIn />
        </DialogContent>
      </Dialog>
    </>
  );
}
