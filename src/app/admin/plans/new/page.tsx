"use client";
import PlanForm from "@/components/admin/forms/plan-form";
import ProductForm from "@/components/admin/forms/product-form";
import { Button } from "@/components/ui/button";
import { productSchema } from "@/helpers/zod/admin/product-schema";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Button
        asChild
        className="mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-black hover:bg-[#6D54B5]/30 !important"
      >
        <Link href={"/admin/products"}>
          <ArrowLeft />
          Go Back
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <PlanForm
          onSubmit={() => {
            console.log("submitted");
          }}
          schema={productSchema}
        />
      </section>
    </>
  );
};

export default page;
