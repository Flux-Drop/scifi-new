"use client ";
import AuthForm from "@/components/auth/auth-form";
import { SignupSchema } from "@/helpers/zod/signup-schema";
import React from "react";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={SignupSchema}
      defaultValues={{
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      }}
      onSubmit={() => {}}
    />
  );
};

export default Page;
