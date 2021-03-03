import './styles.css';

const BorderlessCard = ({ card, cardType }) => {
  return (
    <div className={`borderless-root-${cardType}`}>
      {card.map((orangeVal) => (
        <>
          <div className="label">{orangeVal.header}</div>
          <div className="label-bold">{orangeVal.value}</div>
        </>
      ))}
    </div>
  );
};

BorderlessCard.defaultProps = {
  card: {},
};

export default BorderlessCard;
