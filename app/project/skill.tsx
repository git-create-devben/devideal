import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
import { Badge } from "@/components/ui/badge";
import { Skills } from "./data";
export async function Skill() {

  const { userId } = auth();
  const user = await currentUser();
  return(
  <>
    <main className="">
      {/* parent div */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:px-[30rem] py-16 px-14 ">
       { Skills.map((item, i) => (
         <div key={i} className="role-design cursor-not-allowed hover:border-none">
           {/* check if the user is sign up, if true redirect to role href else login */}
           {user ? (
                <Link href={item.href} className="cursor-not-allowed">{item.name}</Link>
              ) : (
                <Link href={item.a || item.href} className="cursor-not-allowed">{item.name}</Link>
              )}
           {item.soon ? (
                <Badge className="bg-blue-200 text-gray-700 hover:bg-blue-200">{item.soon}</Badge>
              ) : (
                <div></div>
              )}
             
         </div>
       ))}
        {/* <div className="role-design">Create Roadmap</div> */}
      </div>
    </main>
  </>
  )
}
