import Footer from "./footer/Footer";
import NavBar from "./common/ShortNavbar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <Preloader />
    </>
  );
};

export default Layout;
