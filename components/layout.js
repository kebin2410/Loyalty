import Footer from "./footer/Footer";
import NavBar from "./common/ShortNavbar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="w-100 mx-auto d-flex flex-column h-100">
        {children}
      </div>
      <Footer />
      <Preloader />
    </>
  );
};

export default Layout;
