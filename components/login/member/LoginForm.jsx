import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const LoginForm = () => {
  const [value, setValue] = useState("");
  return (
    <div className="h-100 flex flex-grow-1">
      <section section className="sign-in-up w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
        <div className="row h-100">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
            <div className="m-auto" style={{maxWidth:"600px"}}>
            
              <div className="section-header">
                <h4 className="title">Sign in to access your account</h4>
              </div>
              <form action="/login" method="post">
                <div className="row">
                  <div className="col-12 pb-1">
                    <div className="single-input">
                      <span htmlFor="phone">Enter Your Phone Number *</span>
                    </div>
                    <PhoneInput
                      name="phone"
                      value={value}
                      onChange={setValue}
                      id="phone"
                      className="rounded rounded-full bg-gray-100 text-gray-700 shadow-sm border-green"
                    />
                  </div>
                </div>
                <div className="btn-area">
                  <button className="cmn-btn" style={{ width: "100%" }}>
                    Login
                  </button>
                </div>
                <div className="py-2">
                  <span style={{ color: "var(--head-color)" }}>Don&apos;t have an account yet? <Link href={"/register"}>Create a free account</Link></span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
            <div className="m-auto p-5" style={{maxWidth:"600px"}}>
              <h2 className="py-2 text-white">Your loyalty, rewarded.</h2>
              <h5 className="py-3 text-white" style={{ fontWeight: "400" }}>
                Welcome to our loyalty app. Sign in or register for free
                to access your points, redeem rewards, and unlock
                exclusive offers.
              </h5>
              <h5 className="text-white" style={{ fontWeight: "400" }}>
                We&apos;re thrilled to have you join and reward your loyalty!
              </h5>
            </div>
          </div>
        </div>
        <div className="empty-height"></div>
      </section>
    </div >
  );
};

export default LoginForm;
