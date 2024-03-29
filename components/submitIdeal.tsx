"use client";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { redirect, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
export default function Submit() {
  const [title, setTitle] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");
  const [selectedValuelevel, setSelectedValuelevel] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [Resources, setResources] = React.useState("");
  const SubmitIdeals = useMutation(api.ideal.SubmitIdeals);
  const  router = useRouter();  
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleSelectChangelevel = (value: string) => {
    setSelectedValuelevel(value);
  };
  const handleDescriptionChange = (event: any) => {
    setDescription(event.target.value);
  };
  const handleResourceChange = (event: any) => {
    setResources(event.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    SubmitIdeals({
      title,
      description: Description,
      resources: Resources,
      plang: selectedValue,
      level: selectedValuelevel,
    });

    toast("Ideal submitted successfully", {
      description: "You can close the tab",
    }),
    router.refresh()
    console.log({ title, Description });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="text-white">
          Submit Ideal
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] font-bold font-sans">
        <DialogHeader>
          <DialogTitle>Submit Ideal</DialogTitle>
          <DialogDescription>
            Do you have Project Ideal? <br />
            Submit Ideal on this Ul or through{" "}
            <Link
              href="https://github.com/git-create-devben/devideal"
              className="underline text-blue-700 font-black text-md"
            >
              Github
            </Link>
          </DialogDescription>
        </DialogHeader>
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input
                id="name"
                // value={title}
                placeholder="short title of the project"
                className="col-span-3"
                onClick={handleTitleChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Language
              </Label>
              <Select onValueChange={handleSelectChange} value={selectedValue}>
                <SelectTrigger id="framework" className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="col-span-3">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Level
              </Label>
              <Select
                onValueChange={handleSelectChangelevel}
                value={selectedValuelevel}
              >
                <SelectTrigger id="framework" className="col-span-3">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" className="col-span-3">
                  <SelectItem value="next">Novice</SelectItem>
                  <SelectItem value="sveltekit">Intern</SelectItem>
                  <SelectItem value="astro">Nerd</SelectItem>
                  <SelectItem value="nuxt">Pro Guru</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Description" className="text-right">
                Description
              </Label>
              <Textarea
                placeholder="Describe the project and please make it understandable"
                className="col-span-3"
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Description" className="text-right">
                Resources
              </Label>
              <Textarea
                placeholder="Input as much as many resources that'll help in building the project ."
                className="col-span-3"
                onChange={handleResourceChange}
              />
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Git push
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
