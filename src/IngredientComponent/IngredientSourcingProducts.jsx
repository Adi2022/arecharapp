import React from "react";
import { Box, Typography } from "@mui/material";
import product1 from "../assets/sourcing-1.png";
import product2 from "../assets/sourcing-2.png";
import product3 from "../assets/sourcing-3.png";

const styles = {
	main: {
		backgroundColor: "#fff",
		paddingLeft: "3%",
		paddingRight: "3%",
		paddingBottom: "4.6%",
		paddingTop:"2%"
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		marginBottom: "4%",
		textTransform: "uppercase",
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
	},
	bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "left",
		fontSize: "15px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
		margin: "2%",
	},
};
const IngredientSourcingProducts = () => {
	const checked = true;
	return (
		<Box
			sx={styles.main}
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexDirection={{ xs: "column", sm: "row" }}
		>
			<Box display="flex" flexDirection="row" alignItems="center">
				<img src={product1} alt="Product 1" style={{ marginBottom: "20px", width: "40%" }} />
				<Typography sx={styles.bannerTitleStyle3}>
					<strong>All natural</strong> The all-natural ingredients reflect our pure approach to our work. They also
					ensure the best of health.
				</Typography>
			</Box>
			<Box display="flex" flexDirection="row" alignItems="center">
				<img src={product2} alt="Product 2" style={{ marginBottom: "20px", width: "40%" }} />
				<Typography sx={styles.bannerTitleStyle3}>
					<strong>Responsible sourcing</strong> We source our ingredients with a practice that puts the least strain on
					the environment and the health of our workers.
				</Typography>
			</Box>
			<Box display="flex" flexDirection="row" alignItems="center">
				<img src={product3} alt="Product 3" style={{ marginBottom: "20px", width: "40%" }} />
				<Typography sx={styles.bannerTitleStyle3}>
					<strong>Sustainable</strong> Right from getting what we need to producing. From Packaging to distributing, we
					ensure that our business practice is sustainable.
				</Typography>
			</Box>
		</Box>
	);
};

export default IngredientSourcingProducts;
