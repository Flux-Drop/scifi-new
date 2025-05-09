"use client";
import ProductForm from "@/components/admin/forms/product-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <ProductForm />
      </section>
    </>
  );
};

export default page;
