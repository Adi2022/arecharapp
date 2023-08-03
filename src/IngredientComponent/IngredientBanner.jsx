import React from "react";
import beachimage from '../assets/beach-image.jpg'
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

const IngredientBanner = () => {
	const checked = true;

	return (
		<Box py={4} bgcolor="white" color="black">
			<Fade in={checked === true} timeout={1000}>
				<img src={beachimage} alt="Blog Banner" style={{ width: "100%",  }} />
			</Fade>
		</Box>
	);
};

export default IngredientBanner;
