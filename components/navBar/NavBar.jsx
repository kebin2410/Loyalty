import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useContext } from "react";
import { navData } from "./navData";
import LogoLight from "/public/images/logo-light.svg";
import LogoDark from "/public/images/logo-dark.svg";

import Switch from "../../config/ThemeChange/Switch";
import ThemeContext from "../../config/ThemeChange/ThemeContext";

import LangSwitch from "../../config/LanguageChange/Switch";
import LanguageContext from "../../config/LanguageChange/LanguageContext";
import { fetchMock } from "../../config/LanguageChange/mockAPI";
const NavBar = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const { dark, toggle } = useContext(ThemeContext);
  const [state, setState] = useState([]);
  const { lang, currentLanguageData } = useContext(LanguageContext);

  // const { card } = useContext(LanguageContext).currentLanguageData;
  const menus = useRef();
  const hidenMenu = () => {
    menus.current.classList.remove("show");
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    fetchMock(lang).then(setState);
  }, [lang]);

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header
      className={`header-section ${windowHeight > 50 && "header-fixed animated fadeInDown"
        }`}
    >
      <div className="overlay border-bottom">
        <div className="container">
          <div className="row d-flex header-area">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" href="/" onClick={hidenMenu}>
                <Image
                  src={!dark ? LogoLight : LogoDark}
                  className="logo"
                  alt="logo"
                />
              </Link>
              <div className="collapsed navbar-toggler">
                <div className="d-flex">
                  <ul className="navbar-nav">
                    {navData.map(
                      ({ itm, url, id, dropdown, dropdown_itms }) => {
                        return (
                          <li key={id} className="nav-item text-danger">
                            <Link
                              className="nav-link"
                              aria-current="page"
                              href={url}
                              onClick={hidenMenu}
                            >
                              {itm}
                            </Link>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbar-content"
                ref={menus}
              >
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                    return !dropdown ? (
                      <li key={id} className="nav-item">
                        <Link
                          className="nav-link"
                          aria-current="page"
                          href={url}
                          onClick={hidenMenu}
                        >
                          {itm}
                        </Link>
                      </li>
                    ) : (
                      <li key={id} className="nav-item dropdown main-navbar">
                        <Link
                          className="nav-link dropdown-toggle"
                          href="/"
                          data-bs-toggle="dropdown"
                          data-bs-auto-close="outside"
                        >
                          {itm}
                        </Link>
                        <ul className="dropdown-menu main-menu shadow">
                          {dropdown_itms?.map(
                            ({ id, dp_itm, url, sbu_dropdown, sub_items }) =>
                              !sbu_dropdown ? (
                                <li key={id}>
                                  <Link
                                    className="nav-link"
                                    href={url}
                                    onClick={hidenMenu}
                                  >
                                    {dp_itm}
                                  </Link>
                                </li>
                              ) : (
                                <li key={id} className="dropend sub-navbar">
                                  <Link
                                    href="/"
                                    className="dropdown-item dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                  >
                                    {dp_itm}
                                  </Link>
                                  <ul className="dropdown-menu sub-menu shadow">
                                    {sub_items?.map(({ id, url, sub_itm }) => (
                                      <li key={id}>
                                        <Link
                                          className="nav-link"
                                          href={url}
                                          onClick={hidenMenu}
                                        >
                                          {sub_itm}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              )
                          )}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
                <div className="btn_register right-area header-action d-flex align-items-center d-flex">
                  <Link
                    href="/register"
                    className="cmn-btn"
                    onClick={hidenMenu}
                  >
                    Register
                  </Link>
                  <LangSwitch />
                  <Switch />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
