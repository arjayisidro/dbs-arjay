import { useContext } from 'react';
import { CarouselContext } from './CarouselContext';
import Toggle from '../../assets/img/arrow_collapse.3c548550.svg';

const CarouselHeader = () => {
  const { isCollapse, setIsCollapse } = useContext(CarouselContext);

  return (
    <div className="row">
      <div className="act-as-bootstrap-sm-10">
        <label className="title">How it Works</label>
      </div>
      <div className="act-as-bootstrap-sm-2">
        <img
          src={Toggle}
          className={isCollapse ? 'collapsed' : 'collapse'}
          alt="toggle"
          onClick={() => setIsCollapse(!isCollapse)}
        />
      </div>
    </div>
  );
};

export default CarouselHeader;
