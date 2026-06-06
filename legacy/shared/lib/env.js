import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL:
    z.string().min(1),

  NEXTAUTH_SECRET:
    z.string().min(1),

  NEXTAUTH_URL:
    z.string().url(),

  STRIPE_SECRET_KEY:
    z.string().min(1),

  STRIPE_WEBHOOK_SECRET:
    z.string().min(1),

  CLOUDINARY_CLOUD_NAME:
    z.string().min(1),

  CLOUDINARY_API_KEY:
    z.string().min(1),

  CLOUDINARY_API_SECRET:
    z.string().min(1),
});

export const env =
  envSchema.parse(process.env);