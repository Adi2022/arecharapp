import React from 'react';
import { useState } from 'react';
import biotin from '../assets/Apple_Cider.png';
import folate from '../assets/2-Bacillus_Coagulans.png';
import grapeseed from '../assets/2-Cranberry_extract.png';
import insotil from '../assets/2-Magnecium.png';
import kertain from '../assets/2-Omega3.png';
import vitamin6 from '../assets/2-Zinc.png';

import Carousel from 'react-elastic-carousel';
import { Typography } from '@mui/material';

const images = [biotin, folate, grapeseed, insotil, kertain, vitamin6];

const VitagoliPreProductsTypes = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = images.slice(currentImageIndex, currentImageIndex + 9); // Show 6 images at a time

  return (
  <>
  <Typography textAlign="center" fontSize="50px" color="#009090" fontWeight="400" marginBottom="50px">INGREDIENTS</Typography>
    <div className="carousel-container"> {/* Change the class name here */}
      <div className="carousel">
        <Carousel itemsToShow={1} itemsToScroll={1}>
          {visibleImages.map((image, index) => (
            <div key={index} className="carousel-image-container"> {/* Wrap each image in a div */}
              <img
                src={image}
                alt={`Slide ${currentImageIndex + 1}`}
                style={{ margin: '10px' }} 
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  </>
  );
};

export default VitagoliPreProductsTypes;
