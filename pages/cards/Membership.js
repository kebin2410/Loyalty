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
                <div
                  className="tab-pane fade show active"
                  id="credit"
                  role="tabpanel"
                  aria-labelledby="credit-tab"
                >
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
                    <div className="mt-4">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link text-white active"
                            id="home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#home"
                            type="button"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Reward
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link text-white"
                            id="profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#profile"
                            type="button"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            History
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link text-white"
                            id="contact-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#contact"
                            type="button"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            Rules
                          </button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div
                          className="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          {/* <div class="mt-5">
                            <div class="row">
                              <div class="col">
                                <div class="border-bottom mb-3">
                                  <h4>Column 1</h4>
                                  <p>Content for column 1 goes here.</p>
                                </div>
                              </div>
                              <div class="col">
                                <div class="border-bottom mb-3">
                                  <h4>Column 2</h4>
                                  <p>Content for column 2 goes here.</p>
                                </div>
                              </div>
                              <div class="col">
                                <div class="border-bottom mb-3">
                                  <h4>Column 3</h4>
                                  <p>Content for column 3 goes here.</p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <h3>Profile Content</h3>
                          <p>This is the content for Profile tab.</p>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="contact"
                          role="tabpanel"
                          aria-labelledby="contact-tab"
                        >
                          <h3>Contact Content</h3>
                          <p>This is the content for Contact tab.</p>
                        </div>
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

export default CreditCard;
