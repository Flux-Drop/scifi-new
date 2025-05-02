import Header from "@/components/global/header";
import { redirect } from "next/navigation";
import React from "react";
import { auth } from "../../../auth";
import Image from "next/image";
import Footer from "@/components/global/footer";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  console.log("session", session);
  if (!session) {
    redirect("/sign-in");
  }
  return (
    <main className={`flex min-h-screen flex-1 flex-col relative shadow-2xl`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle,_#39E6B9_0%,_#904EF6_44%,_#3F80F6_100%)] opacity-10 blur-3xl" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,_#39E6B9_0%,_#904EF6_44%,_#3F80F6_100%)] opacity-10 blur-3xl" />
      <div className="mx-auto w-full px-5 xs:px-10 md:px-12 relative">
        <Header session={session} />
      </div>
      <div>
         {children}</div>
         <Footer />
    </main>
  );
};

export default Layout;
