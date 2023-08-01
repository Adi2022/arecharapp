import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FaqsPage = () => {
  const carouselItems = [
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 4, text: "Card 4" },
    { id: 5, text: "Card 5" },
    { id: 6, text: "Card 6" },
    { id: 7, text: "Card 7" },
  ];

  const carouselSettings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    interval: 3000, // Change this value to control the slide duration
    centerMode: true,
    centerSlidePercentage: 30,
    selectedItem: 2, // Change this value to control which card is initially visible
    onClickItem: (index) => {
      // Handle the click on carousel item here (optional)
      console.log(`Clicked on card ${index + 1}`);
    },
  };

  return (
    <div>
      <Box
        sx={{
          width: "40%",
          height: "4px",
          background: "linear-gradient(to right, #e1e1e1, #000)",
          margin: "auto",
          marginTop:"2%"
        }}
      />
      <Typography
        textAlign={"center"}
        color={"#009090"}
        fontWeight={"bold"}
        fontSize={"30px"}
        marginTop={"3%"}
        marginBottom={"3%"}
      >
        Some FAQs related to Vitagoli
      </Typography>
      <Carousel {...carouselSettings}>
        {carouselItems.map((item) => (
          <div
            key={item.id}
            style={{
              margin: "0 10px",
              marginBottom: "20px",
              // Use MUI breakpoints for responsiveness
            }}
          >
          
              <CardContent>
              <Typography color="#000" fontWeight={"bold"} textAlign={"left"}>
                 1.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                  quod culpa reprehenderit cupiditate distinctio.
                </Typography>
                <br/>
                <Typography color="#000"  textAlign={"left"}>
                 Ans-Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
                  quod culpa reprehenderit cupiditate distinctio.
                </Typography>
              </CardContent>
            
          </div>
        ))}
      </Carousel>
      <Box
        sx={{
          width: "40%",
          height: "4px",
          background: "linear-gradient(to right, #e1e1e1, #000)",
          margin: "auto",
        }}
      />
    </div>
  );
};

export default FaqsPage;
