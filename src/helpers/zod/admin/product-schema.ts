import { z } from "zod";

export const productSchema = z.object({
  title: z.string().trim().min(2).max(100),
  description: z.string().trim().min(10).max(500),
  price: z.number().min(1),
  image: z.string().url(),
  stock: z.number().min(0),
});
