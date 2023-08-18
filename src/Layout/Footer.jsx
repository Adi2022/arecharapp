import React from "react";
import { Box, Container, Grid, Typography, Button, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import fda from "../assets/fda.jpeg";
import nsf from "../assets/nsf.jpeg";
import kuler from "../assets/kosher.jpeg";
import fssai from "../assets/fssai.jpeg";
import payment from '../assets/payment.png'
const styles = {
	heading: {
		fontSize: "16px",
		color: "#fff",
		fontWeight: 700,
		marginTop: "45px",
		marginBottom:"50px"
	},
	subHeading: {
		display: "block",
		marginBottom: "5px",
		padding: 0,
		textAlign: "left",
		color: "#B0B9AE",
		fontWeight: "normal",
		textTransform: "capitalize",
		textDecoration: "none",
		transition: "transform 0.5s ease-in-out",
		"&:hover": {
			color: "#fff",
			cursor: 'pointer',
			transform: "scale(1.1)",
			
		},
	},

	inputbox: {
		borderRadius: "8px",
		backgroundColor: "#fff",
		width: "auto",
		outline: "none !important",
		boxShadow: "none !important",
		fontSize: "16px",
		fontWeight: "500",
		letterSpacing: ".8px",
		color: "#000",
		marginRight: "0.5rem",
		marginTop:"5%"
	},
	emailButton: {
		backgroundColor: "#009090",
		color: "white",
		width: "auto",
		borderRadius: "8px",
		outline: " none",
		height: "3.2rem",
		marginTop:"5%",
		"&:hover": {
			backgroundColor: "#009090",
			color: "#fff",
		},
	},
	icons: {
		display:"flex",
		gap:"2rem",
		marginTop:"1rem"
	},
	payment:{
		paddingLeft:'4%',
		paddingRight:"4%"
		
		
	}
};

const Footer = () => {
	const navigate = useNavigate();
	return (
		<Box bgcolor={"#555"} style={{ color: "white" }} paddingBottom="5%">
			<footer style={{ margin: "auto" }}>
				<Box py={2}>
					<Container maxWidth="lg">
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6} md={3} color={"#fff"}>
								<Typography sx={styles.heading}>Keep well with ArchearNutra</Typography>
								<Typography sx={styles.subHeading} marginBottom="50px" >
									Vitagoli Vitamin Gummies Hair, Nail & Skin and Vitagoli Vitamin Gummies Pre & probiotics + Algal DHA.
								</Typography>

								<Box display="flex" alignItems="center">
									<TextField sx={styles.inputbox} placeholder="Email" />
									<Button sx={styles.emailButton}>
										<NavigateNextIcon />
									</Button>
								</Box>

								{/* Follow us heading and social media icons */}
								<Box display="flex" gap="3rem" mt={2}>
									
								<Box display="flex" gap="2rem" mt={2}>
										<Link to="https://www.facebook.com/VitaGoliGummy" target="_blank" rel="noopener noreferrer">
											<FacebookOutlinedIcon style={{ width: 30, height: 30, marginRight: 2, color: "#000" ,borderRadius:"50px",backgroundColor:"#fff"}} />
										</Link>
										<Link to="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
											<TwitterIcon style={{ width: 30, height: 30,  marginRight: 2, color: "#000" ,borderRadius:"50px",backgroundColor:"#fff"}} />
										</Link>
										<Link to="https://www.linkedin.com/company/78023607/" target="_blank" rel="noopener noreferrer">
											<LinkedInIcon style={{ width: 30, height: 30,  color: "#000" ,borderRadius:"50px",backgroundColor:"#fff"}} />
										</Link>
										<Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
											<Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
												<InstagramIcon style={{ width: 30, height: 30,  color: "#000",borderRadius:"50px",backgroundColor:"#fff" }} />
											</Link>
										</Link>
									</Box>
								</Box>
							</Grid>
							<Grid item xs={12} sm={6} md={2}>
								<Typography sx={styles.heading}>QuickLinks</Typography>
								
								<Typography component={Link} to="/about" color={"#B0B9AE"} sx={styles.subHeading}>
									About
								</Typography>
								<Typography sx={styles.subHeading}>Contact</Typography>
								<Typography component={Link} to="/blog" sx={styles.subHeading}>Blogs</Typography>{" "}
								<Typography sx={styles.subHeading}>Web Stories</Typography>
								<Typography sx={styles.subHeading}>Testimonials</Typography>
								<Typography sx={styles.subHeading}>Join To Earn (Affiliate)</Typography>
								<Typography sx={styles.subHeading}>Carrers</Typography>

							</Grid>
							<Grid item xs={12} sm={6} md={2}>
								<Typography sx={styles.heading}>Products</Typography>
								<Typography component={Link} to="/productVitagoli" sx={styles.subHeading}>Vitagoli Vitamin Gummies Hair, Skin and Nails</Typography>
								<Typography component={Link} to="/productVitagoliPre" sx={styles.subHeading}>
									Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6} md={2}>
								<Typography sx={styles.heading}>Policies</Typography>

								<Typography sx={styles.subHeading}>Return Policy</Typography>

								<Typography sx={styles.subHeading}>Privacy Policy</Typography>

								<Typography sx={styles.subHeading}>Terms & Conditions</Typography>
							</Grid>

							<Grid item xs={12} sm={12} md={2}>
								<img src={logo} style={{ height: "100px" }} alt="Logo" />
								<Grid sx={styles.icons}>
									<Grid>
										<img src={fda} style={{ height: "30px" }} alt="Logo" />
									</Grid>
									<Grid>
										<img src={nsf} style={{ height: "30px" }} alt="Logo" />
									</Grid>
									<Grid>
										<img src={kuler} style={{ height: "30px" }} alt="Logo" />
									</Grid>
									<Grid>
										<img src={fssai} style={{ height: "30px" }} alt="Logo" />
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Box
					sx={{
						width: "80%",
						height: "2px",
						background: "linear-gradient(to right, #e1e1e1, #fff)",
						margin: "auto",
					}}
				/>
				<Typography textAlign="center" fontSize="25px" fontWeight="700" marginTop="2%"marginBottom="2%" >We Accept</Typography>
				<Grid container sx={styles.payment}>
					
					 <Grid  item xs={12} sm={12} md={6} >
					<Typography color="#009090" >Hair, Nail and Skin Gummies | Pre and Probiotics + Algal DHA Gummies</Typography>
					<Typography marginTop="4%">© 2023 ArecharNutra. All Rights Reserved.</Typography>
				</Grid>

					
					 <Grid item xs={12} sm={12} md={6}>
					
					<img src={payment} style={{width:"100%"}}/>
				</Grid> 
				</Grid>
			</footer>
		</Box>
	);
};

export default Footer;
