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
const AboutPageWhyChooseUs = () => {
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
					<Typography sx={styles.bannerTitleStyle1}>WHY CHOOSE US</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    We focus on health through nature’s most complete source of nutrition.We are committed to helping the society through ardent care and enrich the growing demands of nourishment specifically for pregnant mothers,
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    infants, and kids. The strong bond, the everlasting connection they both share needs nutrition to nurture. And for that, we have strived, understood the market, the needs and have launched our premium ranges of products.

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

export default AboutPageWhyChooseUs;
