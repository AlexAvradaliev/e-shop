import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(3).max(200),

  slug: z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-z0-9-]+$/),

  sku: z.string().min(2),

  price: z.number().positive(),

  stock: z.number().int().min(0),

  categoryId: z.string().min(1),
});