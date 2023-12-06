import CreditAndDebitCard from "../components/cards/CreditAndDebitCard";
import { card_data } from "../components/home/homeData";
export default function Home() {
  return (
    <div className="center-container h-100">
      {card_data.map((singleCard, index) => (
        <CreditAndDebitCard
          key={index}
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
      ))}
    </div>
  );
};
