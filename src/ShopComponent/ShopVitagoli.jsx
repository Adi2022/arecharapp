import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

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
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight: "1.65",
	},
};
const ShopVitagoli = () => {
	const checked = true;
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
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
						VITAGOLI Range
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						Keeping a woman’s nutrition in mind, our gummies are made{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						with love and care. With naturally sourced ingredients, they{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						make for the perfect daily dose of good health. Like they say, a{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						gummy a day, keeps worries at bay.
					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default ShopVitagoli;
