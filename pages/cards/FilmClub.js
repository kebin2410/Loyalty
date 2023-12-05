import React, { useState } from "react";
import CreditAndDebitCard from "../../components/cards/CreditAndDebitCard";
import { card_data } from "../../components/cards/cardData";
import Social from "../../components/social/Social";
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
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
import { sign } from "crypto";
const CreditCard = () => {
  const singleCard = card_data[1];
  return (
    <section className="card-section">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container pt-120">
                  <Breadcrumb
                    breadcrumbs={
                      [
                        ["Home", "/"],
                        [singleCard.heading_text, "/"],
                      ]} 
                    />
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
                  <div className="social-link d-flex flex-wrap justify-content-around align-items-center" style={{maxWidth:"500px", width:"100%"}}>
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
                  <div
                    className="d-flex justify-content-around my-3 border-bottom three-panel"
                    id="pills-tab"
                    role="tablist"
                    style={{maxWidth:"500px", width:"100%"}}
                  >
                    <div
                      className=""
                      role="presentation"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="nav-items active"
                        id="reward-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-reward"
                        role="tab"
                        aria-controls="pills-reward"
                        aria-selected="true"
                      >
                        Reward
                      </div>
                    </div>
                    <div
                      className=""
                      role="presentation"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="nav-items"
                        id="history-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-history"
                        role="tab"
                        aria-controls="pills-history"
                        aria-selected="false"
                      >
                        History
                      </div>
                    </div>
                    <div
                      className=""
                      role="presentation"
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        className="nav-items"
                        id="rules-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-rules"
                        role="tab"
                        aria-controls="pills-rules"
                        aria-selected="false"
                      >
                        Rules
                      </div>
                    </div>
                  </div>
                  <div className="tab-content text-center" id="pills-tabContent" style={{maxWidth:"600px", width:"100%"}} >
                    <div
                      className="tab-pane fade show active"
                      id="pills-reward"
                      role="tabpanel"
                      aria-labelledby="reward-tab"
                    >
                      <div className="container">
                        <table className="custom-table">
                          <tbody>
                            <tr>
                              <td>Data 1</td>
                              <td>Data 2</td>
                              <td>Data 3</td>
                            </tr>
                            <tr>
                              <td>Data 1</td>
                              <td>Data 2</td>
                              <td>Data 3</td>
                            </tr>
                            <tr>
                              <td>Data 1</td>
                              <td>Data 2</td>
                              <td>Data 3</td>
                            </tr>
                            <tr>
                              <td>Data 1</td>
                              <td>Data 2</td>
                              <td>Data 3</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-history"
                      role="tabpanel"
                      aria-labelledby="history-tab"
                    >
                      ...b
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-rules"
                      role="tabpanel"
                      aria-labelledby="rules-tab"
                    >
                      ...c
                    </div>
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

export default CreditCard;
