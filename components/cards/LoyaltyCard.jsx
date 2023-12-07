import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsDatabase } from "react-icons/bs";
const LoyaltyCard = ({
  img1,
  img2,
  link,
  headingText,
  sub_title,
  sub_text,
  balance,
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
      <div className="card-overlay" style={{ backgroundColor: bgColor, }}>
        <div className="d-flex justify-content-between">
          <h5 className="text-white">{headingText}</h5>
          <div className={""}>
            {balance &&
              <>
                <p className="text-white">Balance</p>
                <div className="d-flex align-items-center" style={{ fontWeight: "400" }}>
                  <BsDatabase />{" "}{balance}
                </div>
              </>
            }
          </div>
        </div>
        <div className="d-flex justify-content-between gap-2">
          <div className="d-flex flex-column justify-content-start align-items-start">
            <div className="fs-6 text-white line-clamp">{sub_title}</div>
            <span className="text-white text-start line-clamp" style={{ fontWeight: "400" }}>{sub_text}</span>
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
            <h6 className="line-clamp text-white" style={{ fontWeight: "400" }}>{identifier}</h6>
          </div>
          <div className="d-flex">
            <div className="text-white mx-2 responsive-text">
              <h6 className="line-clamp text-white">Issue Date</h6>
              <h6 className="line-clamp text-white" style={{ fontWeight: "400" }}>{issue_date}</h6>
            </div>
            <div className="text-white">
              <h6 className="line-clamp text-white" >Expiry Date</h6>
              <h6 className="line-clamp text-white" style={{ fontWeight: "400" }}>{expire_date}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyCard;
