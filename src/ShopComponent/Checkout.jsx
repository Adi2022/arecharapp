import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, TextField, Button, IconButton, InputAdornment, Divider, Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cart from "../assets/cart.jpg";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SendIcon from "@mui/icons-material/Send";
import queryString from "query-string";
import { useCartContext } from "../CartContext";

const styles = {
	inputbox: {
		backgroundColor: "#fff",
		width: "100%",
		outline: "none !important",
		boxShadow: "none !important",
		fontSize: "16px",
		fontWeight: "500",
		letterSpacing: ".8px",
		color: "#000",
		marginRight: "0.5rem",
		marginTop: "5%",
	},
	emailButton: {
		backgroundColor: "#009090",
		color: "white",
		width: "auto",

		outline: " none",
		height: "3.2rem",
		marginTop: "5%",
		"&:hover": {
			backgroundColor: "#009090",
			color: "#fff",
		},
	},
	sendButton: {
		backgroundColor: "#009090",
		color: "white",
		width: "auto",
		outline: " none",
		height: "3.2rem",
		marginTop: "5%",
		"&:hover": {
			backgroundColor: "#009090",
			color: "#fff",
		},
	},
};

const Checkout = () => {
	const navigate = useNavigate();
	const { cartItems, removeFromCart, clearCart, setCartItems } = useCartContext();
	console.log(cartItems, "cartitemssss");
	const location = useLocation();
	const queryParams = queryString.parse(location.search);
	const selectedProducts = JSON.parse(queryParams.products);
	const [itemQuantities, setItemQuantities] = useState({});

	console.log("selected products:", selectedProducts);
	const [showP, setShowP] = useState(false);
	const [inputData, setInputData] = useState({
		name: "",
		phoneNumber: "",
		email: "",
		pinCode: "",
		addressLine1: "",
		addressLine2: "",
		city: "",
		state: "",
	});

	const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData({
          ...inputData,
          [name]: value,
        });
      };

	  const validateEmail = (email) => {
       
    
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
	const PostData = async (e) => {
		e.preventDefault();
		const { name, email, phoneNumber, city, state, addressLine1, addressLine2, pinCode } = inputData;

		if (!name.trim()) {
			toast.error("Name is required");
			return;
		}
		if (!phoneNumber.trim()) {
			toast.error("PhoneNumber is required");
			return;
		}

		if (!email.trim()) {
			toast.error("Email is required");
			return;
		}
		if (!validateEmail(email)) {
			toast.error("Invalid email address");
			return;
		}
		if (!city.trim()) {
			toast.error("City is required");
			return;
		}
		if (!state.trim()) {
			toast.error("State is required");
			return;
		}
		if (!pinCode.trim()) {
			toast.error("PinCode is required");
			return;
		}
		if (!addressLine1.trim()) {
			toast.error("AddressLine1 is required");
			return;
		}
		if (!addressLine2.trim()) {
			toast.error("AddressLine2 is required");
			return;
		}

		try {
			const res = await fetch("http://localhost:3000/checkoutCustomer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name, email, phoneNumber, city, state, addressLine1, addressLine2, pinCode
				}),
			});
			const data = await res.json();
			console.log(data);
			if (data.error) {
				toast.error(<strong style={{ color: "red" }}>{data.error}</strong>);
			} else {
				toast.warn("Going to Payment Page");
				setTimeout(() => {
					navigate("/");
				}, 1000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleGoToCart = () => {
		navigate("/cart");
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
	return (
		<>
			<Grid container component="main" sx={{ height: "auto" }} marginTop="5%" padding="5%">
				<Grid item xs={12} sm={8} md={6}>
					<Grid container direction="column" justifyContent="center" padding={2} sx={{ height: "auto" }}>
						<Typography component="h1" variant="h5" fontWeight={"bold"} style={{ color: "#555" }}>
							Billing Details
						</Typography>
						<form style={{ width: "100%" }}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="name"
										label="Name *"
										name="name"
										autoComplete="name"
										autoFocus
										value={inputData.name}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="phoneNumber"
										label="Phone Number *"
										name="phoneNumber"
										autoComplete="tel"
										value={inputData.phoneNumber}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="email"
										label="Email *"
										name="email"
										autoComplete="email"
										value={inputData.email}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="pinCode"
										label="PinCode *"
										name="pinCode"
										autoComplete="pinCode"
										value={inputData.pinCode}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6} md={12}>
									<TextField
										margin="normal"
										fullWidth
										id="addressLine1"
										label="AddressLine1 *"
										name="addressLine1"
										autoComplete="addressLine1"
										value={inputData.addressLine1}
										onChange={handleInput}
									/>
									<TextField
										margin="normal"
										fullWidth
										id="addressLine2"
										label="AddressLine2 *"
										name="addressLine2"
										autoComplete="addressLine2"
										value={inputData.addressLine2}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="city"
										label="City *"
										name="city"
										autoComplete="city"
										autoFocus
										value={inputData.city}
										onChange={handleInput}
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										margin="normal"
										fullWidth
										id="state"
										label="State*"
										name="state"
										autoComplete="state"
										value={inputData.state}
										onChange={handleInput}
									/>
								</Grid>
							</Grid>
						</form>
					</Grid>
				</Grid>
				{/* Right grid for the form */}
				<Grid item xs={false} sm={4} md={6}>
					<Grid container>
						<Grid
							container
							direction="row"
							justifyContent="center"
							padding={2}
							sx={{ height: "auto" }}
							alignItems="center"
							gap="2%"
						>
							<Typography component="h1" variant="h5" fontWeight={"bold"} style={{ color: "#555" }}>
								Your Order
							</Typography>
							<Typography style={{ color: "#555" }} fontSize="10px" fontWeight="700" onClick={handleGoToCart}>
								Go to cart
							</Typography>
						</Grid>
					</Grid>
					<Grid container padding="2%" item md={12} xs={12}>
						{cartItems.map((item) => {
							const quantity = itemQuantities[item.id] || 1;
							const totalAmount = quantity * item.price;

							return (
								<React.Fragment key={item.id}>
									<Grid item md={3}>
										<img src={item.productBannerPhoto} style={{ height: "50px", width: "50px" }} alt="Product" />
									</Grid>
									<Grid item md={4}>
										<Typography sx={{ color: "#000", cursor: "pointer", textAlign: "left", fontSize: "1rem" }}>
											{item.heading}
										</Typography>
										<Typography>Quantity: {quantity}</Typography>
									</Grid>
									<Grid item md={4}>
										<Typography>₹{item.price}</Typography>
										<Typography>Total: ₹{totalAmount.toLocaleString("en-IN")}.00</Typography>
									</Grid>
								</React.Fragment>
							);
						})}
					</Grid>
					<Divider style={{ marginTop: "5%" }} />
					<Typography
						sx={{
							color: "#555",
							fontWeight: "400",
							fontSize: "1rem",
							fontFamily: "Montserrat,sans-serif ",
							marginTop: "10%",
						}}
					>
						Have Promocode ?
					</Typography>
					<Grid container>
						<Grid item md={12}>
							<Box sx={{ display: "flex" }}>
								<TextField sx={{ ...styles.inputbox, flexGrow: 1 }} placeholder="Enter Promocode" />
								<Button sx={styles.emailButton}>Apply</Button>
							</Box>
							<Grid display="flex" justifyContent="end">
								<Button sx={styles.sendButton} type="submit" value="register" onClick={PostData} endIcon={<SendIcon />}>
									Proceed to Payment
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<ToastContainer
				position="top-right"
				autoClose={1000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</>
	);
};

export default Checkout;
