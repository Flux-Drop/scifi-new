"use client";

import { updateUserRole } from "@/actions/users";
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
import { useUser } from "@/contexts/UserDataContext";
import { ColumnDef } from "@tanstack/react-table";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import { toast } from "sonner";

export type User = {
  firstName: string;
  lastName: string | null;
  email: string;
  role: Role;
  createdAt: Date;
};

type Role = "ADMIN" | "USER";

const handleRoleChange = async (newRole: Role, role: Role, email: string) => {
  if (newRole === role) return;
  const updatedRole = await updateUserRole(email, newRole);
  if (!updatedRole) return;
  toast.success("Role updated successfully");
  return updatedRole;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => {
      const fullName = row.original.firstName + " " + row.original.lastName;
      const email = row.original.email;
      if (!fullName) return null;
      return (
        <div className="flex items-center gap-2">
          <img
            src={"/assets/profiles/1.png"}
            alt={fullName as string}
            className="object-cover rounded-full h-10 w-10"
          />
          <div className="flex flex-col items-start">
            <p className="font-semibold text-base">{fullName as ReactNode}</p>
            <p className="font-light text-gray-500">{email as ReactNode}</p>
          </div>
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
    accessorKey: "role",
    header: () => <div className="text-left">Role</div>,
    cell: ({ row }) => {
      const role = row.original.role;
      const email = row.original.email;
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
              <DropdownMenuRadioItem
                value={"USER"}
                onClick={() => {
                  handleRoleChange("USER", role, email);
                }}
              >
                <Badge
                  className={`rounded-full py-0.5 px-2 font-semibold bg-[#FDF2FA] text-[#C11574]`}
                >
                  User
                </Badge>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value={"ADMIN"}
                onClick={() => {
                  handleRoleChange("ADMIN", role, email);
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
