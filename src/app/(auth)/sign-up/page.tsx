"use client";
import { signUp } from "@/actions/auth";
import AuthForm from "@/components/auth/auth-form";
import { SignupSchema } from "@/helpers/zod/signup-schema";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={SignupSchema}
      defaultValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      onSubmit={signUp}
    />
  );
};

export default Page;
