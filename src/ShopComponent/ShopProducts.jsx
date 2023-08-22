import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import Fade from "@mui/material/Fade";

const styles = {
	bannerTitleStyle32: {
		color: "#000",
		fontWeight: 300,
		textAlign: "left",
		fontSize: "1rem",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "150%",
		left: "1rem",
		right: "1rem",
	},
	bannerTitleStyle22: {
		color: "#000",
		fontWeight: "bold",
		textAlign: "right",
		fontSize: "24px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "31px",
	},
	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		
		textTransform: "uppercase",
		marginTop: {
			xs:"40%",
			md:"10%"
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
		marginTop:"2%",
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
			md:"5%"
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
			
			
		}
	},
};
const ShopProducts = () => {
	const checked = true;
	const navigate = useNavigate();
	const [blogsData, setBlogsData] = useState([]);
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

	const handleBlogs = (id) => {
		navigate(`/shop/singleProduct/${id}`);
	};
	return (
		<Grid container spacing={2} marginBottom="6%" marginTop="4%" padding="4%">
			{blogsData.map((items) => {
				return (
					<>
					<Grid>
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
					</Grid>
					  
						<Grid item xs={12} sm={6} md={6} onClick={() => handleBlogs(items._id)}>
							<Card sx={{ maxWidth: 400, width: "100%", margin: "auto" }}>
								<div
									style={{
										backgroundImage: "linear-gradient(to bottom, #f2f2f2, #e1e1e1)",
										display: "flex",
										flexDirection: "column",
										opacity: 4,
									}}
								>
									<motion.div whileHover={{ scale: 1.1 }}>
										<CardMedia
											component="img"
											height="500"
											image={items.product1.photos}
											style={{
												cursor: "pointer",
											}}
										/>
									</motion.div>
								</div>
							</Card>
							<Grid container justifyContent="center">
								<Grid item xs={12} md={6}>
									<Box padding="16px">
										<Typography variant="h3" sx={styles.bannerTitleStyle32}>
											{items.product1.title}
										</Typography>
									</Box>
								</Grid>
								<Grid item>
									<Box padding="16px">
										<Typography sx={styles.bannerTitleStyle22}>
											₹{items.product1.price.toLocaleString("en-IN")}.00
										</Typography>
									</Box>
								</Grid>
							</Grid>
						</Grid>
					</>
				);
			})}
		</Grid>
	);
};

export default ShopProducts;
