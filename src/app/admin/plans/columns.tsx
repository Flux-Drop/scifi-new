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
    accessorKey: "created_at",
    header: () => <div className="text-left">Date Joined</div>,
    cell: ({ row }) => {
      const date = row.original.createdAt;
      if (!date) return null;
      return <p>{new Date(date).toDateString()}</p>;
    },
  },
  {
    accessorKey: "role",
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
              <DropdownMenuRadioItem value={"ADMIN"} onSelect={() => {}}>
                <Badge
                  className={`rounded-full py-0.5 px-2 font-semibold bg-[#FDF2FA] text-[#C11574]`}
                >
                  User
                </Badge>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value={"USER"}
                onSelect={() => {
                  console.log(role);
                }}
              >
                {" "}
                <Badge
                  className={`rounded-full py-0.5 px-2 font-semibold bg-[#ECFDF3] text-[#027A48]`}
                >
                  Admin
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
    cell: () => {
      return (
        <Trash2
          size={20}
          className="text-[#FF1512] cursor-pointer text-center"
        />
      );
    },
  },
];
