import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpeg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog12.jpg";
import blog7 from "../assets/blog6.jpg";
import blog8 from "../assets/blog7.jpg";
import blog9 from "../assets/blog8.jpg";
import blog10 from "../assets/blog9.jpg";
import blog11 from "../assets/blog10.jpg";
import blog12 from "../assets/blog11.jpg";
import { styled } from "@mui/material/styles";

const blogsData = [
	{ image: blog1, text: "Better Products" },
	{ image: blog2, text: "Better Choices" },
	{ image: blog3, text: "Better Consumption" },
	{ image: blog4, text: "Better Company Practises" },
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
        letterSpacing:"-2px",
		

		// Add responsive styles
		"@media (max-width: 600px)": {
			fontSize: "30px",
			letterSpacing: "0px",
			fontWeight: "bold",
			fontFamily: "'Montserrat', sans-serif",
		},
	},
	bannerTitleStyle2: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight:"1.65",
		marginBottom: "20px",
	},
};
const ImpactCompanyPromises = () => {
	return (
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
	);
};

export default ImpactCompanyPromises;
