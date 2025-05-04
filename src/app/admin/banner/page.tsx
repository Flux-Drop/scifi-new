import { getBanners } from "@/actions/banner";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  try {
    const { data } = await getBanners();

    return (
      <section className="w-full rounded-2xl bg-white p-7">
        <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-semibold">All Products</h2>
        <Button className="bg-[#6D54B5] shadow-sm" asChild>
          <Link href={"/admin/banner/new"} className="text-white">
            + Create a New Banner
          </Link>
        </Button>
      </div>

        <div className="mt-7 w-full overflow-hidden">
          {data ? (
            <DataTable columns={columns} data={data} />
          ) : (
            <p>No banners available.</p>
          )}
        </div>
      </section>
    );
  } catch {
    return (
      <section className="w-full rounded-2xl bg-white p-7">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-xl font-semibold">All Banners</h2>
        </div>

        <div className="mt-7 w-full overflow-hidden">
          <p>Error loading banners</p>
        </div>
      </section>
    );
  }
};

export default page;