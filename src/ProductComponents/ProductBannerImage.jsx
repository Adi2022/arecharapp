import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const styles = {
	main: {
		backgroundColor: "#fff",
		backgroundColor: "#EFEFEF",
		paddingBottom: "4.6%",
		
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "light",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontSize: "16px",
	},
};
const ProductBannerImage = () => {
	const checked = true;

	return (
		<Grid sx={styles.main}>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				<Fade in={checked === true} timeout={1000}>
					<Typography sx={styles.bannerTitleStyle1}>
						<span style={{ fontSize: "211px", fontWeight: 700 }}>100</span>{" "}
						<span style={{ fontSize: "111px", fontWeight: 400 }}>% Natural</span>
					</Typography>
				</Fade>
			</Box>
		</Grid>
	);
};

export default ProductBannerImage;
