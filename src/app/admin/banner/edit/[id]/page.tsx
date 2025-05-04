import { getBannerById } from "@/actions/banner";
import BannerForm from "@/components/admin/forms/banner-form";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = async ({ params }: { params: { id: string } }) => {
const {data: bannerById} = await getBannerById(params?.id);
  return (
    <>
      <Button
        asChild
        className="mb-10 w-fit border border-light-300 bg-white text-xs font-medium text-black hover:bg-[#6D54B5]/30 !important"
      >
        <Link href={"/admin/banner"}>
          <ArrowLeft />
          Go Back
        </Link>
      </Button>

      <section className="w-full max-w-2xl">
        <BannerForm type="update" banner={bannerById} id={params?.id} />
      </section>
    </>
  );
};

export default page;
