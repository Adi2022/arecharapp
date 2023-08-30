import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography, Box,Grid } from "@mui/material";
import axios from "axios";

const styles={

  main:{
    backgroundColor:"#f4f4f4",
    height:"40vh"

  },
  card:{
    backgroundColor:"#009090",
    
  },
  content:{
    color:'white',
  }
}

const FaqsPage = () => {
  const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/home");
			console.log(response);
			setBlogsData(response.data.impact1); // Update this line
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);
 

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
    <Box sx={styles.main}>
      <Box
        
      />
      {blogsData.map((items)=>{
        return (
          <>
          <Typography
        textAlign={"center"}
        color={"#009090"}
        fontWeight={"bold"}
        fontSize={"30px"}
        marginTop={"3%"}
        marginBottom={"3%"}
      >
        {items.faqs.faqsHeading}
      </Typography>

     <Carousel {...carouselSettings}>
              {/* Loop through the FAQ questions and answers */}
              {Object.keys(items.faqs.faqsQA).map((questionKey) => (
                <Grid
                  style={{
                    margin: "0 10px",
                    marginBottom: "40px",
                  }}
                  key={questionKey}
                  item
                  xs={4}
                  sm={4}
                  md={12}
                >
                  <Card sx={styles.card}>
                    <CardContent sx={styles.content}>
                      <Typography fontWeight={"bold"} textAlign={"left"}>
                        {items.faqs.faqsQA[questionKey]}
                      </Typography>
                      <br />
                      <Typography textAlign={"left"}>
                        Ans - Answers
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Carousel>
          </>
        )
      })}
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
