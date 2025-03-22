"use client";
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
import { productSchema } from "@/helpers/zod/admin/product-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product } from "@prisma/client";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

interface ProductFormProps extends Partial<Product> {
  type?: "create" | "update";
}

const ProductForm = <T extends FieldValues>({
  type,
  ...product
}: ProductFormProps) => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
      image: "",
      stock: 1,
    },
  });

  const onSubmit = (values: z.infer<typeof productSchema>) => {
    console.log(values);
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
                Product Title
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  required
                  {...field}
                  placeholder="Product Title"
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
                Product Description
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Textarea
                  required
                  {...field}
                  rows={10}
                  placeholder="Product Description"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"price"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Product Price
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  type="number"
                  min={1}
                  required
                  {...field}
                  placeholder="Product Price"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"stock"}
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <FormLabel className="text-base font-normal text-black">
                Product Stock
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                <Input
                  type="number"
                  min={1}
                  max={100}
                  required
                  {...field}
                  placeholder="Product Stock"
                  className="min-h-14 border border-gray-100 bg-white p-4 text-base font-semibold placeholder:font-normal placeholder:text-slate-500 "
                />
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
                Product Image
              </FormLabel>
              <FormControl className="text-base font-normal text-black">
                {/* File upload component */}
                <FileUpload
                  onFileChange={field.onChange}
                  accept="image/*"
                  placeholder="Upload Image"
                  folder="ids"
                  type="image"
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
          Add Product to Store
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
