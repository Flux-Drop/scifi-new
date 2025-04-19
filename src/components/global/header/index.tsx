"use client";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useUi } from "@/contexts/UiContext";
import { Session } from "next-auth";
import Link from "next/link";
import DesktopMenu from "../Menu/desktop-menu";
import MobileMenu from "../Menu/mobile-menu";

import { signOutUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUser } from "@/contexts/UserDataContext";
import Image from "next/image";
import { toast } from "sonner";
import { useState } from "react";

const Header = ({ session }: { session: Session }) => {
  const { isMobile, isTablet } = useUi();
  const { currentUser } = useUser();

  const handleSignOut = () => {
    signOutUser();
    toast.success("Sign out successful");
  };
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];
 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
  <header className="my-10 flex justify-between gap-5 items-center px-6 bg-white/5 backdrop-blur-lg border-1 border-white/15 py-2.5 rounded-full">
    <Link href="/" className="text-white font-bold capitalize text-xl ">
      {/* WIP: Add logo */}
      {/* <Image src="icons/logo.svg" alt="logo" width={40} height={40} /> */}
      Scifi
    </Link>
    <div className="flex items-center text-white gap-1 ">
      {isMobile || isTablet ? <MobileMenu /> : <DesktopMenu />}
    </div>
    {session?.user?.email ? (
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <Avatar>
            <AvatarFallback>
              {/* {getInitials(session?.user?.name || "IN")} */}
              <Image
                src={"/assets/profiles/1.png"}
                alt={session?.user?.name!}
                width={40}
                height={40}
              />
            </AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Profile Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4 w-full">
            <div className="flex justify-between items-center gap-4 w-full">
              <h1 className="font-semibold">Name: </h1>
              <h3 className="w-full font-normal">{session.user.name}</h3>
            </div>
            <div className="flex justify-between items-center gap-4 w-full">
              <h1 className="font-semibold">Email: </h1>
              <h3 className="w-full font-normal">{session.user.email}</h3>
            </div>
          </div>

          <DialogFooter>
            <div className="flex flex-col items-center w-full gap-4">
              {currentUser?.role === "ADMIN" && (
                <Button
                  className="w-full cursor-pointer bg-[#6D54B5] text-white hover:bg-[#6D54B5]/70"
                  onClick={() => {
                    window.location.href = "/admin";
                  }}
                >
                  Admin Dashboard
                </Button>
              )}
              <Button
                variant={"destructive"}
                className="w-full cursor-pointer"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    ) : (
      <Link href="/sign-in" className="hidden lg:block">
        <ShinyButton className="bg-[url('/assets/cta.png')] rounded-full font-semibold">
          <span className="text-black capitalize">Login</span>
        </ShinyButton>
      </Link>
    )}
  </header>
);}

export default Header;