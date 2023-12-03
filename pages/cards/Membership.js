import CreditAndDebitCard from "../../components/cards/CreditAndDebitCard";
import { card_data } from "../../components/home/homeData";
import Social from "../../components/social/Social";
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
const CreditCard = () => {
  const singleCard = card_data[0];
  return (
    <div className="center-container pt-120">
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
      <div className="social-link d-flex justify-content-around align-items-center">
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
      <ul className="d-flex justify-content-between border-bottom">
        <li className="mx-5">Rewards</li>
        <li className="mx-5">History</li>
        <li className="mx-5">Rules</li>
      </ul>
    </div>
  );
};

export default CreditCard;
