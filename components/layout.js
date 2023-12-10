import Footer from "./footer/Footer";
import Bar from "../components/navBar/Navbar";
import Preloader from "./preloader/Preloader";
import { MemberMenuInfo } from "../components/navBar/userMenu/userMenuData";
const Layout = ({ children }) => {
  return (
    <>
      <Bar userMenu={MemberMenuInfo}/>
      <div className="w-100 d-flex flex-column">{children}</div>
      <Footer />
      <Preloader />
    </>
  );
};

export default Layout;
