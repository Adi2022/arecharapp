import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import axios from "axios";

const styles = {
	main: {
		backgroundColor: "#fff",
		paddingLeft: "6%",
		paddingRight: "6%",

		paddingBottom: "4.6%",
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "400",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
	},
	bannerTitleStyle2: {
		color: "black",
		fontWeight: "400",
		textAlign: "center",
		fontFamily: "'Arizonia', cursive",
		fontSize: "100px",
		marginTop: {
			md: "17%",
			xs: "35%",
		},
	},
};
const AboutPageHeading = () => {
	const [blogsData, setBlogsData] = useState([]);
	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/about1");
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
				{blogsData.map((items) => {
					return (
						<>
							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle2}>
									{items.aboutHeading}
								</Typography>
							</Fade>
							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle1}>
									{items.content1} {items.content2} {items.content3}
								</Typography>
							</Fade>
						</>
					);
				})}
			</Box>
		</Grid>
	);
};

export default AboutPageHeading;
