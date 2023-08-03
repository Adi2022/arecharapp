import React from "react";
import healthImage from "../assets/health-img.jpg";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

const ImpactBanner = () => {
	const checked = true;

	return (
		<Box py={4} bgcolor="white" color="black">
			<Fade in={checked === true} timeout={1000}>
				<img src={healthImage} alt="Blog Banner" style={{ width: "100%",  }} />
			</Fade>
		</Box>
	);
};

export default ImpactBanner;
