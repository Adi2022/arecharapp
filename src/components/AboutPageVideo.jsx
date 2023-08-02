import React from 'react';
import { Container } from '@mui/material';

const AboutPageVideo = () => {
  const containerStyle = {
    paddingTop: '20px', // Add your desired padding value for the top
    paddingBottom: '20px', // Add your desired padding value for the bottom
  };

  return (
    <Container maxWidth="md" style={containerStyle}>
      <video controls width="100%" height="auto">
        <source src="https://www.arecharnutra.com/assets/media/NGO_FINAL_CHECK_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Container>
  );
};

export default AboutPageVideo;
