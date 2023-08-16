import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
const styles = {
	main: {
		backgroundColor: "#fff",
	
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		marginBottom: "4%",
		textTransform: "uppercase",
		lineHeight: "50px",
		marginTop:"4%"
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
	},
	bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
	},
};
const IngredientSourcing = () => {
	const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/ingredient");
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
		<Grid
			container
			style={styles.main}
			
		>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				{blogsData.map((items) => {
					return (
						<>
							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle1}>
									{items.source.heading2}
								</Typography>
							</Fade>
							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle3}>
									{items.source.description2}
								</Typography>
							</Fade>
						</>
					);
				})}
			</Box>
		</Grid>
	);
};

export default IngredientSourcing;
