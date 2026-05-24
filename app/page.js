import Header from "./Components/Header";
import Card from "./Components/Card/Card";
import PaymentForm from "./Components/PaymentForm/PaymentForm";
import WishlistPage from "./Components/WishlistPage/WishlistPage";
import CartPage from "./Components/CartPage/CartPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";


export default function Home() {
  return (
    <div >
      <Header />
      <Card />
      <PaymentForm />
      <WishlistPage />
      <CartPage />
      <ContactPage />
      <AdminDashboard />
    </div>
  );
}
