"use client";
import ContactSchema from "@/helpers/zod/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      query: "",
    },
  });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex w-full h-full">
      {/* Left Side Form */}
      <div className="flex flex-col flex-1 bg-white p-10">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row items-start justify-between px-4 py-6 bg-white">
          <h1>We{"'"}ll get your business set up in less than 24 hours.</h1>
          <p>
            Sounds impossible, right? Wait until you see how easy it is to run
            your business on Scify
          </p>
        </div>

        {/* Form */}
        <div className="bg-white">
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="text"
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="email"
                        placeholder="youremail@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        type="tel"
                        placeholder="Enter your phone number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <textarea
                        className="w-full p-2 border rounded-md"
                        disabled={loading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={loading} type="submit" className="w-full">
                Send Query
              </Button>
            </form>
          </Form>
        </div>

        <p className="text-sm text-center text-black mt-4">
          Prefer Email? hello@scify.com
        </p>
      </div>

      {/* Right Side Image */}
      <div
        className="flex-1 bg-cover bg-center bg-no-repeat min-h-full p-10 flex flex-col justify-end text-white "
        style={{ backgroundImage: "url('/assets/contact.png')" }}
      >
        <h1 className="text-3xl font-bold">
          Empowering homes with seamless connectivity and unparalleled security.
        </h1>
        <p className="mt-2">Vikram Kumar</p>
        <p>Owner, Scify</p>
      </div>
    </div>
  );
};

export default Contact;
