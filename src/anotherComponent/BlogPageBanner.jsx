import React, { useState, useEffect } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import blogbanner from "../assets/blog-1.jpg";
import Fade from "@mui/material/Fade";
import axios from "axios";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: "10%",
});

const styles = {
  bannerTitleStyle1: {
    fontWeight: 700,
    textTransform:"uppercase",
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    fontSize: "65px",
    color: "#009090",
    marginBottom: "20px",
    letterSpacing: "-3px",
    lineHeight: "68px",
    // Add responsive styles
    "@media (max-width: 600px)": {
      fontSize: "30px",
      letterSpacing: "0px",
      fontWeight: 'bold',
      fontFamily: "'Montserrat', sans-serif",
    },
    marginTop:{
      md:"1%",
      xs:"20%"
    }
  },
};

const BlogPageBanner = () => {
  const [blogsData, setBlogsData] = useState([]);

  const checked = true;
  const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000");
			console.log(response);
			setBlogsData(response.data.blogs);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

  useEffect(() => {
		fetchBlogs();
	}, []);
  return (
    <Box py={4} bgcolor="white" color="black">
  
      {blogsData.map((items)=>{
        return (
          <>
          <CenteredContainer>
        <Fade in={checked === true} timeout={1000}>
          <Typography sx={styles.bannerTitleStyle1}>{items.title}</Typography>
        </Fade>
        <img src={items.photos} alt="Blog Banner" style={{ width: "100%", margin: "auto" }} />
      </CenteredContainer>
          </>
        )
      })}
    </Box>
  );
};

export default BlogPageBanner;
