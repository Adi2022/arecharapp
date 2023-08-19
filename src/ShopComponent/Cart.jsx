import React from "react";
import { Grid, Paper, Typography, Divider, Card } from "@mui/material";
import p1 from "../assets/cart.jpg";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EastIcon from "@mui/icons-material/East";
import { useCartContext } from "../CartContext";

const Cart = () => {
	const { cartItems, removeFromCart, clearCart } = useCartContext();

	return (
		<div style={{ padding: "10%", marginTop: "0%" }}>
			<Typography variant="h4" gutterBottom>
				Cart Items
			</Typography>
			<Typography body="1" gutterBottom>
				1 Items
			</Typography>
			<Divider style={{ marginBottom: "16px" }} />

			<Grid container spacing={2}>
				<Grid item xs={3} md={3}>
					<Typography variant="subtitle1" align="center">
						Item
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography variant="subtitle1" align="center">
						Quantity
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography variant="subtitle1" align="center">
						Price
					</Typography>
				</Grid>
				<Grid item xs={3} md={3}>
					<Typography variant="subtitle1" align="center">
						Total
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
					<Grid item xs={3} md={3} style={{ display: "flex", alignItems: "center", gap: "5%" }}>
						<img src={p1} alt="" width="15%" height="auto" />
						<Typography fontSize="15px" fontWeight="400" align="left">
							Vitagoli Vitamin Gummies Hair, Skin and Nails
						</Typography>
					</Grid>

					<Grid
						item
						xs={3}
						md={3}
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

					<Grid item xs={3} md={3}>
						<Typography variant="body1" align="center" color="#ff0000">
							799
						</Typography>
					</Grid>
					<Grid item xs={3} md={3}>
						<Typography fontSize="1.25rem" fontWeight="700" align="center">
							Rs.2000
						</Typography>
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
		</div>
	);
};

export default Cart;
