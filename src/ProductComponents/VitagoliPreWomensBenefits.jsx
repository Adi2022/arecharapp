import React from 'react';
import { Grid } from '@mui/material';
import pre1 from '../assets/preImage1.png'
import pre2 from '../assets/preimage2.png'
import pre3 from '../assets/preimage3.png'
import pre4 from '../assets/preimage4.png';
import pre5 from '../assets/preimage5.png';
import pre6 from '../assets/preimage6.png';
import pre7 from '../assets/preimage7.png'

const VitagoliPreWomensBenefits = () => {
  const images = [
    {image:pre1},
    {image:pre2},
    {image:pre3},
    {image:pre4},
    {image:pre5},
    {image:pre6},
    {image:pre7},
  ]

  return (
    <Grid container spacing={2} justifyContent="center">
      {images.slice(0,1).map((image, index) => (
        <Grid key={index} item xs={12} sm={12} md={12} lg={12}>
          <img src={image.image}  style={{ width: '100%', height:"auto" }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VitagoliPreWomensBenefits;
