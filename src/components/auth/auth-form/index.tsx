"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import {
  DefaultValues,
  FieldValues,
  UseFormReturn,
  useForm,
} from "react-hook-form";
import { ZodType } from "zod";

interface AuthFormProps<T extends FieldValues> {
  type: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<T>) => {
  const isSignIn = type === "SIGN_IN";
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit = () => {
    // onSubmit(form.getValues());
    console.log("working");
    console.log(form.getValues());
  };
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-white">
        {isSignIn ? "Welcome Back To Scify" : "Create An Account"}
      </h1>
      <p className="text-white">
        {isSignIn
          ? "Access the vast collection of resources, and stay updated."
          : "Please complete all fields."}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          <div className="grid grid-cols-2 gap-x-4">
            <FormField
              control={form.control}
              name="firstName"
              label="First Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="w-full bg-[#3C364B] h-10 border-0 text-white placeholder:text-[#777185] focus:ring-1 focus:ring-[#C5BAE3] focus:border-[#C5BAE3]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              label="Last Name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="max-w-full bg-[#3C364B] h-10 border-0 text-white placeholder:text-[#777185] focus:ring-1 focus:ring-[#C5BAE3] focus:border-[#C5BAE3]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            label="Email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    className="max-w-full bg-[#3C364B] h-10 border-0 text-white placeholder:text-[#777185] focus:ring-1 focus:ring-[#C5BAE3] focus:border-[#C5BAE3]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            label="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Password"
                    {...field}
                    className="max-w-full bg-[#3C364B] h-10 border-0 text-white placeholder:text-[#777185] focus:ring-1 focus:ring-[#C5BAE3] focus:border-[#C5BAE3]"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <p className="text-center text-base font-medium">
        {isSignIn ? "New to Scify? " : "Already have an account? "}
        <Link
          href={isSignIn ? "/sign-up" : "/sign-in"}
          className="font-bold text-[#C5BAE3] underline"
        >
          {isSignIn ? "Create an account" : "Sign In"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
