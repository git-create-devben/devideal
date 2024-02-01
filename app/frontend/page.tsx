import { auth, currentUser } from "@clerk/nextjs";

const frontend = () => {
  const { userId } = auth();
  const user = currentUser();
  return <>{!user && <h1 className="text-red-400">Hello front-end no authorize</h1>}
    <main>
        <h1 className="text-blue-400">Hello frontend</h1>
    </main>
  </>;
};

export default frontend;
