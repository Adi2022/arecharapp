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
		"@media (max-width: 767px)": {
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
const ImpactCompanyPromises = () => {
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
		<Grid container spacing={2} alignItems={"center"}>
			{impact2Data.map((blog, index) => (
				<Grid container item xs={12} sm={12} md={12} key={index}>
					
					<Grid item xs={12} sm={6} md={6} >
					<Typography sx={styles.bannerTitleStyle1}>{blog.headings1.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.headings1.content}
						</Typography>
						<Typography sx={styles.bannerTitleStyle1}>{blog.headings2.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.headings2.content}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={6} >
						<Typography sx={styles.bannerTitleStyle1}>{blog.headings3.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.headings3.content}
						</Typography>
						<Typography sx={styles.bannerTitleStyle1}>{blog.headings4.heading}</Typography>
						<Typography sx={styles.bannerTitleStyle2}>
						{blog.headings4.content}
						</Typography>
						</Grid>
					
				</Grid>
			))}
		</Grid>
	);
};

export default ImpactCompanyPromises;
