"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FIELD_PLACEHOLDERS, FIELD_TYPES } from "@/lib/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Path } from "better-auth";
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
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold text-white">
          {isSignIn ? "Welcome Back" : "Create An Account"}
        </h1>
        <p className="text-white">
          {isSignIn
            ? "Access the vast collection of resources, and stay updated."
            : "Please complete all fields."}
        </p>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-6 w-full"
        >
          {Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      placeholder={
                        FIELD_PLACEHOLDERS[
                          field.name as keyof typeof FIELD_PLACEHOLDERS
                        ]
                      }
                      {...field}
                      className="w-full bg-[#3C364B] h-10 border-0 text-white placeholder:text-[#777185] focus:ring-1 focus:ring-[#C5BAE3] focus:border-[#C5BAE3]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}

          <Button
            type="submit"
            className="w-full h-12 bg-[#6D54B5] text-white hover:bg-[#7D65C0]"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </Button>
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
