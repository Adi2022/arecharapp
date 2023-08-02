import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import blogbanner from "../assets/blog-1.jpg";
import Fade from "@mui/material/Fade";

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
    fontWeight: 400,
    textAlign: "center",
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: "normal",
    fontSize: "65px",
    color: "#009090",
    marginBottom: "20px",
    letterSpacing: "-4px",
    lineHeight: "68px",
    // Add responsive styles
    "@media (max-width: 600px)": {
      fontSize: "30px",
      letterSpacing: "0px",
      fontWeight: 'bold',
      fontFamily: "'Montserrat', sans-serif",
    },
  },
};

const BlogPageBanner = () => {
  const checked = true;

  return (
    <Box py={4} bgcolor="white" color="black">
      <CenteredContainer>
        <Fade in={checked === true} timeout={1000}>
          <Typography sx={styles.bannerTitleStyle1}>LET THE GOODNESS FLOW</Typography>
        </Fade>
        <img src={blogbanner} alt="Blog Banner" style={{ width: "100%", margin: "auto" }} />
      </CenteredContainer>
    </Box>
  );
};

export default BlogPageBanner;
