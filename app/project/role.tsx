import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
// ? role is role based project data
import { role } from "./data";

export async function Role() {
  const { userId } = auth();
  const user = await currentUser();
  return (
    <>
      <main className="">
        {/* parent div */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:px-[30rem] py-16 px-14 ">
          {role.map((item, index) => (
            <div className="role-design" key={index}>
              {/* check if the user is sign up, if true redirect to role href else login */}
              {user ? (
                <Link href={item.href}>{item.name}</Link>
              ) : (
                <Link href={item.a || item.href}>{item.name}</Link>
              )}

              {/*  show badges based on the status of the user in that particular role */}
              {item.new ? (
                <Badge className="text-green-400 animate-pulse">{item.new}</Badge>
              ) : (
                <div></div>
              )}
            </div>
          ))}
          {/* <div className="role-design cursor-not-allowed">Create Roadmap</div> */}
        </div>
      </main>
    </>
  );
}
