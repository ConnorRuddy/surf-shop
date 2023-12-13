import React from 'react'
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';



const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 3000); // Adjust the interval (in milliseconds) here

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, [currentIndex, slides.length]);

  return (
    <div className="slider-container">
      <div className="left-arrow" onClick={goToPrevious} ><FontAwesomeIcon icon={faArrowLeft} className="site-skull"></FontAwesomeIcon></div>
      <div className="right-arrow"  onClick={goToNext}><FontAwesomeIcon icon={faArrowRight} ></FontAwesomeIcon></div>
       <div className="slide-image" style={{backgroundImage: `url(${slides[currentIndex].url})`}}></div>
    </div>
  );
};

export default Carousel;