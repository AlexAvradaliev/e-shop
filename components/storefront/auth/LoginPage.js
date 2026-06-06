import AuthLayout from "./AuthLayout.js";
import LoginForm from "./LoginForm.js";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in"
      description="Access your basket, saved products and order history."
    >
      <LoginForm />
    </AuthLayout>
  );
}
