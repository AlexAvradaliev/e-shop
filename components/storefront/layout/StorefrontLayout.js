import Header from "./Header.js";
import Footer from "./Footer.js";

export default function StorefrontLayout({
  children,
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
