import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const LoginForm = () => {
  const [value, setValue] = useState("");
  return (
    <section className="sign-in-up" style={{ position: "relative" }}>
      <div className="">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 p-5">
                  <div className="form-cont">
                    <div className="section-header">
                      <h6 className="p-2 my-3 border rounded text-center">
                        To access the site, you should input your phone number.
                      </h6>
                      <h4 className="title">Sign in to access your account</h4>
                    </div>
                    <form action="/login" method="post">
                      <div className="row">
                        <div className="col-12 pb-1">
                          <div className="single-input">
                            <span htmlFor="phone">Enter Your Phone Number</span>
                          </div>
                          <PhoneInput
                            name="phone"
                            international
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            id="phone"
                            className="rounded rounded-full bg-gray-100 text-gray-700 shadow-sm border-green"
                          />
                        </div>
                      </div>
                      <div className="btn-area">
                        <button className="cmn-btn text-white" style={{ width: "100%" }}>
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 bg-sign">
                  <div className="p-5">
                    <h2 className="py-2 text-white">Your loyalty, rewarded.</h2>
                    <h6 className="py-3 text-white">
                      Welcome to our loyalty app. Sign in or register for free
                      to access your points, redeem rewards, and unlock
                      exclusive offers.
                    </h6>
                    <h6 className="text-white">
                      We&apos;re thrilled to have you join and reward your loyalty!
                    </h6>
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
