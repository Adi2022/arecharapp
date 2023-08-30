import React from "react";
import { Box, Button, Modal, TextField, Typography, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const styles = {
	main: {
		position: "relative",
		marginTop: {
			xs: "36%",
		},
	},
	callQueryButton: {
		transform: "rotate(-90deg)",
		backgroundColor: "#009090",
		color: "#fff",
	},
	buttonContainer: {
		position: "fixed", // Change position to "fixed"

		zIndex: 999,
		top: {
			md: "400px",
			xs: "20px",
		},
		right: {
			md: "-10px",
			xs: "-10px",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	modalContent: {
		backgroundColor: "#fff",
		padding: "20px",
		width: "300px",
		borderRadius: "8px",
	},
};

const ModalComponent = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Email"); // Default selected option
	const [communicationMethods, setCommunicationMethods] = useState([]);

	const [inputData, setInputData] = useState({
		name: "",
		email: "",
		mobile: "",
	});

	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputData({
			...inputData,
			[name]: value,
		});
	};
	const validateEmail = (email) => {
		// Email validation logic (e.g., regex)
		// if no email is entered

		// if email is entered

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const PostData = async (e) => {
		e.preventDefault();
		const { email, mobile, name } = inputData;

		if (!name.trim()) {
			toast.error("First Name is required");
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
		if (!mobile.trim()) {
			toast.error("Mobile Number is required");
			return;
		}
		try {
			const res = await fetch("http://localhost:3000/query", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name,
					email,
					mobile,
				}),
			});
			const data = await res.json();
			setCommunicationMethods(data); // Assuming the API returns an array of communication methods
			setSelectedOption(data[0] || "");
			console.log(data);
			if (data.error) {
				toast.error(<strong style={{ color: "red" }}>{data.error}</strong>);
			} else {
				toast.success("Query Send Successfully");
				setTimeout(() => {
					navigate("/");
				}, 1000);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};
	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<>
			<Box sx={styles.buttonContainer}>
				<Button sx={styles.callQueryButton} onClick={handleOpenModal}>
					Call Query
				</Button>
			</Box>
			<Modal open={isModalOpen} onClose={handleCloseModal} sx={styles.modal}>
				<Box sx={styles.modalContent}>
					<Typography>Submit your details if you wish to receive information from us</Typography>
					<TextField label="Name"  name="name" value={inputData.name}
                onChange={handleInput} variant="outlined" fullWidth margin="normal" />
					<TextField label="Email"  name="email" value={inputData.email}
                onChange={handleInput} variant="outlined" fullWidth margin="normal" />
					<TextField label="Mobile No"  name="mobile" value={inputData.mobile}
                onChange={handleInput} variant="outlined" fullWidth margin="normal" />
					<FormControl fullWidth margin="normal">
						<InputLabel>How can we reach you</InputLabel>
						<Select value={selectedOption} onChange={handleOptionChange} label="Choose an option">
  {communicationMethods.map((method) => (
    <MenuItem key={method} value={method}>
      {method}
    </MenuItem>
  ))}
</Select>
					</FormControl>
					<Button variant="contained" color="primary" type="submit" value="register" onClick={PostData} fullWidth>
						Submit
					</Button>
				</Box>
			</Modal>
			<ToastContainer
        position="top-right"
        autoClose={5000}
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

export default ModalComponent;
