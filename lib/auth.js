import { getToken } from "next-auth/jwt";

export async function getCurrentUser(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  return token || null;
}

export async function requireUser(req) {
  const user = await getCurrentUser(req);

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}

export async function requireAdmin(req) {
  const user = await getCurrentUser(req);

  if (!user) {
    throw new Error("Unauthorized");
  }

  if (user.role !== "admin") {
    throw new Error("Forbidden");
  }

  return user;
}