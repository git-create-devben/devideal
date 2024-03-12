import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import ConvexClientProvider from "./ConvexClientProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export const metadata: Metadata = {
  title: "DevIdeal",
  description: "Developers project ideal",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} wind`}>
        <ConvexClientProvider>
          <div>
            <Navbar />
           {children}
            {auth}          
            <Toaster />
          </div>
        </ConvexClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
