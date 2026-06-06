import AuthLayout from "./AuthLayout.js";
import RegisterForm from "./RegisterForm.js";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create account"
      description="Create your customer account for faster checkout and order tracking."
    >
      <RegisterForm />
    </AuthLayout>
  );
}
