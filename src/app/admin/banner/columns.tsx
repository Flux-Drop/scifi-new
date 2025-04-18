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
import Image from "next/image";
import { ReactNode } from "react";

export type Banner = {
  title: string;
  description: string;
  image: string;
  order: number;
  bannerStatus: BannerStatus;
};

type BannerStatus = "ACTIVE" | "INACTIVE";

export const columns: ColumnDef<Banner>[] = [
  {
    accessorKey: "sno",
    header: () => <div className="text-left">S.No.</div>,
    cell: ({ row }) => {
      console.log("jhsbcjshb", row);
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{(row.index + 1) as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "image",
    header: () => <div className="text-left">Image</div>,
    cell: ({ row }) => {
      const image = row.original.image;
      return (
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt={"Banner Image"}
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
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{title}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">Description</div>,
    cell: ({ row }) => {
      const description = row.original.description;
      return (
        <div className="flex items-center gap-2">
          <p className="text-base">{description}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "bannerStatus",
    header: () => <div className="text-left">Active Status</div>,
    cell: ({ row }) => {
      const status = row.original.bannerStatus;
      console.log("stststs", status);
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Badge
              className={`rounded-full py-0.5 px-2 font-semibold ${
                status === "INACTIVE"
                  ? "bg-[#FDF2FA] text-[#C11574]"
                  : "bg-[#ECFDF3] text-[#027A48]"
              }`}
            >
              {status}
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Select Status</DropdownMenuLabel>
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
                  console.log(status);
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
