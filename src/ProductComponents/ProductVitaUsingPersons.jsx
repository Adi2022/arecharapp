import React from 'react';
import { Grid } from '@mui/material';
import boss from '../assets/boss.png';
import collegeGirl from '../assets/collegegirl.png';
import fitness from '../assets/fitnessgirll.png';
import workingmom from '../assets/working mom.png';
import socialmediagirl from '../assets/socialmediawoman.png';
import supermom from '../assets/supermoms.png';

const ProductVitaUsingPersons = () => {
  const images = [
    {image:boss},
    {image:collegeGirl},
    {image:fitness},
    {image:workingmom},
    {image:socialmediagirl},
    {image:supermom}
  ]

  return (
    <Grid container spacing={2} justifyContent="center">
      {images.slice(0,1).map((image, index) => (
        <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
          <img src={image.image}  style={{ width: '100%', height: 'auto' }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductVitaUsingPersons;
