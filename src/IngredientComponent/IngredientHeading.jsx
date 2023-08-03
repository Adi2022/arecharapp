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
        paddingTop:"2.6%"
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
		marginTop: "20%",
		textTransform: "uppercase",
        lineHeight: "1.65",
	},
	bannerTitleStyle2: {
		color: "#009090",
		fontWeight: 400,
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
        lineHeight: "1.65",
        
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
const IngredientHeading = () => {
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
			<Box sx={{ textAlign: "center", width: "100%" }} >
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
						We come from nature and
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
						natural is what we must
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
						consume
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3} style={{marginTop:"4%"}}>
						Our ingredients are carefully picked. Be it the finest corals in the ocean or resource rich exotic forests,
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						our sources help our products attain their unique added value. They are to be cherished{" "}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						for generations to come, thanks to the hard work we put in while procuring them. Natural, organic and
						sustainable
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						ingredients have been our chief priority. We source from various places
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						to bring the right nutrition for the betterment of the health and well-being. We procure sustainable
						material and discard
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
						all those which harbor the potential to harm the environment. Getting the right nutrition to people remains
						our single-most important mission.
					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default IngredientHeading;
