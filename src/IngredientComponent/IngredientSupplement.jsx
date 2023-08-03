import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const styles = {
	main: {
		
		paddingLeft: "6%",
		paddingRight: "6%",
		paddingBottom: "4.6%",
		paddingTop: "2.6%",
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "40px",
		fontFamily: "'Montserrat', sans-serif",
		textTransform: "uppercase",
		lineHeight: "50px",
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "40px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
		lineHeight: "50px",
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
const IngredientSupplement = () => {
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
					<Typography  sx={styles.bannerTitleStyle1}>
						A daily dose of supplement for women of all
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography  sx={styles.bannerTitleStyle2}>
						ages.
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography  sx={styles.bannerTitleStyle3} style={{ marginTop: "4%" }}>
						Made with natural extracts of fruits and other elements, our gummies are a perfect way to be{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography  sx={styles.bannerTitleStyle3}>
						healthy and stay healthy. They are 100% vegetarian, gluten & gelatin free: with no animal{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography  sx={styles.bannerTitleStyle3}>
						derivatives and dairy ingredients, calcium and vitamin d gummies are free from gluten and
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						gelatin. These gummies comprise the purest non- gmo additives and oodles of multivitamins of{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						your good health.
					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default IngredientSupplement;
