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
		paddingBottom: "4.6%",
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		
		textTransform: "uppercase",
		marginTop: {
			xs:"60%",
			md:"15%"
		}
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
		marginTop:"4%",
		padding:"5%"
	},

	bannerTitleStyle4: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		
		textTransform: "uppercase",
		marginTop: {
			xs:"60%",
			md:"10%"
		}
	},

	bannerTitleStyle5: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
		marginTop:"4%",
		padding:"5%",
		marginBottom:{
			md:"-25%",
			
		}
	},
};
const ShopHeading = () => {
	const checked = true;

	const [blogsData, setBlogsData] = useState([]);
	const [selectedBlogId, setSelectedBlogId] = useState(null);
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/shop");
			console.log(response);
			setBlogsData(response.data.shoppingEntries);
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
				{blogsData.map((items)=>{
					return(
						<>
						<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
						{items.shop.heading} {items.shop.subHeading}
					</Typography> 
					
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
					{items.shop.description} 
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle4}>
						{items.productVitagoli.name}
					</Typography> 
					
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle5}>
					{items.productVitagoli.content} 
					</Typography>
				</Fade>
						</>
					)
				})}
			</Box>
		</Grid>
	);
};

export default ShopHeading;
