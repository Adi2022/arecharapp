import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Divider, Card,Fade } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EastIcon from "@mui/icons-material/East";
import { useCartContext } from "../CartContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const CartLatest = () => {
	
  const [blogsData, setBlogsData] = useState([]);
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/cartProduct");
			console.log(response);
			setBlogsData(response.data.cartItems);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	useEffect(() => {
		fetchBlogs();
	}, []);

	
	return (
		<Grid marginTop="0%" padding="12%">
			<Grid container justifyContent="flex-end" marginBottom="20px"></Grid>
			<Typography fontSize="1.5rem" fontWeight="700" gutterBottom>
				Cart Items
			</Typography>

		
				<>
					<Divider style={{ marginBottom: "16px" }} />
				
				
				</>
		
				<>
					<Grid display="flex" justifyContent="end">
						<Grid>
							<Button variant="contained" color="error" >
								Clear Cart
							</Button>
						</Grid>
					</Grid>
				
					
							<div>
								<Typography fontSize="10px" color="#6C757E" gutterBottom>
									 Item
								</Typography>
								<Divider style={{ marginBottom: "16px" }} />

								<Grid container spacing={2}>
                  {blogsData.map((items)=>{
                    return (
                      <>
                      <Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											{items.title1}
										</Typography>
									</Grid>
                  <Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											{items.title2}
										</Typography>
									</Grid>
                  <Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											{items.title3}
										</Typography>
									</Grid>
                  <Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											{items.title4}
										</Typography>
									</Grid>
                  <Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											{items.title5}
										</Typography>
									</Grid>
                      </>
                    )
                  })}
								</Grid>

								<Typography fontSize="0.8rem" color="#009090" textTransform="uppercase" marginTop="3%">
									Recent Activities
									<Divider style={{ marginBottom: "16px" }} />
								</Typography>

								<Paper style={{ marginTop: "16px", padding: "8px" }}>
									<Grid container spacing={2} alignItems="center">
										<Grid
											item
											xs={3}
											md={2.4}
											style={{
												display: "flex",
												alignItems: "center",
												gap: "5%",
											}}
										>
											<img src={""} alt="" width="15%" height="auto" />
											<Typography fontSize="15px" fontWeight="400" align="left" color="#6C757E">
												
											</Typography>
										</Grid>

										<Grid
											item
											xs={3}
											md={2.4}
											style={{
												display: "flex",
												alignItems: "center",
												justifyContent: "center",
												gap: "5%",
											}}
										>
											<Button size="small" variant="contained" onClick={() => handleDecrement()}>
												-
											</Button>
											<Button size="small" variant="outlined">
											
											</Button>
											<Button size="small" variant="contained" onClick={() => handleIncrement()}>
												+
											</Button>
										</Grid>

										<Grid item xs={3} md={2.4}>
											<Typography variant="body1" align="center" color="#ff0000">
											
											</Typography>
										</Grid>
										<Grid item xs={3} md={2.4}>
											<Typography fontSize="1.25rem" fontWeight="700" align="center" color="#555">
											
											</Typography>
										</Grid>
										<Grid item xs={3} md={2.4}>
											<IconButton
												aria-label="delete"
												size="large"
												variant="contained"
												color="error"
												
												sx={{
													marginLeft: "85px",
												}}
											>
												<DeleteIcon />
											</IconButton>
										</Grid>
									</Grid>
								</Paper>

								<Grid container display="flex" justifyContent="end" marginTop="5%">
									<Typography align="center">
										<Card
											sx={{
												display: "flex",
												gap: "10%",
												justifyContent: "center",
												backgroundColor: "#ccc",
												borderBottomLeftRadius: "50px",
												padding: "20px",
											}}
										>
											<Typography fontSize="1.2rem" fontWeight="400" color="#555">
												Subtotal
											</Typography>
											<Typography
												fontSize="1.2rem"
												fontWeight="700"
												color="#555"
												paddingRight="1.25rem"
												paddingLeft="1.25rem"
											>
											
											</Typography>
										</Card>
									</Typography>
								</Grid>
							</div>
					
				
					<Grid container display="flex" justifyContent="space-between" marginTop="5%">
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px" >
								Shop More
							</Grid>
							<Grid>
								<ShoppingBasketIcon  />
							</Grid>
						</Grid>
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px">Checkout</Grid>
							<Grid>
								<EastIcon />
							</Grid>
						</Grid>
					</Grid>
				</>
			
		</Grid>
	);
};

export default CartLatest;
