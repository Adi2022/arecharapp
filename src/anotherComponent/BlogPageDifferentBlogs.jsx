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
	{ image: blog1, text: "Explore The Benefits Of Antioxid" },
	{ image: blog2, text: "7 Ways To Stop Hair Fall For Fem" },
	{ image: blog3, text: "6 Omega 3 Facts You Need To Know" },
	{ image: blog4, text: "5 Hair Masks For Keratin Hair Tr" },
	{ image: blog5, text: "10 Things You Need To Know About" },
	{ image: blog6, text: "How to Improve Your Gut Health i" },
	{ image: blog7, text: "Sea Buckthorn: Health Benefits," },
	{ image: blog8, text: "Discovering The Potential of Ino" },
	{ image: blog9, text: "Tips on How to Grow Hair Faster" },
	{ image: blog10, text: "Discovering the Secrets of Vitam" },
	{ image: blog11, text: "Gut-Brain Harmony: Cultivating M" },
	{ image: blog12, text: "Unlock The Secret To Rapunzel-Li" },
];
const styles = {
	bannerTitleStyle1: {
		fontWeight: "bold",
		textAlign: "left",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "20px",
		color: "#000",
		marginBottom: "20px",
		lineHeight: "1.2",
		letterSpacing: "-.02rem",

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
const BlogPageDifferentBlogs = () => {
	return (
		<Grid container spacing={2} marginBottom="6%" marginTop="4%" >
			{blogsData.map((blog, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<Card>
						<CardMedia component="img" height="200"  image={blog.image} alt={blog.text} />
						<CardContent>
							<Typography sx={styles.bannerTitleStyle1}>{blog.text}</Typography>
							<Typography sx={styles.bannerTitleStyle2}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptatibus saepe dicta deserunt cupiditate
								maiores sed excepturi. Illum, atque nemo, minima obcaecati modi commodi accusantium qui quae animi, est
								voluptatum!
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};

export default BlogPageDifferentBlogs;
