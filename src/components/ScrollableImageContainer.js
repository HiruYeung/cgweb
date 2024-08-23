import React, { useRef, useState, useEffect } from 'react';
import './ScrollableImageContainer.css';
import IMG_5628 from './images/IMG_5628.PNG';
import IMG_080 from './images/080222.png';
import kkk from './images/52kkk.png';
import Arrow from './images/arrow.png';
import Arrow0 from './images/arrow0.png';

const ScrollableImageContainer = () => {
  const imageContainerRef = useRef(null);
  const scrollBarRef = useRef(null);
  const thumbRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [IMG_5628, IMG_080, kkk];

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - scrollBarRef.current.offsetLeft);
    setScrollLeft(imageContainerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - scrollBarRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed
    imageContainerRef.current.scrollLeft = scrollLeft - walk;
    updateThumbPosition();
  };

  const updateThumbPosition = () => {
    const thumb = thumbRef.current;
    const container = imageContainerRef.current;
    const scrollBar = scrollBarRef.current;
    const scrollRatio = container.scrollWidth / container.clientWidth;
    const thumbWidth = scrollBar.clientWidth / scrollRatio;
    const scrollLeft = container.scrollLeft / scrollRatio;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.transform = `translateX(${scrollLeft}px)`;
  };

  useEffect(() => {
    const scrollBar = scrollBarRef.current;
    scrollBar.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      scrollBar.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMouseDown, startX, scrollLeft]);

  useEffect(() => {
    updateThumbPosition();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 90000); // Change image every 90 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="container">
      <div className="image-navigation">
        <div onClick={handlePrevImage}>
          <img src={Arrow0} width={60} alt="Previous" />
        </div>
        <div className="scroll-bar" ref={scrollBarRef} onMouseDown={handleMouseDown}>
          <div className="scroll-thumb" ref={thumbRef}>
            <div className="scroll-thumb1"></div>
          </div>
        </div>
        <div className="image-container" ref={imageContainerRef}>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="scrollable-image" />
      </div>
        <div onClick={handleNextImage}>
          <img src={Arrow} width={60} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default ScrollableImageContainer;

//&lt; //&gt;

