import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './Components/Homepage';
import Carousel from './Components/Carousel';
import { homepageContents } from './constants';

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

function App() {
  const [size, setSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };

    window.addEventListener('resize', handleResize);
  }, []);

  const isMobile = size.width <= 768;

  return (
    <div className="container">
      {isMobile ? (
        <Carousel carouselContents={homepageContents} />
      ) : (
        <Homepage homepageContents={homepageContents} />
      )}
    </div>
  );
}

export default App;
