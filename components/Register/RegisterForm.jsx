import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const RegisterForm = () => {

  const [value, setValue] = useState("");
  return (
    <div className="h-100 flex flex-grow-1">
      <section section className="sign-in-up w-100 place-self-center h-100 w-100 mx-auto place-self-center" >
        <div className="row h-100">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 p-5 d-flex flex-column justify-content-center">
            <div className="">
              <div className="section-header">
                <h2 className="title">Become a member</h2>
              </div>
              <form action="/register" method="post">
                <div className="row">
                  <div className="col-12 pb-1">
                    <div className="single-input">
                      <span htmlFor="phone">Enter Your Phone Number *</span>
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
                  <Link className="cmn-btn" href={"/otp"} style={{ width: "100%" }}>Create an account</Link>
                </div>
                <div className="py-2">
                  <span style={{ color: "var(--head-color)" }}>Already have an account? <Link href={"/login"}>Log in here</Link></span>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
            <div className="p-5">
              <h2 className="py-2 text-white">Start earning.</h2>
              <h5 className="py-3 text-white" style={{ fontWeight: "400" }}>
                Earn points, redeem rewards, and enjoy exclusive deals with our loyalty app. Sign up now for unparalleled benefits!
              </h5>
            </div>
          </div>
        </div>
        <div style={{ height: "200px" }}></div>
      </section>
    </div >
  );
};

export default RegisterForm;
