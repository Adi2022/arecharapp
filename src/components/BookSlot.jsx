import React from "react";
import { Typography, Grid, Box, Container } from "@mui/material";
import banner1 from "../assets/images.jpg";
import Buttons from "../common/Buttons";

const BookSlot = () => {
	return (
		<Container
			sx={{
				backgroundColor: "#f2f2f2",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				
				borderRadius: "50px",
				marginTop: "10%",
			}}
		>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Box sx={{ paddingLeft: "20px" }}>
						<Typography
							marginBottom={"20px"}
							marginTop={"20px"}
							variant="h4"
							style={{ color: "#009090", fontWeight: "light", fontSize: "40px", textAlign: "center" }}
						>
							Free Consult with the Nutritionist
						</Typography>
						<Buttons title="Book The Slot" />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img src={banner1} alt="Logo" style={{ width: "100%",borderRadius:"50px" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

export default BookSlot;
