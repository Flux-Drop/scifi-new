import React, { ReactNode } from "react";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/sidebar";

const Layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (!session?.user?.id) redirect("/sign-in");
  return (
    <main className="min-h-screen w-full flex flex-row bg-gray-100">
      <Sidebar session={session} />
      <div className="admin-container">
        <p>Header</p>
        {children}
      </div>
    </main>
  );
};

export default Layout;
