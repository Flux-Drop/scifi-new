"use client";
import Header from "@/components/global/header";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <main className={`flex min-h-screen flex-1 flex-col `}>
      <div className="mx-auto w-full">
        <Header />
      </div>
      <div className="mt-20 pb-20"> {children}</div>
    </main>
  );
};

export default Layout;
