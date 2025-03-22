import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex flex-col items-start justify-between gap-2">
        <h2 className="text-xl font-semibold">All Products</h2>
        <Button className="bg-[#6D54B5] shadow-sm" asChild>
          <Link href={"/admin/products/new"} className="text-white">
            + Create a New Book
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <p>Table</p>
      </div>
    </section>
  );
};

export default page;
