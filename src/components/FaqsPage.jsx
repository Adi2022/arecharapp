import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FaqsPage = () => {
  const carouselItems = [
    { id: 1, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 2, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 3, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 4, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 5, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 6, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
    { id: 7, text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit." },
  ];

  const isSmallScreen = window.innerWidth <= 600; // Adjust breakpoint as needed
  const visibleCards = isSmallScreen ? 1 : 3;

  const carouselSettings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    interval: 3000,
    centerMode: !isSmallScreen,
    centerSlidePercentage: isSmallScreen ? 100 : 30,
    selectedItem: 2,
    showArrows: !visibleCards,
    onClickItem: (index) => {
      console.log(`Clicked on card ${index + 1}`);
    },
  };

  return (
    <Box>
      <Box
        sx={{
          background: "linear-gradient(to right, #e1e1e1, #000)",
          margin: "auto",
          marginTop: "2%",
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
            }}
          >
            <Card>
              <CardContent>
                <Typography color="#000" fontWeight={"bold"} textAlign={"left"}>
                  {item.text}
                </Typography>
                <br />
                <Typography color="#000" textAlign={"left"}>
                  Ans - {item.text}
                </Typography>
              </CardContent>
            </Card>
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
    </Box>
  );
};

export default FaqsPage;
