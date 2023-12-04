import Footer from "./footer/Footer";
import NavBar from "./common/ShortNavbar";
import Preloader from "./preloader/Preloader";
import ScrollToTop from "./scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column">
      <NavBar />
      {children}
      <Footer />
      <Preloader />
    </div>
  );
};

export default Layout;
