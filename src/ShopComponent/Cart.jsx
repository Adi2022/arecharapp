import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, Divider, Card } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import EastIcon from "@mui/icons-material/East";
import { useCartContext } from "../CartContext";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink, useNavigate } from "react-router-dom";
import queryString from "query-string";

const Cart = () => {
	const [totalCartAmount, setTotalCartAmount] = useState(0);

	const { cartItems, removeFromCart, clearCart,setCartItems } = useCartContext();
	console.log(cartItems)
	const navigate = useNavigate();
	const [itemQuantities, setItemQuantities] = useState({});
	const handleDecrement = (itemId) => {
		if (itemQuantities[itemId] > 1) {
			setItemQuantities((prevQuantities) => ({
				...prevQuantities,
				[itemId]: prevQuantities[itemId] - 1,
			}));
		}
	};
	const handleIncrement = (itemId) => {
		if (itemQuantities[itemId] < 20) {
			setItemQuantities((prevQuantities) => ({
				...prevQuantities,
				[itemId]: prevQuantities[itemId] + 1,
			}));
		}
	};
	const movetoShop = () => {
		navigate("/shop");
	};
	const movetoCheckout = () => {
		// Construct a query parameter string with the selected product data
		const queryParams = queryString.stringify({
		  products: JSON.stringify(cartItems),
		  // You can include other information like quantities, etc. if needed
		});
	
		// Navigate to the checkout route with the query parameters
		navigate(`/checkout?${queryParams}`);
	  };
	
	useEffect(() => {
		// Initialize item quantities based on cart items
		const quantities = {};
		cartItems.forEach((item) => {
		  quantities[item.id] = 1; // Initial quantity is 1
		});
		setItemQuantities(quantities);
	
		// Save cart items to localStorage
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	  }, [cartItems]);
	
	  useEffect(() => {
		// Retrieve cart items from localStorage on component mount
		const savedCartItems = localStorage.getItem("cartItems");
		if (savedCartItems) {
		  const parsedCartItems = JSON.parse(savedCartItems);
		  setCartItems(parsedCartItems);
		}
	  }, []);
	
	return (
		<Grid marginTop="0%" padding="12%">
			<Grid container justifyContent="flex-end" marginBottom="20px"></Grid>
			<Typography fontSize="1.5rem" fontWeight="700" gutterBottom>
				Cart Items
			</Typography>

			{cartItems.length === 0 ? (
				<>
					<Divider style={{ marginBottom: "16px" }} />
					<Typography fontSize="1.0rem" fontWeight="700" textAlign="center">
						No items in cart
					</Typography>
					<Grid display="flex" alignItems="center" justifyContent="center" marginTop="2%">
						<Grid marginRight="5px" onClick={movetoShop}>
							Shop More
						</Grid>
						<Grid>
							<ShoppingBasketIcon onClick={movetoShop} />
						</Grid>
					</Grid>
				</>
			) : (
				<>
					<Grid display="flex" justifyContent="end">
						<Grid>
							<Button variant="contained" color="error" onClick={clearCart}>
								Clear Cart
							</Button>
						</Grid>
					</Grid> 
					
					{cartItems.map((item) => {
						const quantity = itemQuantities[item.id] || 1;
						const totalAmount = quantity * item.price;

						return (
							<div key={item.id}>
								<Typography fontSize="10px" color="#6C757E" gutterBottom>
									{quantity} Item
								</Typography>
								<Divider style={{ marginBottom: "16px" }} />

								<Grid container spacing={2}>
									<Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											Item
										</Typography>
									</Grid>
									<Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											Quantity
										</Typography>
									</Grid>
									<Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											Price
										</Typography>
									</Grid>
									<Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											Total
										</Typography>
									</Grid>
									<Grid item xs={3} md={2.4}>
										<Typography fontSize="0.8rem" color="#6C757E" align="center">
											Remove
										</Typography>
									</Grid>
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
											<img src={item.productBannerPhoto} alt="" width="15%" height="auto" />
											<Typography fontSize="15px" fontWeight="400" align="left" color="#6C757E">
												{item.heading}
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
											<Button size="small" variant="contained" onClick={() => handleDecrement(item.id)}>
												-
											</Button>
											<Button size="small" variant="outlined">
												{quantity}
											</Button>
											<Button size="small" variant="contained" onClick={() => handleIncrement(item.id)}>
												+
											</Button>
										</Grid>

										<Grid item xs={3} md={2.4}>
											<Typography variant="body1" align="center" color="#ff0000">
												₹{item.price.toLocaleString("en-IN")}.00
											</Typography>
										</Grid>
										<Grid item xs={3} md={2.4}>
											<Typography fontSize="1.25rem" fontWeight="700" align="center" color="#555">
												₹{totalAmount.toLocaleString("en-IN")}.00
											</Typography>
										</Grid>
										<Grid item xs={3} md={2.4}>
											<IconButton
												aria-label="delete"
												size="large"
												variant="contained"
												color="error"
												onClick={() => removeFromCart(item.id)}
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
												₹{totalAmount.toLocaleString("en-IN")}.00
											</Typography>
										</Card>
									</Typography>
								</Grid>
							</div>
						);
					})}
					<Grid container display="flex" justifyContent="space-between" marginTop="5%">
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px" onClick={movetoShop}>
								Shop More
							</Grid>
							<Grid>
								<ShoppingBasketIcon onClick={movetoShop} />
							</Grid>
						</Grid>
						<Grid display="flex" alignItems="center">
							<Grid marginRight="5px" onClick={movetoCheckout}>Checkout</Grid>
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
