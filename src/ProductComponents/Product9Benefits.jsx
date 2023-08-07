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
		color: "#000",
		fontWeight: "light",
		textAlign: "center",
		fontSize: "30px",
		fontFamily: "'Montserrat', sans-serif",
		
		textTransform: "uppercase",
		marginTop:"1%"
	},
	bannerTitleStyle2: {
		color: "#000",
		fontWeight: "light",
		textAlign: "center",
		fontSize: "20px",
		fontFamily: "Montserrat, sans-serif",
		textTransform: "uppercase",
		marginTop:"2%"
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
const Product9Benefits = () => {
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
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
                    Biotin
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
					Aids in healthy metabolism along with strengthening hair and stimulating new hair growth.

					</Typography>
				</Fade>
				
			</Box>
		</Grid>
	);
};

export default Product9Benefits;
