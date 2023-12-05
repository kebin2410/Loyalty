import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import Switch from "../../config/ThemeChange/Switch";
import LangSwitch from "../../config/LanguageChange/Switch";
import ThemeContext from "../../config/ThemeChange/ThemeContext";

import { FaBars } from "react-icons/fa";

const ShortNavbar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { dark, toggle } = useContext(ThemeContext);
  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section register login ${
        windowHeight > 50 && "header-fixed animated fadeInDown"
      }`}
    >
      <div className="container">
        <div className="row d-flex header-area">
          <nav className="navbar d-flex justify-content-between  navbar-expand-lg navbar-dark">
            <Link className="navbar-brand" href="/">
              {/* <Image
                src={logoLight}
                className="logo"
                alt="logo"
              /> */}
              {!dark ? <i className="text-white"><FaBars/></i>:<i className="text-black"><FaBars/></i>}
            </Link>
            <div className="d-flex align-items-center justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/login">Log In</Link>
                </li>
              </ul>
              <div className="right-area header-action d-flex align-items-center">
                <Link href="/register" className="cmn-btn btn-register">
                  Register
                </Link>
              </div>
              <Switch />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default ShortNavbar;
