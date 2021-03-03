import { Fragment } from 'react';
import './styles.css';

const BorderlessCard = ({ card, cardType }) => {
  return (
    <div className={`borderless-root-${cardType}`}>
      {card.map((data, index) => (
        <Fragment key={index}>
          <div className="label">{data.header}</div>
          <div className="label-bold">{data.value}</div>
        </Fragment>
      ))}
    </div>
  );
};

BorderlessCard.defaultProps = {
  card: {},
};

export default BorderlessCard;
