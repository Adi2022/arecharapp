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
		backgroundColor: "#009090",
		paddingBottom: "4.6%",
		color: "#fff",
		height: "20rem",
	},

	bannerTitleStyle1: {
		color: "#fff",
		fontWeight: "light",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontSize: "16px",
	},
};
const AboutPageInfo = () => {
	const [blogsData, setBlogsData] = useState([]);

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

	const checked = true;

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
				backgroundColor: "#009090",
			}}
		>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				{blogsData.map((items) => {
					return (
						<>
							<Fade in={checked === true} timeout={1000}>
								<Typography sx={styles.bannerTitleStyle1}>{items.content4}</Typography>
							</Fade>
						</>
					);
				})}
			</Box>
		</Grid>
	);
};

export default AboutPageInfo;
