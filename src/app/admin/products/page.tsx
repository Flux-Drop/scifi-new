import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { columns, Product } from "./columns";
import { DataTable } from "./data-table";
import { getProducts } from "@/actions/product";

const page = async () => {
  // async function getData(): Promise<Product[]> {
  //   return [
  //     {
  //       title: "Product 1",
  //       created_at: Date.now().toString(),
  //       description:
  //         "This is a description is a description is a description is a description is a description is a description is a description",
  //       image:
  //         "https://images.unsplash.com/photo-1733503711063-3427bff34612?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       price: 100,
  //       stock: 20,
  //     },
  //   ];
  // }
  const { data } = await getProducts();
  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-semibold">All Products</h2>
        <Button className="bg-[#6D54B5] shadow-sm" asChild>
          <Link href={"/admin/products/new"} className="text-white">
            + Create a New Product
          </Link>
        </Button>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <DataTable columns={columns} data={data ? data : []} />
      </div>
    </section>
  );
};

export default page;
