import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main className="w-full duration-500 relative">
      <Navbar />
      {children}

      <Footer />
    </main>
  );
};

export default Layout;
