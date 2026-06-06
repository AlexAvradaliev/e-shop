import { ZodError } from "zod";

export function handleServerError(error) {

  console.error(error);

  // ZOD
  if (error instanceof ZodError) {

    return (
      error.errors?.[0]?.message ||
      "Données invalides."
    );
  }

  // Prisma
  if (
    error?.code === "P2002"
  ) {
    return "Cette donnée existe déjà.";
  }

  // Generic
  return (
    error?.message ||
    "Une erreur est survenue."
  );
}