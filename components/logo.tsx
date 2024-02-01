import React from "react";
import Link from "next/link";
export function Logo() {
  return (
    <React.Fragment>
      <div className="text-[#ffff] text-4xl font-extrabold">
        <Link href={"/"}>
        <span className="underline">
          D.
        </span>
        </Link>       
      </div>
    </React.Fragment>
  );
}
