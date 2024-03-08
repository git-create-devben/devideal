"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";
// import './404.css'; 

const greenText = 'text-green-500';
const codeText = 'text-gray-300';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container">
 <div>
    </div>
    <div className=" flex flex-col justify-center text-center items-center h-full w-full mt-40">
      <h1 className='text-green-500 text-6xl'>404</h1>
      <p className={`font-bold ${greenText}`}>File Not Found</p>
      <pre className="code">
        <code className={`text-wrap ${codeText}`}>
          Error: Page not found. The requested URL /{window.location.pathname} was not found on this server.
        </code>
      </pre>
      <Link href="/" className="button">
        Go back Home
      </Link>
    </div>
  </div>

  );
}


