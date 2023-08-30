import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, CardMedia, CardContent, Typography, Card, TextField, Button } from "@mui/material";

const styles = {
	flexContainer: {
		display: "flex",
	},
	bannerTitleStyle1: {
		fontWeight: 400,
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "36px",
		color: "#000",
		marginBottom: "30px",
		lineHeight: "40px",
		textTransform: "uppercase",

		marginTop: {
			md: "2%",
			xs: "10%",
		},
		// Add responsive styles
	},
	bannerTitleStyle2: {
		fontWeight: 200,
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "15px",
		color: "#000",
		marginTop: {
			md: "5%",
			xs: "15%",
		},
	},
	bannerTitleStyle3: {
		fontWeight: 200,
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "15px",
		color: "#000",
	},
	bannerTitleStyle4: {
		fontWeight: 700,
		fontFamily: "'Montserrat', sans-serif",
		fontSize: {
			md: "20px",
			xs: "20px",
		},
		color: "#000",
	},
	formButton:{
		backgroundColor:"#72B280",
		color:"#fff",
		fontWeight:"bold",
		textAlign:"center",
		width:"50%",
		fontSize:"20px"
	}
};

const SingleBlogData = () => {
	const params = useParams();
	const [singleBlog, setSingleBlog] = useState(null); // Initialize with null

	const getSingleBlog = async () => {
		try {
			const res = await fetch(`https://myapp-8q5z.onrender.com/blog/${params.id}`);
			const data = await res.json();
			console.log(data);
			setSingleBlog(data);
		} catch (error) {
			console.error("Error fetching single blog:", error);
		}
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		// Handle form submission logic here
	};

	useEffect(() => {
		getSingleBlog();
	}, []);

	if (!singleBlog) {
		return <div>Loading...</div>;
	}

	return (
		<Grid container spacing={2} marginBottom="26%" marginTop="10%" padding="4%">
			<Grid item xs={12} sm={6} md={12}>
				<CardContent>
					<Typography sx={styles.bannerTitleStyle1}>{singleBlog.title}</Typography>
					<Typography sx={styles.bannerTitleStyle3}>
						By {singleBlog.companyName}/<span>{singleBlog.date}</span>
					</Typography>
				</CardContent>
				<CardMedia sx={styles.fullWidthImage} component="img" image={singleBlog.photos[0]} />
			</Grid>
			<Grid item xs={12} sm={12} md={12}>
				<CardContent>
					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.content.content1}</Typography>
				</CardContent>
			</Grid>

			<Grid item xs={12} sm={12} md={12}>
				<CardContent>
					<Typography sx={styles.bannerTitleStyle1}>{singleBlog.about.aboutHeading}</Typography>

					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.about.aboutContent}</Typography>
				</CardContent>
			</Grid>

			<Grid item xs={12} sm={12} md={12}>
				<CardContent>
					<Typography sx={styles.bannerTitleStyle1}>{singleBlog.faqs.faqsHeading}</Typography>

					<Typography sx={styles.bannerTitleStyle4}>{singleBlog.faqs.faqsContent.heading1}</Typography>
					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.faqs.faqsContent.content1}</Typography>
					<br />
					<Typography sx={styles.bannerTitleStyle4}>{singleBlog.faqs.faqsContent.heading2}</Typography>
					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.faqs.faqsContent.content2}</Typography>
					<br />
					<Typography sx={styles.bannerTitleStyle4}>{singleBlog.faqs.faqsContent.heading3}</Typography>
					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.faqs.faqsContent.content3}</Typography>
					<br />
					<Typography sx={styles.bannerTitleStyle4}>{singleBlog.faqs.faqsContent.heading4}</Typography>
					<Typography sx={styles.bannerTitleStyle3}>{singleBlog.faqs.faqsContent.content4}</Typography>
				</CardContent>
			</Grid>
			{/* form */}
			<Grid item xs={12} sm={12} md={12}>
				<CardContent>
					<form onSubmit={handleFormSubmit}>
						<Typography sx={styles.bannerTitleStyle1}>LEAVE A REPLY</Typography>
						<TextField label="Message" variant="outlined" fullWidth multiline rows={6} margin="normal" />
						<Grid style={styles.flexContainer}>
							<TextField label="Name" variant="outlined" margin="normal" style={{ flex: 1, marginRight: "10px" }} />
							<TextField label="Email"  margin="normal" style={{ flex: 1 }} />
						</Grid>
						<Button type="submit"  sx={styles.formButton}>
							Send
						</Button>
					</form>
				</CardContent>
			</Grid>
		</Grid>
	);
};

export default SingleBlogData;
