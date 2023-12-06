import Footer from "./footer/Footer";
import NavBar from "./navBar/ShortNavbar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="w-100 d-flex flex-column">
        {children}
      </div>
      <Footer />
      <Preloader />
    </>
  );
};

export default Layout;
