import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import ModalComponent from '../Modal/ModalComponent'
const styles = {
	main: {
		backgroundColor: "#fff",
		paddingLeft: "6%",
		paddingRight: "6%",

		paddingBottom: "4.6%",
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",

		textTransform: "uppercase",
		marginTop: {
			md: "15%",
			xs: "35%",
		},
		marginBottom: "4%",
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
		marginBottom: "4%",
	},
	bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
	},
};

const ImpactHeading = () => {
	const checked = true;

	const [impactData, setImpactData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:3000/impact1") // Replace with your API endpoint
			.then((response) => {
				console.log(response);
				setImpactData(response.data.impact1);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);
	return (
		<Grid
			container
			style={styles.main}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "",
				backgroundSize: "cover",
				color: "white",
				opacity: "1",
			}}
		>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				{impactData.map((items) => {
					return (
						<>
							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle1}>
									{items.heading1}.
								</Typography>
							</Fade>

							<Fade in={checked === true} timeout={1000}>
								<Typography variant="h3" sx={styles.bannerTitleStyle3}>
									{items.content1}
								</Typography>
							</Fade>

							<Fade in={checked === true} timeout={1000}>
								<img src={items.photos1} alt="Blog Banner" style={{ width: "100%" }} />
							</Fade>
							<ModalComponent/>
						</>
					);
				})}
				
			</Box>
		</Grid>
	);
};

export default ImpactHeading;
