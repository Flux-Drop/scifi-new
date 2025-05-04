import { getProducts } from "@/actions/product";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
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
