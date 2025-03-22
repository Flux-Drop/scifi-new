import React, { ReactNode } from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/sidebar";
import Header from "@/components/admin/header";
import prisma from "@/db";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");
  const user = await prisma.user.findUnique({
    where: {
      id: session.user.id,
    },
    select: {
      role: true,
    },
  });
  const role = user?.role;
  if (role !== "ADMIN") redirect("/");
  return (
    <main className="min-h-screen w-full flex flex-row bg-[#F1F1F8]">
      <Sidebar session={session} />
      <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10">
        <Header session={session} />
        {children}
      </div>
    </main>
  );
};

export default Layout;
