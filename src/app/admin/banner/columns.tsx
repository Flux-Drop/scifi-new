"use client";

import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import { ReactNode } from "react";

export type Plans = {
  firstName: string;
  lastName: string | null;
  email: string;
  role: Role;
  createdAt: Date;
};

type Role = "ADMIN" | "USER";

export const columns: ColumnDef<Plans>[] = [
  {
    accessorKey: "sno",
    header: () => <div className="text-left">S.No.</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{(row.index + 1) as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => {
      const fullName = row.original.firstName + " " + row.original.lastName;
      const email = row.original.email;
      if (!fullName) return null;
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{fullName as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-left">Date Joined</div>,
    cell: ({ row }) => {
      const date = row.original.createdAt;
      if (!date) return null;
      return <p>{new Date(date).toDateString()}</p>;
    },
  },
  {
    accessorKey: "Status",
    header: () => <div className="text-left">Role</div>,
    cell: ({ row }) => {
      const role = row.original.role;
      if (!role) return null;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Badge
              className={`rounded-full py-0.5 px-2 font-semibold ${
                role === "USER"
                  ? "bg-[#FDF2FA] text-[#C11574]"
                  : "bg-[#ECFDF3] text-[#027A48]"
              }`}
            >
              {role}
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value={"ACTIVE"} onSelect={() => {}}>
                <Badge
                  className={`rounded-full py-0.5 px-2 font-semibold bg-[#FDF2FA] text-[#C11574]`}
                >
                  ACTIVE
                </Badge>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value={"INACTIVE"}
                onSelect={() => {
                  console.log(role);
                }}
              >
                {" "}
                <Badge
                  className={`rounded-full py-0.5 px-2 font-semibold bg-[#ECFDF3] text-[#027A48]`}
                >
                  INACTIVE
                </Badge>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },

  {
    accessorKey: "actions",
    header: () => <div className="text-left">Action</div>,
    cell: ({ row }) => {
      return (
        <Trash2
          size={20}
          className="text-[#FF1512] cursor-pointer text-center"
        />
      );
    },
  },
];
