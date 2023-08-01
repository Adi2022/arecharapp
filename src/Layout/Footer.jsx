import React from "react";
import { Box, Container, Grid, Typography, Button, TextField } from "@mui/material";
import logo from "../assets/logo.png";
import { useNavigate, Link, useLocation } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
	const navigate = useNavigate();

	const handleButtonClick = () => {
		navigate("/enquiry");
	};

	return (
		<footer>
			<Box bgcolor="gray" color="white" py={2} px={3}>
				<Container maxWidth="lg">
					<Grid container justifyContent="space-between" alignItems="center">
						<Grid item xs={12} sm={6}>
							<Typography variant="h5">Submit Your enquiry right Now!</Typography>
							<Typography variant="body1">{/* Your enquiry text goes here */}</Typography>
						</Grid>
						<Grid item xs={12} sm={6} textAlign="right">
							<Button variant="contained" sx={{ backgroundColor: "gray", color: "white" }} onClick={handleButtonClick}>
								Submit Now
							</Button>{" "}
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Box py={2} style={{ color: "white" }}>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6} md={3} color={"gray"}>
							<Typography fontSize={"20px"}>
								Keep well with <span style={{ color: "#009090", fontWeight: "bold" }}>ArchearNutra</span>
							</Typography>
							<p style={{ fontSize: "10px" }}>Subscribe our Newsletter for Exclusive Offers</p>
							{/* Input box and button in flex layout */}
							<Box display="flex" alignItems="center">
								<TextField label="Your Email" variant="outlined" sx={{ marginRight: 1 }} />
								<Button variant="contained" sx={{ backgroundColor: "#009090", color: "white" }}>Subscribe</Button>
							</Box>

							{/* Follow us heading and social media icons */}
							<Box display="grid" alignItems="center"  mt={2}>
								<Typography variant="h6" color={"gray"} fontWeight={"bold"}>
									Follow us:
								</Typography>
								<Box ml={2} display="flex" alignItems="center">
									<FacebookOutlinedIcon style={{ width: 24, height: 24, marginRight: 2, color: "#3b5998" }} />
									<TwitterIcon style={{ width: 24, height: 24, marginRight: 2, color: "#1da1f2" }} />
									<LinkedInIcon style={{ width: 24, height: 24, color: "#0077b5" }} />
									<InstagramIcon style={{ width: 24, height: 24, color: "#e4405f" }} />
								</Box>
							</Box>
						</Grid>
                        <Grid item xs={12} sm={6} md={2}>
							<Typography variant="h5" fontWeight={"bold"} color={"gray"}>
								UsefulLinks
							</Typography>
							<br />
							<Typography
								variant="body2"
								component={Link}
								to="/about"
								color={"gray"}
								style={{ textDecoration: "none" }}
							>
								About us
							</Typography>
							<br /> <br />
							<Typography variant="body2" color={"gray"}>
								Blogs
							</Typography>
							<br />
							<Typography variant="body2" color={"gray"}>
								Careers
							</Typography>{" "}
							<br />
							<Typography variant="body2" color={"gray"}>
								Partner
							</Typography>
							<br />
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<Typography variant="h5" color={"gray"} fontWeight={"bold"}>
								Social Links
							</Typography>
							<Typography variant="body2" color={"gray"}>
								<br />
								Facebook
							</Typography>
							<Typography variant="body2" color={"gray"}>
								<br />
								Instagram
							</Typography>
							<Typography variant="body2" color={"gray"}>
								<br />
								Twitter
							</Typography>
							<Typography variant="body2" color={"gray"}>
								<br />
								Linkedin
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<Typography variant="h5" color={"gray"} fontWeight={"bold"}>
								Policies
							</Typography>
							<br />
							<Typography variant="body2" color={"gray"}>
								Return Policy
							</Typography>
							<br />
							<Typography variant="body2" color={"gray"}>
								Privacy Policy
							</Typography>
							<br />
							<Typography variant="body2" color={"gray"}>
								Terms & Conditions
							</Typography>
						</Grid>
						<Grid item xs={12} sm={6} md={2}>
							<img src={logo} style={{ width: "30%" }} alt="Logo" />
						</Grid>
						
						
					</Grid>
				</Container>
			</Box>
		</footer>
	);
};

export default Footer;
