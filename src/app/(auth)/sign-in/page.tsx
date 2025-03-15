"use client";
import { signInWithCredentials } from "@/actions/auth";
import AuthForm from "@/components/auth/auth-form";
import signInSchema from "@/helpers/zod/login-schema";

const Page = () => {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={signInWithCredentials}
    />
  );
};

export default Page;
