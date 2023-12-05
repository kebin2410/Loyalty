import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const RegisterForm = () => {
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
                      <h4 className="title">Become a member</h4>
                    </div>
                    <form action="/register" method="post">
                      <div className="row">
                        <div className="col-12 pb-5">
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
                        <button className="cmn-btn" style={{ width: "100%" }}>
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center border rounded bg-sign">
                  <div className="p-5">
                    <h3 className="py-2">Start earning.</h3>
                    <h5 className="py-4">
                      Earn points, redeem rewards, and enjoy exclusive deals
                      with our loyalty app.
                    </h5>
                    <h5>Sign up now for unparalleled benefits!</h5>
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

export default RegisterForm;
