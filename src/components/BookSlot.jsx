import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, Container, Button, Modal, TextField, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import banner1 from "../assets/book.jpg";
import Buttons from "../common/Buttons";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const styles = {
	main: {
		backgroundColor: "#f2f2f2",
		marginTop: "5%",
		marginBottom: "5%",
		paddingLeft: "4.6%",
		paddingRight: "4.6%",
	},

	reviewButton: {
		backgroundColor: "#009090",
		width: "50%",
		fontSize: "15px",
		color: "white",
		"&:hover": {
			backgroundColor: "#009090",
			fontSize: "20px",
			fontWeight: 700,
		},
	},

	bookslot: {
		backgroundColor: "#009090",
		width: "50%",
		fontSize: "15px",
		color: "white",
		"&:hover": {
			backgroundColor: "#009090",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		
	  },
	modalContent: {
		backgroundColor: "white",
		padding: "20px",
		borderRadius: "10px",
		boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
		maxWidth: "400px",
		width: "100%",
	},
};

const BookSlot = () => {
	const [blogsData, setBlogsData] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal open/close
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
	});

	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/home");
			console.log(response);
			setBlogsData(response.data.impact1);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};

	const handleModalClose = () => {
		setIsModalOpen(false);
	};

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Handle form submission here, e.g. send form data to server
		// Reset form data and close the modal
		setFormData({
			name: "",
			email: "",
			phone: "",
			address: "",
		});
		setIsModalOpen(false);
	};

	return (
		<Container sx={styles.main}>
			<Grid container spacing={2}>
				{blogsData.map((items) => {
					return (
						<>
							<Grid item xs={12} sm={6} md={6}>
								<Box sx={{ paddingLeft: "20px" }}>
									<Typography
										marginBottom={"20px"}
										marginTop={"20px"}
										variant="h4"
										style={{ color: "#009090", fontWeight: 600, fontSize: "55px", textAlign: "left", marginTop: "20%" }}
									>
										{items.bookSlot.bookSlotHeading}
									</Typography>
									<Button sx={styles.reviewButton} onClick={handleModalOpen}>
										Book The Slot
									</Button>{" "}
								</Box>
							</Grid>

							<Grid item xs={12} sm={12} md={6}>
								<img src={items.bookSlot.bookSlotPhotos} alt="Logo" style={{ width: "100%", height: "100%" }} />
							</Grid>
						</>
					);
				})}
			</Grid>

			{/* Modal */}
			
			<Modal open={isModalOpen} onClose={handleModalClose} className={styles.modal}>
				<div style={styles.modalContent}>
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleModalClose}
						aria-label="close"
						sx={{ position: "absolute", top: "10px", left: "15px" }}
					>
						<CloseIcon />
					</IconButton>
					<Typography textAlign="center">Book Slot</Typography>
					<form onSubmit={handleFormSubmit}>
						<TextField
							label="Name"
							name="name"
							value={formData.name}
							onChange={handleFormChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Email"
							name="email"
							value={formData.email}
							onChange={handleFormChange}
							fullWidth
							margin="normal"
						/>
						<TextField
							label="Phone"
							name="phone"
							value={formData.phone}
							onChange={handleFormChange}
							fullWidth
							margin="normal"
						/>

						<Button type="submit" fullWidth sx={styles.bookslot}>
							Submit
						</Button>
					</form>
				</div>
			</Modal>
			
		</Container>
	);
};

export default BookSlot;
