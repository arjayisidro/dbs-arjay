import './homepage.css';
import BorderlessCard from '../Cards/BorderlessCard';
import Card from '../Cards/Card';

const Homepage = ({ homepageContents }) => {
  return (
    <div className="homepage-root">
      <div className="homepage-container">
        <label className="title">How it Works</label>
        {homepageContents.map((content) => {
          return (
            <div className="content-root">
              <div className="row">
                <div className="act-as-bootstrap-md-2">
                  <div className="badge">{content.id}</div>
                </div>
                <div className="act-as-bootstrap-md-2">
                  <img src={content.icon} alt="icon1" />
                </div>
                <div className="act-as-bootstrap-md-8">
                  <div className="content-title">{content.title}</div>
                  <div className="content-paragraph">{content.paragraph}</div>
                  <div className="row">
                    <div className="card-container">
                      {content.hasBorderLess
                        ? content.cards.map((card) => (
                            <div className="card-root">
                              <div className="card-title">Payout</div>
                              <div className="row">
                                <div className="act-as-bootstrap-md-6">
                                  <BorderlessCard
                                    card={card.orange}
                                    cardType="orange"
                                  />
                                </div>
                                <div className="act-as-bootstrap-md-6">
                                  <BorderlessCard
                                    card={card.violet}
                                    cardType="violet"
                                  />
                                </div>
                              </div>
                            </div>
                          ))
                        : content.cards.map((card) => {
                            return (
                              <>
                                <Card card={card.orange} cardType="orange" />
                                <Card card={card.violet} cardType="violet" />
                              </>
                            );
                          })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="footer-label">
          Figures used are for illustrative purpose only and are rounded to the
          nearest dollar. Please refer to the policy illustration for more
          details.
        </div>
      </div>
    </div>
  );
};

Homepage.defaultProps = {
  homepageContents: [],
};

export default Homepage;
