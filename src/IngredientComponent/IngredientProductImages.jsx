import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import blogbanner from "../assets/vitagoli-4.jpg";
import Fade from "@mui/material/Fade";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
 
});



const IngredientProductImages = () => {
  const checked = true;

  return (
    <Box py={4}>
      <CenteredContainer>
        <img src={blogbanner} alt="Blog Banner" style={{ width: "100%"}} />
      </CenteredContainer>
    </Box>
  );
};

export default IngredientProductImages;
