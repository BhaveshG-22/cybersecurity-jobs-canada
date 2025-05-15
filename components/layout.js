import Navbar from "@components/navbar";
import Footer from "@components/footer";

export default function Layout({ navbar = "true", children }) {
  return (
    <>
      {navbar && <Navbar />}
      <div>{children}</div>
      <Footer />
    </>
  );
}
