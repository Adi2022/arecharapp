import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import banner1 from "../assets/images.jpg";

const BookSlot = () => {
	return (
		<Box sx={{  backgroundColor: "#f2f2f2" }}>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Typography
						marginBottom={"20px"}
						marginTop={"20px"}
						variant="h4"
						style={{ color: "#009090", fontWeight: "600" }}
					>
						Free Consult with the Nutrisionist 
					</Typography>
					<div style={{ fontWeight: "400", fontFamily: "'Poppins', sans-serif" }}>
						<Typography variant="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem sequi unde sapiente voluptates
							eum quidem tempore perspiciatis deserunt quam asperiores, deleniti obcaecati labore possimus laboriosam
							ipsum quis sit earum?
						</Typography>
						{/* Rest of the content */}
					</div>
				</Grid>
				<Grid item xs={12} sm={6}>
					<img src={banner1} alt="Logo" style={{ width: "100%" }} />
				</Grid>
			</Grid>
		</Box>
	);
};

export default BookSlot;
