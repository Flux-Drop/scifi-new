"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { adminSidebarLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 flex h-screen flex-col justify-between bg-white px-5 pb-5 pt-10">
      <div>
        <div className="flex flex-row items-center gap-2 border-b border-dashed border-[#6D54B5]/20 pb-10 max-md:justify-center">
          {/* WIP: ADD LOGO */}
          {/* <Image src="/logo.png" width={37} height={37} alt="logo" /> */}
          <p className="text-[#6D54B5] font-bold text-xl">Scifi</p>
        </div>
        <div className="mt-10 flex flex-col gap-5">
          {adminSidebarLinks.map((link, index) => {
            const isSelected =
              (link.route !== "/admin" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;
            return (
              <Link href={link.route} key={link.route}>
                <div
                  className={cn(
                    "flex flex-row items-center w-full gap-2 rounded-lg px-5 py-3.5 max-md:justify-center",
                    isSelected && "bg-[#6D54B5] shadow-sm"
                  )}
                >
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      alt={link.text}
                      fill
                      className={cn(
                        isSelected
                          ? "brightness-0 invert object-contain"
                          : "object-contain"
                      )}
                    />
                  </div>
                  <p
                    className={cn(
                      isSelected ? "text-white" : "text-black",
                      "hidden lg:block"
                    )}
                  >
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="my-8 flex w-full flex-row gap-2 rounded-full border border-light-400 px-6 py-2 shadow-sm max-md:px-2 items-cente justify-center">
        <Avatar>
          <AvatarFallback className="bg-purple-100 rounded-full">
            <Image
              src={"/assets/profiles/1.png"}
              alt="Avatar"
              width={50}
              height={50}
              className="rounded-full h-full w-full"
            />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-black">{session?.user?.name}</p>
          <p className="text-foreground text-xs">{session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
