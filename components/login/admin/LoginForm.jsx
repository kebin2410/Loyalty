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
            <div className="">
              <div className="section-header">
                <h5 className="p-3 my-3 border rounded" style={{ background: "var(--nav-color)" }}>
                  To access the site, you should input your phone number.
                </h5>
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
                  <button className="cmn-btn text-white" style={{ width: "100%" }}>
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
            <div className="p-5">
              <h2 className="py-2 text-white">Admin Portal</h2>
              <h5 className="py-3 text-white">
                Welcome to the Reward Loyalty Program Admin Portal. Log in to manage and enhance your customers&apos; loyalty experience. Together, let&apos;s create lasting connections and drive business success.
              </h5>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
};

export default LoginForm;
