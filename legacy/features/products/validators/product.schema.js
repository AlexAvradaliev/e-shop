import { z } from 'zod';

export const productSchema = z.object({
  title: z
    .string()
    .min(3)
    .max(120),

  description: z
    .string()
    .min(10),

  price: z
    .number()
    .positive(),

  images: z.array(
    z.string().url()
  ),

  stock: z
    .number()
    .int()
    .min(0),
});