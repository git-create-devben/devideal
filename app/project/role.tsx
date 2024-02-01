import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs";
export async function Role() {
  const { userId } = auth();
  const user = await currentUser();

  const role = [
    { name: "Frontend", href: "/frontend", a: "/signIn" },
    { name: "Backend", href: "/frontend" },
    { name: "DevOps", href: "/frontend" },
    { name: "Android", href: "/frontend" },
    { name: "FullStack", href: "/frontend" },
    { name: "Technical Writer", href: "/frontend" },
    { name: "UI Design", href: "/frontend" },
    { name: "Quality Assurance", href: "/frontend" },
    { name: "Cyber Security", href: "/frontend" },
    { name: "UX Design", href: "/frontend" },
  ];
  return (
    <>
      <main className="">
        {/* parent div */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:px-[30rem] py-16 px-14 ">
          {role.map((item) => (
            <div className="role-design" key={item.name}>
              {user ? (
               <Link href={item.href}>{item.name}</Link>
              ) : (
                <Link href={item.a || item.href}>{item.name}</Link>
              )}
            </div>
          ))}
          <div className="role-design">Create Roadmap</div>
        </div>
      </main>
    </>
  );
}
