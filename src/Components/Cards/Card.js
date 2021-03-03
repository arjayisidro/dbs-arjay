const Card = ({ card, cardType }) => {
  return (
    <div className={`card-root-${cardType}`}>
      <div className="card-title">{card.title}</div>
      <div className="row">
        {card.contents.map((value) => (
          <>
            <div className="act-as-bootstrap-sm-4">{value.header}</div>
          </>
        ))}
      </div>
      <div className="row">
        {card.contents.map((value) => (
          <>
            <div className="act-as-bootstrap-sm-4 card-content">
              {value.value}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

Card.defaultProps = {
  card: {},
  borderColor: '',
};

export default Card;
