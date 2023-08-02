import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const styles = {
	main: {
		paddingLeft: "6%",
		paddingRight: "6%",
		backgroundColor: "#fff",
		paddingBottom: "4.6%",
		color: "#000",
		
	},

	bannerTitleStyle1: {
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "Baskerville",
		fontStyle: "normal",
		fontSize: "50px",
		color: "#009090",
	},
	bannerTitleStyle2: {
		fontWeight: "light",
		textAlign: "center",
		fontFamily: "Baskerville",
		fontStyle: "italic",
		fontSize: "20px",
	},
};
const AboutPageWhoWeAre = () => {
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
					<Typography sx={styles.bannerTitleStyle1}>WHO ARE WE</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						Incorporated early 2021, Arechar is a pharmaceutical company that is now aggressively moving towards being a
						Multi-Specialty Manufacturer. Managed by progressive thinkers, it aims to become one of India’s largest
						suppliers for niche
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						Life Saving Drugs while also extending to the Nutraceuticals division. Inspired by mother nature, all our
						products are 100% natural, 100% effective and eco-friendly.{" "}
					</Typography>
				</Fade>
                <Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    Our mission is to not only support healthcare but also transform lives by manufacturing accessible and effective life-saving drugs. Arechar strives to improve the health of patients globally.


					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default AboutPageWhoWeAre;
