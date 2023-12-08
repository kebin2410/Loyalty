import React, { useState } from "react";
import Image from "next/image";
import LoyaltyCard from "../../components/cards/LoyaltyCard";
import { card_data } from "../../components/cards/cardData";
import Social from "../../components/social/Social";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { BsDatabase } from "react-icons/bs";

import sm1 from "/public/images/bg/sm01.jpg";
import sm2 from "/public/images/bg/sm02.jpg";
import sm3 from "/public/images/bg/sm03.jpg";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaPinterestP,
  FaWhatsapp,
  FaReddit,
  FaGift,
} from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import Link from "next/link";
const Transaction = () => {
  const singleCard = card_data[0];
  return (
    <section className="card-section">
      <div className="overlay">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
                <div className="center-container">
                  <div className="py-2">
                    <Breadcrumb
                      breadcrumbs={[
                        ["Home", "/"],
                        [singleCard.heading_text, "/"],
                      ]}
                    />
                  </div>
                  <LoyaltyCard
                    id={singleCard.id}
                    img1={singleCard.img1}
                    img2={singleCard.img2}
                    link={singleCard.link}
                    bgColor={singleCard.bg_color}
                    headingText={singleCard.heading_text}
                    sub_title={singleCard.sub_title}
                    sub_text={singleCard.sub_text}
                    balance={singleCard.balance}
                    identifier={singleCard.identifer}
                    issue_date={singleCard.issue_date}
                    expire_date={singleCard.expiry_date}
                  />
                  <Link
                    className="nav-links hover-underline p-3 d-flex"
                    href={"#"}
                  >
                    <div>View card on website</div>
                  </Link>
                  <button
                    className="cmn-btn w-100 mb-2"
                    style={{ maxWidth: "448px" }}
                  >
                    Add transaction
                  </button>
                  <div
                    className="d-flex align-items-center"
                    style={{ color: "var(--head-color)" }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <div
                        className="rounded-pill d-flex justify-content-center align-items-center mb-2"
                        style={{
                          width: "35px",
                          height: "35px",
                          backgroundColor: "#7C2D12",
                        }}
                      >
                        <BsDatabase color="orange" size={"15px"} />
                      </div>
                      <h5 className="px-1">Purchase</h5>
                    </div>
                    <div className="">MYR 123.00</div>
                    <div className="">4 days ago</div>

                    <div>
                      <div className="">+123 points</div>
                      <div className="">Points expire 11 months from now</div>
                      <div className="d-flex align-items-center hover-underline">
                        <GrAttachment />
                        <div className="px-2">Attachment</div>
                      </div>
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

export default Transaction;
