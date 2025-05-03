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
import { Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export type Banner = {
  id: string;
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  imageUrl: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Banner>[] = [
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
    accessorKey: "banner_image",
    header: () => <div className="text-left">Image</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
           <img
            src={row.original.imageUrl}
            alt={row.original.title as string}
            className="w-10 h-10 object-cover rounded-lg"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "title",
    header: () => <div className="text-left">Title</div>,
    cell: ({ row }) => {
      const title = row.original.title;
      if (!title) return null;
      return (
        <div className="flex items-center gap-2">
          <p className="text-base text-wrap">{title as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">Description</div>,
    cell: ({ row }) => {
      const description = row.original.description;
      if (!description) return null;
      return (
        <div className="flex items-center gap-2">
          <p className="text-base text-wrap">{description as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "order",
    header: () => <div className="text-left">Order</div>,
    cell: ({ row }) => {
      const order = row.original.order;
      if (order === undefined) return null;
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{order as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-left">Created At</div>,
    cell: ({ row }) => {
      const date = row.original.createdAt;
      if (!date) return null;
      return <p>{new Date(date).toDateString()}</p>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-left">Status</div>,
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      const status = isActive ? "ACTIVE" : "INACTIVE";
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Badge
              className={`rounded-full py-0.5 px-2 font-semibold ${
                isActive
                  ? "bg-[#ECFDF3] text-[#027A48]"
                  : "bg-[#FDF2FA] text-[#C11574]"
              }`}
            >
              {status}
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="ACTIVE" onSelect={() => {}}>
                <Badge
                  className="rounded-full py-0.5 px-2 font-semibold bg-[#ECFDF3] text-[#027A48]"
                >
                  ACTIVE
                </Badge>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="INACTIVE" onSelect={() => {}}>
                <Badge
                  className="rounded-full py-0.5 px-2 font-semibold bg-[#FDF2FA] text-[#C11574]"
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
        <div className="flex items-center gap-4 ">
          <Link href={'/admin/banner/edit'}>
          <Edit size={20} className="text-[#6D54B5] cursor-pointer" />
          </Link>
          <Trash2 size={20} className="text-[#FF1512] cursor-pointer" />
        </div>
      );
    },
  },
];