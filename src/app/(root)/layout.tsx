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
    <main className={`flex min-h-screen flex-1 flex-col `}>
      <div className="mx-auto w-full">
        <Header session={session} />
      </div>
      <div className="mt-20 pb-20"> {children}</div>
    </main>
  );
};

export default Layout;
