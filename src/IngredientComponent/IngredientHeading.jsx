import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import {BASE_URL} from "../helper"
const styles = {
	banner: {
		width: "100%",
	},
	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		textTransform: "uppercase",
		marginTop: {
			md: "15%",
			xs: "40%",
		},
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
		lineHeight: "1.65",
	},
	bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
		marginTop:"3%",
		marginBottom:"3%",
		
	},
};
const IngredientHeading = () => {
	const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get(`https://mernappback12.onrender.com/ingredient`);
			console.log(response);
			setBlogsData(response.data.blogs);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	useEffect(() => {
		fetchBlogs();
	}, []);
	return (
		<Grid sx={styles.banner}>
			{blogsData.map((items) => {
				return (
					<>
						<Fade in={checked === true} timeout={1000}>
							<Typography sx={styles.bannerTitleStyle1}>{items.heading1}</Typography>
						</Fade>
						<Fade in={checked === true} timeout={1000}>
							<Typography sx={styles.bannerTitleStyle3}>
								{items.description1}
							</Typography>
						</Fade>
						<Fade in={checked === true} timeout={1000}>
							<img src={items.photos1} alt="Blog Banner" style={{ width: "100%" }} />
						</Fade>
						
					</>
				);
			})}
		</Grid>
	);
};

export default IngredientHeading;
