import React, { useState } from "react";
import Image from "next/image";
import CreditAndDebitCard from "../../components/cards/CreditAndDebitCard";
import { card_data } from "../../components/cards/cardData";
import Social from "../../components/social/Social";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { BsDatabaseFill } from "react-icons/bs";

import sm1 from "../../public/images/bg/sm01.jpg";
import sm2 from "../../public/images/bg/sm02.jpg";
import sm3 from "../../public/images/bg/sm03.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaPinterestP,
  FaWhatsapp,
  FaReddit,
} from "react-icons/fa";
import Link from "next/link";
const CreditCard = () => {
  const singleCard = card_data[0];
  return (
    <section className="card-section">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container pt-120">
                  <div className="py-2">
                    <Breadcrumb
                      breadcrumbs={[
                        ["Home", "/"],
                        [singleCard.heading_text, "/"],
                      ]}
                    />
                  </div>
                  <CreditAndDebitCard
                    id={singleCard.id}
                    img1={singleCard.img1}
                    img2={singleCard.img2}
                    link={singleCard.link}
                    bgColor={singleCard.bg_color}
                    headingText={singleCard.heading_text}
                    sub_title={singleCard.sub_title}
                    sub_text={singleCard.sub_text}
                    identifier={singleCard.identifer}
                    issue_date={singleCard.issue_date}
                    expire_date={singleCard.expiry_date}
                  />
                  <div
                    className="social-link d-flex flex-wrap justify-content-around align-items-center"
                    style={{ maxWidth: "400px", width: "100%" }}
                  >
                    {/* Socials links here */}
                    <Social
                      items={[
                        [FaFacebookF, "/"],
                        [FaTwitter, "/"],
                        [FaLinkedinIn, "/"],
                        [FaInstagram, "/"],
                        [FaTelegram, "/"],
                        [FaPinterestP, "/"],
                        [FaWhatsapp, "/"],
                        [FaReddit, "/"],
                      ]}
                    />
                  </div>
                  <ul className="nav nav-pills mt-4 d-flex justify-content-around border-bottom mx-5 " style={{ width: "100%", maxWidth: "400px" }}>
                    <li className="nav-item">
                      <a className="nav-link active bg-transparent" style={{ color: "var(--head-color)" }} id="tab1-tab" data-bs-toggle="pill" href="#tab1">Rewards</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link bg-transparent" style={{ color: "var(--head-color)" }} id="tab2-tab" data-bs-toggle="pill" href="#tab2">History</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link bg-transparent" style={{ color: "var(--head-color)" }} id="tab3-tab" data-bs-toggle="pill" href="#tab3">Rules</a>
                    </li>
                  </ul>

                  <div className="tab-content mt-3 p-3" >
                    <div className="tab-pane fade show active" id="tab1">
                      <table className="reward-table">
                        <tbody>
                          <tr>
                            <td>
                              <Image src={sm1} alt="images"
                                className="reward-table-image bg-white rounded" />
                            </td>
                            <td className="td-padding">Free Cooking Class</td>
                            <td>
                              <BsDatabaseFill />
                              3000
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Image src={sm2} alt="images"
                                className="reward-table-image bg-white rounded" />
                            </td>
                            <td>Second Pizza for Free</td>
                            <td className="">
                              <BsDatabaseFill />
                              2000
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Image src={sm3} alt="images"
                                className="reward-table-image bg-white rounded" />
                            </td>
                            <td>Dinner for Two</td>
                            <td className="text-center">
                              <BsDatabaseFill />
                              150
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="tab-pane fade" id="tab2">
                      <div className="d-flex justify-content-center align-items-center">
                        <Link href="/login">
                          <p>Log in</p>
                        </Link>
                        <h6>&nbsp;&nbsp;to see your history.</h6>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="tab3">
                      <h5>Rules and conditions</h5>
                      <ul className="">
                        <li className="py-2">- Points expire after 10 months.</li>
                        <li className="py-2">
                          - You receive 20 points at your first purchase.
                        </li>
                        <li className="py-2">
                          - For each 1 USD spent, you receive 50 points.
                        </li>
                        <li className="py-2">
                          - Each purchase earns a minimum of 50 points and a maximum of 100,000 points.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default CreditCard;
