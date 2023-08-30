import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import axios from "axios";
const styles = {
	main: {
		paddingLeft: "6%",
		paddingRight: "6%",
		backgroundColor: "#fff",
		paddingBottom: "4.6%",
		color: "#000",
	},

	bannerTitleStyle1: {
		fontWeight: 400,
		textAlign: "center",
		fontFamily:"'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "50px",
		color: "#009090",
		marginBottom: '20px',
	},
	bannerTitleStyle2: {
		fontWeight: "light",
		textAlign: "center",
		fontFamily:"'Montserrat', sans-serif",
		fontSize: "16px",
	},
};
const AboutPageWhyChooseUs = () => {
	const checked = true;
	const [blogsData, setBlogsData] = useState([]);
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/about1");
			console.log(response);
			setBlogsData(response.data.about1);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<Grid
			container
			style={styles.main}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "",
				backgroundSize: "cover",
				color: "white",
				opacity: "1",
			}}
		>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				{/* <Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle1}>WHY CHOOSE US</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    We focus on health through nature’s most complete source of nutrition.We are committed to helping the society through ardent care and enrich the growing demands of nourishment specifically for pregnant mothers,
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    infants, and kids. The strong bond, the everlasting connection they both share needs nutrition to nurture. And for that, we have strived, understood the market, the needs and have launched our premium ranges of products.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    Our mission is to not only support healthcare but also transform lives by manufacturing accessible and effective life-saving drugs. Arechar strives to improve the health of patients globally.
					</Typography>
				</Fade> */}
				{blogsData.map((items)=>{
					return (
						<>
						<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle1}>{items.heading3}</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                   {items.content9}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                   {items.content10}
					</Typography>
				</Fade>
						</>
					)
				})}
			</Box>
		</Grid>
	);
};

export default AboutPageWhyChooseUs;
