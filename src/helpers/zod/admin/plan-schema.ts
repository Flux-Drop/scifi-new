import { z } from "zod";

export const planSchema = z.object({
  name: z.string().min(1, "Plan name is required"),
  speed: z.string().min(1, "Speed is required"),
  dataLimit: z.string().min(1, "Data limit is required"),
  category: z.enum(["ENTERTAINMENT", "SPEED"], {
    errorMap: () => ({ message: "Category must be ENTERTAINMENT or SPEED" }),
  }),
  ottSubscriptions: z.array(z.string()).optional(), // JSON array of strings, optional
  offers: z.array(z.string()).min(1, "At least one offer is required"), // JSON array of strings
  pricings: z.array(
    z.object({
      duration: z.number().int().min(1, "Duration must be a positive integer"),
      priceWithoutTax: z.number().min(0, "Price without tax must be non-negative"),
      priceWithTax: z.number().min(0, "Price with tax must be non-negative"),
    })
  ).min(1, "At least one pricing option is required"),
});