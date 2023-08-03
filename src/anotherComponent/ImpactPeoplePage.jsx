import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import Planet from "../assets/planet-img.jpg";
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
		letterSpacing: "6px",
		marginBottom: "5%",
	},
	bannerTitleStyle2: {
		color: "black",
		fontWeight: "400",
		textAlign: "center",
		fontFamily: "'Arizonia', cursive",
		fontSize: "100px",
	},
	bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight:"1.65"
	},
};
const ImpactPeoplePage = () => {
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
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
						The
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
						PEOPLE
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						We made it our mission to bring health through food to as many people as possible Building on the unique
						health &
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						wellness positioning of our portfolio, and on our in-depth knowledge of local context, our ambition is to
						grow our
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						brands while having a positive impact on people’s eating and drinking{" "}
					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default ImpactPeoplePage;
