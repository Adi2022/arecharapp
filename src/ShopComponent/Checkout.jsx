import React, { useState } from "react";
import { Grid, Paper, Typography, TextField, Button, IconButton, InputAdornment,Divider,Box } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logo.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const styles={
    inputbox:{
        borderRadius: "50px",
		backgroundColor: "#fff",
		width: "100%",
		outline: "none !important",
		boxShadow: "none !important",
		fontSize: "16px",
		fontWeight: "500",
		letterSpacing: ".8px",
		color: "#000",
		marginRight: "0.5rem",
		marginTop:"5%"
    },
    emailButton: {
		backgroundColor: "#009090",
		color: "white",
		width: "auto",
		borderRadius: "8px",
		outline: " none",
		height: "3.2rem",
		marginTop:"5%",
		"&:hover": {
			backgroundColor: "#009090",
			color: "#fff",
		},
	},
}

const Checkout = () => {
	const navigate = useNavigate();
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

	const handleTogglePassword = () => {
		setShowP(!showP);
	};

	const validateInput = () => {
		const { name, phoneNumber, email, pinCode, addressLine1, addressLine2, city, state } = inputData;

		if (!name.trim()) {
			toast.error("Name is required");
			return false;
		}

		if (!phoneNumber.trim()) {
			toast.error("Phone number is required");
			return false;
		}

		if (!city.trim()) {
			toast.error("City is required");
			return false;
		}

		if (!reason.trim()) {
			toast.error("Reason is required");
			return false;
		}

		return true;
	};

	const sendEmail = async () => {
		if (!validateInput()) {
			return;
		}

		try {
			const response = await fetch("http://35.154.144.61:3000/sendEmail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(inputData),
			});

			if (response.ok) {
				toast.success("Enquiry sent successfully");
				setTimeout(() => {
					navigate("/enquiryMsg");
				}, 1000);
			} else {
				toast.error("Failed to send enquiry");
			}
		} catch (error) {
			console.error("Error sending enquiry:", error);
			toast.error("An error occurred while sending the enquiry");
		}
	};

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
                    <Grid display="flex" gap="20px" alignItems="center">
                    <Typography component="h1" variant="h5" fontWeight={"bold"} style={{ color: "#555" }}>
							Your Order
						</Typography>
                        <Typography  style={{ color: "#555" }}>
							Go to cart
						</Typography>
                        </Grid>
                      
					</Grid>
                   <Grid container>
                    <Grid md={4}>
                        a
                    </Grid>
                    <Grid md={4}>
                        a
                    </Grid>
                    <Grid md={4}>
                        a
                    </Grid>
                   </Grid>
                   <Divider />
                   <Typography component="h5" variant="h5" fontWeight={"normal"} style={{ color: "#555" }}>
							Have Promocode ?
						</Typography>
                        <Grid container>
						<Grid item md={12}>
						
									<TextField sx={styles.inputbox} placeholder="Enter Promocode"  />
									<Button sx={styles.emailButton}>
										Apply
									</Button>
								
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
