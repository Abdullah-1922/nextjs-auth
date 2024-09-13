import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
     {
      session?.user &&(
        <div>
           <h1 className="text-4xl text-center mt-10">
        Welcome {session?.user?.name}
      </h1>
      <Image
        src={session?.user?.image}
        width={100}
        height={100}
        alt="user img"
        className="mx-auto rounded-full"
      />
        </div>
      )
     }
    </div>
  );
};

export default DashboardPage;