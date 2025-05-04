import { getBannerById } from "@/actions/banner";
import BannerForm from "@/components/admin/forms/banner-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

// Define the type for params
interface Params {
  id: string;
}

// Use Next.js's built-in type for dynamic route props
interface PageProps {
  params: Promise<Params>;
}

const page = async ({ params }: PageProps) => {
  // Resolve the params Promise to get the id
  const { id } = await params;
  const { data: bannerById } = await getBannerById(id);

  return (
    <>
      <Button
        asChild
        className="mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-black hover:bg-[#6D54B5]/30 !important"
      >
        <Link href="/admin/banner">
          <ArrowLeft />
          Go Back
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BannerForm type="update" banner={bannerById} id={id} />
      </section>
    </>
  );
};

export default page;