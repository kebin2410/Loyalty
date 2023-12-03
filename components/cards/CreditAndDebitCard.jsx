import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CreditAndDebitCard = ({
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
          <h4 className="text-white">{headingText}</h4>
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
          <div className="d-flex flex-column justify-content-start align-items-start p-3">
            <h6 className="text-white py-2">{sub_title}</h6>
            <span className="text-white text-start">{sub_text}</span>
          </div>
          <Image
            src={img2}
            alt="images"
            className="svg-className bg-white rounded"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <div>Identifier</div>
            <div>{identifier}</div>
          </div>
          <div className="d-flex">
            <div className="text-white mx-4">
              <div>Issue date</div>
              <div>{issue_date}</div>
            </div>
            <div className="text-white">
              <div>Expiry date</div>
              <div>{expire_date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditAndDebitCard;
