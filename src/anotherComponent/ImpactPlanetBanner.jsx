import React,{useState,useEffect} from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import axios from 'axios'


const styles = {
	bannerTitleStyle1: {
		fontWeight: "bold",
		textAlign: "center",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "40px",
		color: "#009090",
		marginBottom: "20px",
		lineHeight: "43px",
        letterSpacing:"-2px",
		

		// Add responsive styles
		"@media (max-width: 600px)": {
			fontSize: "30px",
			letterSpacing: "0px",
			fontWeight: "bold",
			fontFamily: "'Montserrat', sans-serif",
		},
	},
	bannerTitleStyle2: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight:"1.65",
		marginBottom: "20px",
	},
};
const ImpactPlanetBanner = () => {
	const [impact2Data, setImpact2Data] = useState([]);

	const fetchImpact2 = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/impact2");
			console.log(response);
			setImpact2Data(response.data.impact2);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchImpact2();
	}, []);
	return (
		<Grid container spacing={2} marginBottom="6%" marginTop="4%" padding="4%">
			{impact2Data.map((blog, index) => (
				<Grid container item xs={12} sm={6} md={12} key={index}>
					
					<Grid item xs={12} sm={6} md={6} >
					<Typography sx={styles.bannerTitleStyle1}>{blog.head1.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.head1.content}
						</Typography>
					
					</Grid>
					<Grid item xs={12} sm={6} md={6} >
					<Typography sx={styles.bannerTitleStyle1}>{blog.head2.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.head2.content}
						</Typography>
						</Grid>
					
				</Grid>
			))}
		</Grid>
	);
};

export default ImpactPlanetBanner;
