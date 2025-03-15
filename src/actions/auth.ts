"use server";

import prisma from "@/db";
import { AuthCredentials } from "@/types/types";
import { hash } from "bcryptjs";
import { signIn } from "../../auth";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, message: result.error };
    }
    return { success: true, message: "Sign In successful" };
  } catch (error) {
    console.log(error, "Sign up error");
    return { success: false, message: "Sign In failed" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { firstName, lastName, email, password } = params;
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { success: false, message: "User already exists" };
  }

  const hashedPassword = await hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
      },
    });

    // await signInWithCredentials({ email, password });

    return { success: true, message: "Sign up successful" };
  } catch (error) {
    console.log(error, "Sign up error");
    return { success: false, message: "Sign up failed" };
  }
};
