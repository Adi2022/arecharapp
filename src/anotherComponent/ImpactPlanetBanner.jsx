import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Planet from '../assets/planet-img.jpg'

const ImpactPlanetBanner = () => {
	const checked = true;

	return (
		<Box py={4} bgcolor="white" color="black">
			<Fade in={checked === true} timeout={1000}>
				<img src={Planet} alt="Blog Banner" style={{ width: "100%",  }} />
			</Fade>
		</Box>
	);
};

export default ImpactPlanetBanner;
