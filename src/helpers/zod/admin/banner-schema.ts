import { z } from "zod";

export const bannerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  ctaText: z.string().min(1, " CTA Text is required"),
  ctaUrl: z.string().min(1, " CTA Url is required"),
  imageUrl: z.string().url().min(1, "Image is required"),
  order:  z.coerce.number().min(1),
  isActive: z.boolean(),
});