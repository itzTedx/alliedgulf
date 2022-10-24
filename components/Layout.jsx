import Navbar from "./Navbar";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-20 md:mt-20">{children}</div>
      <Whatsapp />
      <Footer />
    </>
  );
}
