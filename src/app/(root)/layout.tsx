import Header from "@/components/global/header";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../auth";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log("session", session);
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <main className={`flex min-h-screen flex-1 flex-col relative`}>
      <div className="mx-auto w-full px-5 xs:px-10 md:px-36 z-50 ">
        <Header session={session} />
        
      </div>
      <div className="mt-20 pb-20"> {children}</div>
      {/* <div className=""> {children}</div> */}
    </main>
  );
};

export default Layout;
