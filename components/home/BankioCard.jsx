import CreditCard from "./CreditCard";

const BankioCard = () => {
  return (
    <section className="card-section">
      <div className="overlay pt-120 pb-120">
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
                  {/* Credit Card here */}
                  <CreditCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BankioCard;
