import React from "react";
import { Typography, Grid, Box, Container, Button } from "@mui/material";
import banner1 from "../assets/book.jpg";
import Buttons from "../common/Buttons";

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
		color: "white",
	},
};
const BookSlot = () => {
	return (
		<Container sx={styles.main}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6} md={6}>
					<Box sx={{ paddingLeft: "20px" }}>
						<Typography
							marginBottom={"20px"}
							marginTop={"20px"}
							variant="h4"
							style={{ color: "#009090", fontWeight: 600, fontSize: "55px", textAlign: "left", marginTop: "20%" }}
						>
							Free Consult with the Nutritionist
						</Typography>
						<Button sx={styles.reviewButton}>Book The Slot</Button>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<img src={banner1} alt="Logo" style={{ height:"auto" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default BookSlot;
