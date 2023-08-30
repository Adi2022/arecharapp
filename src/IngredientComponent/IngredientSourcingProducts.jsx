import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
const styles = {
	main: {
		backgroundColor: "#fff",
		
		
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		marginBottom: "4%",
		textTransform: "uppercase",
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
		textAlign: "left",
		fontSize: "15px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
		margin: "2%",
	},
};
const IngredientSourcingProducts = () => {
	const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/ingredient");
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
		<Box
			sx={styles.main}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexDirection={{ xs: "column", sm: "row" }}
		>
			{blogsData.map((items) => {
				return (
					<>
						<Box display="flex" flexDirection="row" alignItems="center">
							<img
								src={items.source.sourcingTypes.image1}
								alt="Product 1"
								style={{ marginBottom: "20px", width: "40%" }}
							/>
							<Typography sx={styles.bannerTitleStyle3}>{items.source.sourcingTypes.content1}</Typography>
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center">
							<img
								src={items.source.sourcingTypes.image2}
								alt="Product 1"
								style={{ marginBottom: "20px", width: "40%" }}
							/>
							<Typography sx={styles.bannerTitleStyle3}>{items.source.sourcingTypes.content2}</Typography>
						</Box>
						<Box display="flex" flexDirection="row" alignItems="center">
							<img
								src={items.source.sourcingTypes.image3}
								alt="Product 1"
								style={{ marginBottom: "20px", width: "40%" }}
							/>
							<Typography sx={styles.bannerTitleStyle3}>{items.source.sourcingTypes.content3}</Typography>
						</Box>
					</>
				);
			})}
		</Box>
	);
};

export default IngredientSourcingProducts;
