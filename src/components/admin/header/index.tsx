import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Session } from "next-auth";
import React from "react";

const Header = ({ session }: { session: Session }) => {
  return (
    <header className="flex lg:items-center items-start justify-between lg:flex-row flex-col gap-5 sm:mb-10 mb-5">
      <div className="w-full">
        <h2 className="text-gray-900 text-2xl font-semibold">
          {session.user?.name}
        </h2>
        <p className="text-base text-slate-500">
          Monitor all of your users, plans and products here.
        </p>
      </div>
      {/* WIP: ADD search */}
      {/* <div className="hidden lg:flex gap-2 items-center w-full lg:w-1/2 bg-white border border-[#6D54B5]/20 rounded-lg p-2">
        <Search />
        <Input
          placeholder="Search for any User, Product or Plans"
          className="bg-transparent border-none shadow-none"
        />
      </div> */}
    </header>
  );
};

export default Header;
