"use server";

import { auth } from "@/lib/auth";

export const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "divyanshverma18may@gmail.com",
      password: "yashu2001",
    },
  });
};

export const signUp = async () => {
  await auth.api.signUpEmail({
    body: {
      email: "divyanshverma18may@gmail.com",
      password: "yashu2001",
      name: "Divyansh Verma",
    },
  });
};
