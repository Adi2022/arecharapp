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
const AboutPageWhoWeAre = () => {
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
					<Typography sx={styles.bannerTitleStyle1}>WHO ARE WE</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						Incorporated early 2021, Arechar is a pharmaceutical company that is now aggressively moving towards being a
						Multi-Specialty Manufacturer. Managed by progressive thinkers, it aims to become one of India’s largest
						suppliers for niche
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						Life Saving Drugs while also extending to the Nutraceuticals division. Inspired by mother nature, all our
						products are 100% natural, 100% effective and eco-friendly.{" "}
					</Typography>
				</Fade>
                <Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    Our mission is to not only support healthcare but also transform lives by manufacturing accessible and effective life-saving drugs. Arechar strives to improve the health of patients globally.


					</Typography>
				</Fade> */}
				{blogsData.map((items)=>{
					return(
						<>
						<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle1}>{items.heading2}</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						{items.content5}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						{items.content6}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						{items.content7}
					</Typography>
				</Fade>
						</>
					)
				})}
			</Box>
		</Grid>
	);
};

export default AboutPageWhoWeAre;
