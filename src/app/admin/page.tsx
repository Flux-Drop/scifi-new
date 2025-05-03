import { getBanners } from "@/actions/banner";
import { getProducts } from "@/actions/product";
import { getUsers } from "@/actions/users";
import ActiveBannersCard from "@/components/admin/cards/active-banners-card";
import AllUsersCard from "@/components/admin/cards/all-users-card";
import CountCard from "@/components/admin/cards/count-card";
import React from "react";

const page = async () => {
  const [usersResult, productsResult, bannersResult] = await Promise.all([
    getUsers(),
    getProducts(),
    getBanners(),
  ]);

  const metrics = [
    {
      title: "Users",
      count: usersResult?.data?.length ?? 0,
    },
    {
      title: "Products",
      count: productsResult?.data?.length ?? 0,
    },
    {
      title: "Banners",
      count: bannersResult?.data?.length ?? 0,
    },
  ];

  return (
    <div className="flex flex-col  gap-4">
    <div className="flex items-center gap-4">
      {metrics.map(({ title, count }) => (
        <CountCard key={title} title={title} count={count} />
      ))}
    </div>
    <div  className="w-full flex gap-4">
      <ActiveBannersCard />
      <AllUsersCard />
    </div>
  </div>
  );
};

export default page;