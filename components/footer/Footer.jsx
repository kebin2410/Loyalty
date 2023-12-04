import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import ThemeContext from "../../config/ThemeChange/ThemeContext";
import LogoLight from "/public/images/logo-light.svg";
import LogoDark from "/public/images/logo-dark.svg";

const Footer = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row cus-mar py-5 justify-content-between wow fadeInUp">
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center">
              <h5>COMPANY</h5>
              <div className="row">
                <Link href="/home" className="nav-link p-2">
                  <h6>Home</h6>
                </Link>
                <Link href="/about" className="nav-link">
                  <h6>About</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center">
              <h5>SUPPORT</h5>
              <div className="row">
                <Link href="/FAQ" className="nav-link p-2">
                  <h6>FAQ</h6>
                </Link>
                <Link href="/contact" className="nav-link">
                  <h6>Contact</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-6">
            <div className="footer-box text-center">
              <h5>LEGAL</h5>
              <div className="row">
                <Link href="/terms-of-use" className="nav-link p-2">
                  <h6>Terms of Use</h6>
                </Link>
                <Link href="/privacy-policy" className="nav-link">
                  <h6>Privacy Policy</h6>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom mx-auto">
          <div className="col d-flex flex-column align-items-center justify-content-center">
            <Link href="/" className="logo my-3">
              <Image src={!dark ? LogoLight : LogoDark} alt="logo" />
            </Link>
            <h6>Powered by Zest Loyalty</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
