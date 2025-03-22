import { getUsers } from "@/actions/users";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const { data } = await getUsers();

  return (
    <section className="w-full rounded-2xl bg-white p-7">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-xl font-semibold">All Users</h2>
      </div>

      <div className="mt-7 w-full overflow-hidden">
        <DataTable columns={columns} data={data ? data : []} />
      </div>
    </section>
  );
};

export default page;
