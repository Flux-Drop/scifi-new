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
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { bannerSchema } from "@/helpers/zod/admin/banner-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Banner } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BannerFormProps {
  type?: "create" | "update";
  banner?: Partial<Banner>;
}

const BannerForm = ({ type = "create", banner }: BannerFormProps) => {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const form = useForm<z.infer<typeof bannerSchema>>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      title: banner?.title || "",
      description: banner?.description || "",
      ctaText: banner?.ctaText || "",
      ctaUrl: banner?.ctaUrl || "",
      imageUrl: banner?.imageUrl || "",
      order: banner?.order || 1,
      isActive: banner?.isActive ?? true,
    },
  });

  const onSubmit = async (values: z.infer<typeof bannerSchema>) => {
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
          name="title"
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
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
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
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ctaText"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                CTA Text
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  required
                  {...field}
                  placeholder="Call to Action Text"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ctaUrl"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                CTA URL
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  required
                  {...field}
                  placeholder="Call to Action URL"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Banner Image
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
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
        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Order
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  type="number"
                  min={1}
                  required
                  {...field}
                  placeholder="Order"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2">
              <FormLabel className="text-base font-normal text-black">
                Active
              </FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
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