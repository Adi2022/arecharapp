import React, { useState } from 'react';
import { Grid, Card, CardMedia, IconButton, Box, Typography, Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner.png';
import Buttons from '../common/Buttons'
const BlogsPage = () => {
  const carouselItems = [
    { image: banner1 },
    { image: banner2 },
    { image: banner3 },
    { image: banner4 },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % carouselItems.length);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? carouselItems.length - 1 : prevActiveStep - 1
    );
  };

  return (
   <Box>
    <Typography textAlign={"center"} fontWeight={"bold"} fontSize={"30px"} color={"#009090"}>Our Blogs</Typography>
     <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item xs={12} sm={10} md={8} lg={6} sx={{ position: 'relative' }}>
        <SwipeableViews
          index={activeStep}
          onChangeIndex={setActiveStep}
          style={{ width: '100%' }} // Set the width of SwipeableViews to 100%
        >
            
          {carouselItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '300px',
                width:"100%" // Set a minimum height to ensure the cards are visible
              }}
            >
              <Card sx={{ maxWidth: 400,border:2 }} >
                <CardMedia component="img" src={item.image} alt={`Banner ${index + 1}`} />
               <Box padding={"4%"}>
               <Typography >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum sequi maiores ut fugit, saepe atque quis hic consequuntur accusantium.
                </Typography>
                <Button style={{backgroundColor:"#009090", color:"#fff",marginTop:"3%"}}>Read More</Button>
               </Box>
              </Card>
            </Box>
          ))}
        </SwipeableViews>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <IconButton aria-label="Previous" onClick={handleBack}>
            <ChevronLeft />
          </IconButton>
          <IconButton aria-label="Next" onClick={handleNext}>
            <ChevronRight />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
   </Box>
  );
};

export default BlogsPage;
