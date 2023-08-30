import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import React, { useState, useEffect } from "react";
import axios from "axios";
const styles = {
	gridLeft: {
		backgroundColor: "#fff",
		paddingLeft: "6%",
		paddingRight: "6%",
		paddingTop: "4.6%",
		paddingBottom: "4.6%",
	},

	gridCenter: {
		backgroundColor: "#fff",
		paddingLeft: "6%",
		paddingRight: "6%",
		paddingTop: "4.6%",
		paddingBottom: "4.6%",
	},

	bannerTitleStyle1: {
		marginTop: "8%",
		marginBottom: "6%",
		fontSize: "30px",
		color: "#009090",
		fontWeight: "normal",
		letterSpacing: " 1.02px",
		textAlign: {
			xxs: "left",
			xs: "left",
			sm: "left",
			md: "left",
			lg: "left",
			xl: "left",
		},
	},

	para: {
		color: "#000",
	},

	para1: {
		color: "rgb(135,14,25)",
	},

	image: {
		width: "50%",
	},
	heading: {
		fontWeight: "normal",
		fontFamily: "Baskerville",
		fontStyle: "normal",
		fontSize: "50px",
		color: "#009090",
	},
	bannerTitleStyle3: {
		fontWeight: "500",
		textAlign: "center",
		color: "#fff",
		fontSize: "16px",
	},
	centerHeading: {
		fontWeight: 400,
		textAlign: "center",
		fontFamily:"'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "50px",
		color: "#009090",
		marginBottom: '20px',
	},
	bannerTitleStyle2: {
		marginTop: "8%",
		marginBottom: "6%",
		letterSpacing: "normal",
		color: "brown",
		fontSize: "40px",
		fontWeight: "bold",
		textAlign: {
			xxs: "left",
			xs: "left",
			sm: "left",
			md: "left",
			lg: "left",
			xl: "left",
		},
	},
};

const AboutPageCertifications = () => {
	const [blogsData, setBlogsData] = useState([]);
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://myapp-8q5z.onrender.com/about1");
			console.log(response);
			setBlogsData(response.data.about1);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);
	const checked = true;
	return (
		<div>
			{/* <Typography variant="h2" sx={styles.centerHeading}>
				CERTIFICATION AND RECOGNITIONS
			</Typography>
			<Grid container>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={fda} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							FDA Registered
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
							The Food and Drug Administration (FDA) certification focuses on providing guidelines to ensure that food
							products are safe, wholesome, sanitary, and properly labeled before they reach consumers.
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={nsf} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							NSF
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
							NSF certification is a seal of approval given to products that have been extensively tested and verified
							to meet the rigorous standards set by the National Sanitation Foundation (NSF).
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={fssai} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							FSSAI
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
							Food Safety and Standards Authority of India, which is responsible for making sure that all food products
							sold in India meet certain standards. The FSSAI certification process is a way to ensure that the food
							you're eating is safe and healthy.
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={kosher} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							KOSHER
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
							Kosher certification is a process through which food products are certified to contain ingredients that
							meet the dietary restrictions of Jewish law.
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridCenter}>
					<img src={halal} style={styles.image} alt="image2" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							HALAL
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
							HALAL certification is basically a process of ensuring that food items meet the requirements set by
							Islamic dietary laws to ensure that all ingredients and processes used in preparing food are
							HALAL-compliant.
						</Typography>
					</Fade>
				</Grid>
			</Grid> */}

			{blogsData.map((items)=>{
				return (
					<>
					<Typography variant="h2" sx={styles.centerHeading}>
				{items.certificationHeading}
			</Typography>

			<Grid container>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={items.photos1} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
							{items.certiHead1}
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
						{items.certiContent1}
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={items.photos2} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
						{items.certiHead2}
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
						{items.certiContent2}
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={items.photos3} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
						{items.certiHead3}
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
						{items.certiContent3}
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridLeft}>
					<img src={items.photos4} style={styles.image} alt="image1" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
						{items.certiHead4}
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
						{items.certiContent4}
						</Typography>
					</Fade>
				</Grid>
				<Grid item xs={12} md={4} sx={styles.gridCenter}>
					<img src={items.photos5} style={styles.image} alt="image2" />
					<Fade in={checked === true} timeout={1000}>
						<Typography variant="h4" sx={styles.bannerTitleStyle1}>
						{items.certiHead5}
						</Typography>
					</Fade>
					<Fade in={checked === true} timeout={3000}>
						<Typography variant="body1" style={styles.para}>
						{items.certiContent5}
						</Typography>
					</Fade>
				</Grid>
			</Grid>
					</>
				)
			})}
		</div>
	);
};
export default AboutPageCertifications;
