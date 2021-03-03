import { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import BorderlessCard from '../Cards/BorderlessCard';
import Card from '../Cards/Card';

const CarouselBody = ({ content, index, carouselContents }) => {
  const { current, setCurrent } = useContext(CarouselContext);

  return (
    <>
      <div className="content-indside fade">
        <div className="row">
          <div className="carousel padding-top-24">
            <div className="row">
              <div className="act-as-bootstrap-sm-2">
                <div className="badge">{content.id}</div>
              </div>
              <div className="act-as-bootstrap-sm-10">
                <div className="content-title">{content.title}</div>
                <div className="content-paragraph">{content.paragraph}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="act-as-bootstrap-sm-12 ">
            <div className="carousel-img padding-top-24">
              {current !== 0 && (
                <a className="prev" onClick={() => setCurrent(current - 1)}>
                  &#10094;
                </a>
              )}
              <img src={content.icon} alt="icon1" />
              {index !== carouselContents.length - 1 && (
                <a className="next" onClick={() => setCurrent(current + 1)}>
                  &#10095;
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-container">
            {content.hasBorderLess
              ? content.cards.map((card) => (
                  <div className="card-root">
                    <div className="card-title">Payout</div>
                    <div className="row">
                      <div className="act-as-bootstrap-sm-6">
                        <BorderlessCard card={card.orange} cardType="orange" />
                      </div>
                      <div className="act-as-bootstrap-sm-6">
                        <BorderlessCard card={card.violet} cardType="violet" />
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
        <ol>
          {carouselContents.map((_, index) => (
            <li
              onClick={() => setCurrent(index)}
              className={`dot ${current === index ? 'active' : ''}`}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default CarouselBody;
