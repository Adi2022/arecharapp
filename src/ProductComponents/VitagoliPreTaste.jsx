import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import GrapeSeeds from "../assets/mixed_berry_1.png";
const styles = {
	main: {
		paddingLeft: "6%",
		paddingRight: "6%",
		backgroundColor: "#fff",
		paddingBottom: "4.6%",
		color: "#000",
		marginBottom: "4%",
		marginTop: "4%",
	},

	bannerTitleStyle1: {
		fontWeight: 400,
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "50px",
		color: "#009090",
		marginBottom: "20px",
	},
	bannerTitleStyle2: {
		fontWeight: "light",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontSize: "16px",
	},
    bannerTitleStyle3: {
		fontWeight: "light",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontSize: "36px",
	},
};
const VitagoliPreTaste = () => {
	const checked = true;

	return (
		<Grid container style={styles.main}>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle1}>GOOD TASTE OF NATURE</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
						Vitagoli come from nature and the good old familiar taste of goodness is what one experiences when one
						consumes
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>our products.</Typography>
				</Fade>
				{/* insert image */}
				<img src={GrapeSeeds} style={{maxWidth:"20%", borderRadius:"50px" , marginTop:"2%", marginBottom:"2%"}} />

				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle3}>Mixed Berry</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle2}>
                    Mixed Berry Flavour					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default VitagoliPreTaste;
