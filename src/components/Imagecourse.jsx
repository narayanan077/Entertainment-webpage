import React, { useState } from 'react';
import './ImageCourse.css';

const images = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3'
];

const ImageCourse = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-course">
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <div className="scroll-controls">
        <button className="scroll-button" onClick={prevImage}>
          &#9664;
        </button>
        <button className="scroll-button" onClick={nextImage}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default ImageCourse;
