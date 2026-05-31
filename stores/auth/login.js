import {
  validateEmail,
  validatePassword,
} from "./validation";

export function login(
  email,
  password,
) {
  if (
    !validateEmail(email) ||
    !validatePassword(password)
  ) {
    return {
      success: false,
      message: "Invalid credentials",
    };
  }

  return {
    success: true,
    message: "Login successful",
    user: {
      email,
    },
  };
}