import React from 'react';
import { useState } from 'react';
import biotin from '../assets/Biotin.png';
import folate from '../assets/Folate.png';
import grapeseed from '../assets/Grape_Seed_Extract.png';
import insotil from '../assets/Inositol.png';
import kertain from '../assets/Keratin.png';
import vitamin6 from '../assets/Vit_B6.png';
import vit12 from '../assets/Vit_B12.png';
import Carousel from 'react-elastic-carousel';

const images = [biotin, folate, grapeseed, insotil, kertain, vitamin6, vit12];

const ProductTypes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 9); // Show 6 images at a time

  return (
    <div className="carousel-container"> {/* Change the class name here */}
      <div className="carousel">
        <Carousel itemsToShow={3} itemsToScroll={3}>
          {visibleImages.map((image, index) => (
            <img
              key={index}
              
              src={image}
              alt={`Slide ${currentImageIndex + 1}`}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductTypes;
