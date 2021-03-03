const Card = ({ card, cardType }) => {
  return (
    <div className={`card-root-${cardType}`}>
      <div className="card-title">{card.title}</div>
      <div className="row" key="header">
        {card.contents.map((value, key) => (
          <div className="act-as-bootstrap-sm-4" key={key}>
            {value.header}
          </div>
        ))}
      </div>
      <div className="row" key="content">
        {card.contents.map((value, index) => (
          <div key={index} className="act-as-bootstrap-sm-4 card-content">
            {value.value}
          </div>
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
