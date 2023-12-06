import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoyaltyCard = ({
  img1,
  img2,
  link,
  headingText,
  sub_title,
  sub_text,
  identifier,
  issue_date,
  expire_date,
  bgColor,
}) => {
  return (
    <div
      className="card-container"
      onClick={() => {
        document.location.href = link;
      }}
    >
      <Image src={img1} alt="images" className="card-img" />
      <div className="card-overlay" style={{ backgroundColor: bgColor }}>
        <div className="d-flex justify-content-between">
          <h5 className="text-white">{headingText}</h5>
          <div className={"d-none"}>
            <p className="text-white">Balance</p>
            <Link
              href="/login"
              className="text-white text-decoration-underline"
            >
              Log in
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <h6 className="text-white line-clamp">{sub_title}</h6>
            <span className="text-white text-start line-clamp">{sub_text}</span>
          </div>
          <Image
            src={img2}
            alt="images"
            className="svg-class bg-white rounded"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <h6 className="line-clamp text-white">Membership ID</h6>
            <h6 className="line-clamp text-white">{identifier}</h6>
          </div>
          <div className="d-flex">
            <div className="text-white mx-2 responsive-text">
              <h6 className="line-clamp text-white">Issue date</h6>
              <h6 className="line-clamp text-white">{issue_date}</h6>
            </div>
            <div className="text-white">
              <h6 className="line-clamp text-white">Expiry date</h6>
              <h6 className="line-clamp text-white">{expire_date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
