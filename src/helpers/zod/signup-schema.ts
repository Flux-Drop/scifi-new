import { z } from "zod";
export const SignupSchema = z.object({
  firstName: z.string().min(2, { message: "First name is too short" }),
  lastName: z.string().min(2, { message: "Last name is too short" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password is too short" }),
});
