import { Box, Grid, Typography ,Modal,TextField} from "@mui/material";
import carousel1 from "../assets/carousel-1.jpg";
import carousel2 from "../assets/carousel-1.jpg";
import carousel3 from "../assets/carousel-1.jpg";
import carousel4 from "../assets/carousel-1.jpg";
import banner from "../assets/preImage1.png";
import { Paper, Button } from "@mui/material";
import {useState} from 'react'
import Carousel from "react-material-ui-carousel";
import { Paper as CarouselPaper } from "@mui/material";
import ModalComponent from "../Modal/ModalComponent";


const carouselImages = [carousel1, carousel2, carousel3, carousel4];

const styles = {
  main: {
    position: "relative",
    marginTop:{
      xs:"36%",
      md:"10%"
    }
  },
  callQueryButton: {
    transform: "rotate(-90deg)",
    backgroundColor: "#009090",
    color: "#fff",
    

    "@media (max-width: 600px)": {
      width: "100px", // Adjusted width for medium screens
      height: "50px", // Adjusted height for medium screens
    },
    "@media (max-width: 400px)": {
      width: "40px", // Adjusted width for small screens
      height: "40px", // Adjusted height for small screens
    },
    "@media (max-width: 320px)": {
      width: "30px", // Adjusted width for extra small screens
      height: "30px", // Adjusted height for extra small screens
    },
  },
  buttonContainer: {
    position: "absolute",
    top: "50%",
    right: "0px",
    transform: "translateY(-50%)",
    zIndex: 999,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
  },
};

const HomeBanner = () => {

  

  return (
    <Box sx={styles.main}>
      <Carousel>
        {carouselImages.map((image, index) => (
          <CarouselPaper key={index}>
            <img src={image} alt={`Carousel ${index}`} style={{ width: "100%" }} />
          </CarouselPaper>
        ))}
      </Carousel>
      <ModalComponent/>
    </Box>
  );
};

export default HomeBanner;
