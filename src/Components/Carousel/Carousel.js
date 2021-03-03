import { useState } from 'react';
import './styles.css';
import CarouselHeader from './CarouselHeader';
import CarouselBody from './CarouselBody';
import { CarouselContext } from './CarouselContext';

const Carousel = ({ carouselContents }) => {
  const [current, setCurrent] = useState(0);
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <CarouselContext.Provider
      value={{ isCollapse, setIsCollapse, current, setCurrent }}
    >
      <div className="slideshow-container">
        <div className="row">
          <CarouselHeader />
          {!isCollapse ? (
            carouselContents.map((content, index) => {
              return current === index ? (
                <CarouselBody
                  carouselContents={carouselContents}
                  content={content}
                  index={index}
                />
              ) : null;
            })
          ) : (
            <div className="animate-out" />
          )}
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export default Carousel;
