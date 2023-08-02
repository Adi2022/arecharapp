import React from 'react';
import { styled } from '@mui/material/styles';
import Founder from '../assets/ruchika-team-icon.jpg';

// Styled components to apply custom styles
const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

const Image = styled('img')({
  borderRadius: '50%',
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '40px',
});

const Name = styled('div')({
  fontSize: '40px',
  marginBottom: '100px',
  color:"GrayText"
});

const AboutPageFounder = () => {
  return (
    <Container>
      <Image src={Founder} alt="Founder" />
      <Name>Ruchika Rajbans</Name>
    </Container>
  );
};

export default AboutPageFounder;
