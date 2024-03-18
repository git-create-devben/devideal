import Link from "next/link"

export const Question = () => {
       return(
        <>
        <main className="">
      {/* parent div */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 xl:px-[30rem] py-16 px-14 ">
        {/* <Link href={"/Questions"} className="role-design">JavaScript</Link> */}
        <div className="role-design cursor-not-allowed">More Coming soon</div>
      </div>
    </main>
        </>
       )
}