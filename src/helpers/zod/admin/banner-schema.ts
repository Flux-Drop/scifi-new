import { z } from "zod";

export const bannerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Invalid image URL"),
  order: z.coerce.number().min(1).positive(),
  bannerStatus: z.enum(["ACTIVE", "INACTIVE"]),
});
