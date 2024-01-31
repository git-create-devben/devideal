import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"




const poppins = Poppins({
  subsets: ["latin"],
  weight: "600"
});

export const metadata: Metadata = {
  title: "DevIdeal",
  description: "Developers project ideal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} container`}>
          <Navbar/>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
