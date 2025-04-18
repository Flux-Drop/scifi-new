"use client";
import { createBanner } from "@/actions/banner";
import FileUpload from "@/components/global/file-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { bannerSchema } from "@/helpers/zod/admin/banner-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Banner } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface BannerFormProps extends Partial<Banner> {
  type?: "create" | "update";
}

const BannerForm = ({ type, ...banner }: BannerFormProps) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof bannerSchema>>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      title: "",
      description: "",
      order: 0,
      image: "",
      bannerStatus: "ACTIVE",
    },
  });

  const onSubmit = async (values: z.infer<typeof bannerSchema>) => {
    console.log("FORM VALUES: ", values);
    await createBanner(values)
      .then((res) => {
        if (res.success) {
          toast.success("Banner created successfully");
          router.push("/admin/banner");
        }
      })
      .catch((error: any) => {
        toast.error("An error occurred while creating the Banner");
        console.log(error);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name={"title"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Banner Title
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  required
                  {...field}
                  placeholder="Banner Title"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"description"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Banner Description
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Textarea
                  required
                  {...field}
                  rows={10}
                  placeholder="Banner Description"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"order"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Banner Order
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  type="number"
                  min={1}
                  max={10}
                  required
                  {...field}
                  placeholder="Banner Number"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bannerStatus"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 w-full">
              <FormLabel className="text-base font-normal text-black">
                Banner Status
              </FormLabel>
              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 ">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="INACTIVE">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"image"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Banner Image
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                {/* File upload component */}
                <FileUpload
                  onFileChange={field.onChange}
                  accept="image/*"
                  placeholder="Upload Image"
                  folder="banners"
                  type="image"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-[#6D54B5] text-white cursor-pointer hover:bg-[#6D54B5]/80"
        >
          Add Banner
        </Button>
      </form>
    </Form>
  );
};

export default BannerForm;
