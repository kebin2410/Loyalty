import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Input from "react-phone-number-input/input";

const LoginForm = () => {
  const [value, setValue] = useState("");
  return (
    <section className="sign-in-up" style={{ position: "relative" }}>
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-content p-5">
                    <div className="section-header">
                      <h6 className="p-3 my-3 border rounded">
                        To access the site, you should input your phone number.
                      </h6>
                      <h4 className="title">Sign in to access your account</h4>
                    </div>
                    <form action="/login" method="post">
                      <div className="row">
                        <div className="col-12 pb-5">
                          <div className="single-input">
                            <span htmlFor="phone">Enter Your Phone Number</span>
                          </div>
                          <Input
                            placeholder="Enter your phone number"
                            value={value}
                            onChange={setValue}
                          />
                        </div>
                      </div>
                      <div className="btn-area">
                        <button className="cmn-btn" style={{ width: "100%" }}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center border rounded">
                  <div className="p-5">
                    <h3 className="py-2">Your loyalty, rewarded.</h3>
                    <h5 className="py-5">
                      Welcome to our loyalty app. Sign in or register for free
                      to access your points, redeem rewards, and unlock
                      exclusive offers.
                    </h5>
                    <h5>
                      We&apos;re thrilled to have you join and reward your loyalty!
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
