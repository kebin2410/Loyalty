import CreditAndDebitCard from "../../components/cards/CreditAndDebitCard";
import { card_data } from "../../components/cards/cardData";
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
    <section className="card-section">
      <div className="overlay pb-120">
        <div className="container wow fadeInUp">
          <div className="row">
            <div className="col-lg-12">
              <div className="tab-content">
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
                  <div className="social-link d-flex flex-wrap justify-content-around align-items-center">
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
                  <ul className="nav nav-pills my-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active bg-transparent"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Reward
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link bg-transparent"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        History
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link bg-transparent border-0 border-bottom rounded-square"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        Rules
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      ...
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
