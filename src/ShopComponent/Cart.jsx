import React from "react";
import { Grid, Paper, Typography, Divider, Card } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EastIcon from "@mui/icons-material/East";
import { useCartContext } from "../CartContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
	const { cartItems, removeFromCart, clearCart } = useCartContext();

	return (
		<Grid marginTop="0%" padding="12%">
			<Typography variant="h4" gutterBottom>
				Cart Items
			</Typography>

			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<button onClick={clearCart}>Clear Cart</button>
					{cartItems.map((item) => (
						<div key={item.id}>
							<Typography body="1" gutterBottom>
								1 Items
							</Typography>
							<Divider style={{ marginBottom: "16px" }} />

							<Grid container spacing={2}>
								<Grid item xs={3} md={2}>
									<Typography variant="subtitle1" align="center">
										Item
									</Typography>
								</Grid>
								<Grid item xs={3} md={2}>
									<Typography variant="subtitle1" align="center">
										Quantity
									</Typography>
								</Grid>
								<Grid item xs={3} md={2}>
									<Typography variant="subtitle1" align="center">
										Price
									</Typography>
								</Grid>
								<Grid item xs={3} md={2}>
									<Typography variant="subtitle1" align="center">
										Total
									</Typography>
								</Grid>
								<Grid item xs={3} md={2}>
									<Typography variant="subtitle1" align="center">
										Remove
									</Typography>
								</Grid>
							</Grid>
							<Typography fontSize="10px">
								Recent Activites
								<Divider style={{ marginBottom: "16px" }} />
							</Typography>

							{/* Sample cart items */}
							<Paper style={{ marginTop: "16px", padding: "8px" }}>
								<Grid container spacing={2} alignItems="center">
									<Grid item xs={3} md={2} style={{ display: "flex", alignItems: "center", gap: "5%" }}>
										<img src={item.productBannerPhoto} alt="" width="15%" height="auto" />
										<Typography fontSize="15px" fontWeight="400" align="left">
											{item.heading}
										</Typography>
									</Grid>

									<Grid
										item
										xs={3}
										md={2}
										style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5%" }}
									>
										<Button size="small" variant="contained">
											-
										</Button>
										<Button size="small" variant="outlined">
											1
										</Button>
										<Button size="small" variant="contained">
											+
										</Button>
									</Grid>

									<Grid item xs={3} md={2}>
										<Typography variant="body1" align="center" color="#ff0000">
											{item.price}
										</Typography>
									</Grid>
									<Grid item xs={3} md={2}>
										<Typography fontSize="1.25rem" fontWeight="700" align="center">
											Rs.2000
										</Typography>
									</Grid>
									<Grid item xs={3} md={2}>
										<IconButton aria-label="delete" size="large" variant="contained" color="error">
											<DeleteIcon fontSize="inherit" onClick={() => removeFromCart(item.id)} />
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
										<Typography fontSize="1.2rem" fontWeight="400">
											Subtotal
										</Typography>
										<Typography fontSize="1.2rem" fontWeight="700">
											Rs.2000
										</Typography>
									</Card>
								</Typography>
							</Grid>
						</div>
					))}
					<Grid container display="flex" justifyContent="space-between" marginTop="5%">
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px">Shop More</Grid>
							<Grid>
								<ShoppingBasketIcon />
							</Grid>
						</Grid>
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px">Chekout</Grid>
							<Grid>
								<EastIcon />
							</Grid>
						</Grid>
					</Grid>
				</>
			)}
		</Grid>
	);
};

export default Cart;
