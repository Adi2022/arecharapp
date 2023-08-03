import React from "react";
import people from "../assets/people-img.jpg";
import { Box, Typography, Container,Grid,CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

const blogsData = [
	{ text: "Better People" },
	{ text: "Better Workplace" },
	
];

const styles = {
	bannerTitleStyle1: {
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "40px",
		color: "#009090",
		marginBottom: "20px",
		lineHeight: "43px",
		letterSpacing: "-2px",

		// Add responsive styles
		"@media (max-width: 600px)": {
			fontSize: "30px",
			letterSpacing: "0px",
			fontWeight: "bold",
			fontFamily: "'Montserrat', sans-serif",
		},
	},
	bannerTitleStyle2: {
		fontWeight: 200,
		textAlign: "left",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "15px",
		color: "#000",
		marginBottom: "20px",
	},
};
const ImpactPeopleBanner = () => {
	const checked = true;

	return (
		<Box py={4} bgcolor="white" color="black">
			<Fade in={checked === true} timeout={1000}>
				<img src={people} alt="Blog Banner" style={{ width: "100%",  }} />
			</Fade>
            <Box py={4} bgcolor="white" color="black">
			
			<Grid container spacing={2} marginBottom="6%" marginTop="4%" padding="4%">
				{blogsData.map((blog, index) => (
					<Grid item xs={12} sm={6} md={6} key={index}>
						<CardContent>
							<Typography sx={styles.bannerTitleStyle1}>{blog.text}</Typography>
							<Typography sx={styles.bannerTitleStyle2}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus saepe dicta deserunt cupiditate
								maiores sed excepturi. Illum, atque nemo, minima obcaecati modi commodi accusantium qui quae animi, est
								voluptatum!
							</Typography>
						</CardContent>
					</Grid>
				))}
			</Grid>
		</Box>
		</Box>
	);
};

export default ImpactPeopleBanner;
