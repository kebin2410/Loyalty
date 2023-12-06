import Image from "next/image";
import Link from "next/link";
import arrow_left from "/public/images/icon/arrow-left.png";

const OtpForm = () => {
  return (
    <section className="sign-in-up verify-number">
      <div className="overlay">
        <div className="">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 p-5">

              <div className="section-header">
                <h2 className="title">Input OTP code</h2>

              </div>
              <form action="#">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6">
                    <div className="single-input">
                      <label style={{ color: "var(--head-color)" }}>Enter OTP Here</label>
                      <div className="mobile-otp d-flex align-items-center">
                        <div className="inputs d-flex flex-row justify-content-center">
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                          <input
                            className="text-center form-control"
                            type="text"
                            placeholder=""
                            maxLength="1"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-area">
                  <div className="d-flex justify-content-between">
                    <Link href="#">Resend Code</Link>
                    <Link href="#">Back</Link>
                  </div>
                  <button className="cmn-btn w-100 text-white">Submit OTP</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 bg-sign d-flex flex-column justify-content-center">
            <div className="p-5">
              <h2 className="py-2 text-white">Verify Your Phone Number</h2>
              <h5 className="py-3 text-white">
                A 6 digit One Time Password (OTP) has been sent to your
                given phone number which will expire in 15 minutes, after
                which you will need to resend the code.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default OtpForm;
