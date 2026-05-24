import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email("Adresse e-mail invalide."),

  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
    .max(100),
});

export const loginSchema = z.object({
  email: z
    .string()
    .email("Adresse e-mail invalide."),

  password: z
    .string()
    .min(1, "Mot de passe requis."),
});

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email("Adresse e-mail invalide."),
});

export const resetPasswordSchema = z.object({
  token: z.string().min(1),

  newPassword: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères.")
    .max(100),
});