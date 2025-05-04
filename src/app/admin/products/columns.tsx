"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export type Product = {
  title: string;
  description: string;
  createdAt: Date;
  stock: number;
  price: number;
  image: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-left">Product Title</div>,
    cell: ({ row }) => {
      const title = row.original.title;
      if (!title) return null;
      return (
        <div className="flex items-center gap-2">
          <Image
            src={row.original.image}
            alt={row.original.title as string}
            width={40}
            height={40}
            className="object-cover rounded-lg"
            style={{ width: "40px", height: "40px" }} // Optional: enforce layout
          />
          <p className="font-medium">{title as ReactNode}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "descriptiopn",
    header: () => <div className="text-left">Product Description</div>,
    cell: ({ row }) => {
      const description = row.original.description;
      if (!description) return null;
      if (description.length > 100) {
        return <p>{description.slice(0, 30)}...</p>;
      }
      return <p>{description}</p>;
    },
  },
  {
    accessorKey: "created_at",
    header: () => <div className="text-left">Created At</div>,
    cell: ({ row }) => {
      const date = row.original.createdAt;
      if (!date) return null;
      return <p>{new Date(date).toDateString()}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-left">Stock</div>,
    cell: ({ row }) => {
      return <p>{row.original.stock}</p>;
    },
  },

  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-left">Actions</div>,
    cell: () => {
      return (
        <div className="flex items-center gap-4 ">
          <Edit size={20} className="text-[#6D54B5] cursor-pointer" />
          <Trash2 size={20} className="text-[#FF1512] cursor-pointer" />
        </div>
      );
    },
  },
];
