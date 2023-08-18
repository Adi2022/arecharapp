import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const CenteredContainer = styled(Container)({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	textAlign: "center",
});
const styles = {
	main: {
		
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
		marginTop:{
			md:"10%",
			xs:"10%"
		},
		
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
		marginBottom:"4%"
	},
};
const IngredientSupplement = () => {
	const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://mernappback12.onrender.com/ingredient");
			console.log(response);
			setBlogsData(response.data.blogs);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	useEffect(() => {
		fetchBlogs();
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
				{blogsData.map((items) => {
					return (
						<>
							<Fade in={checked === true} timeout={1000}>
								<Typography sx={styles.bannerTitleStyle1}>{items.heading3}</Typography>
							</Fade>

							<Fade in={checked === true} timeout={1000}>
								<Typography sx={styles.bannerTitleStyle3} style={{ marginTop: "4%" }}>
									{items.description3}
								</Typography>
							</Fade>

							<CenteredContainer>
								<img
									src={items.photos2}
									alt="Blog Banner"
									style={{ width: "100%", margin: "auto", marginBottom: "4%" }}
								/>
							</CenteredContainer>
						</>
					);
				})}
			</Box>
		</Grid>
	);
};

export default IngredientSupplement;
