import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email" }),
  phone: z.string().min(10, { message: "Invalid phone number" }),
  query: z
    .string()
    .min(1, { message: "Query is required" })
    .max(500, { message: "Query must be at most 500 characters long" }),
    pinCode: z.string().min(6).max(6, "Must be a valid 6-digit PIN code"),
  installationAddress: z.string().min(1, "Address is required"),
});

export default ContactSchema;
