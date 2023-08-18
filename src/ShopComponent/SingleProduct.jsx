import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, CardMedia, CardContent, Typography, Card, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import Fade from "@mui/material/Fade";

const styles = {
	main: {
		marginTop: {
			md: "10%",
			xs: "30%",
		},
		
	},
};

const SingleProduct = () => {
	const params = useParams();
	const [singleBlog, setSingleBlog] = useState(null); // Initialize with null
	const checked = true;

	const getSingleProduct = async () => {
		try {
			const response = await axios.get(`http://localhost:3000/shop/${params.id}`);
			console.log(response.data);
			setSingleBlog(response.data);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};
	useEffect(() => {
		getSingleProduct();
	}, []);

	if (!singleBlog) {
		return <div>Loading...</div>;
	}
	const photosArray = singleBlog.product1.singleProduct1.photos;
	const qualityPhotos = singleBlog.product1.singleProduct1.productQualityPhotos;
	const categoryPhotos = singleBlog.product1.singleProduct1.fact.categoryImages;

	const contentList = singleBlog.product1.singleProduct1.fact.content2.map((item, index) => (
		<li key={index}>{item}</li>
	));

	return (
		<>
			<Grid container spacing={2} p={4} sx={styles.main}>
				{/* Left Grid */}
				<Grid item xs={12} md={6}>
					<div style={{ position: "relative" }}>
						<img
							src={singleBlog.product1.singleProduct1.productBannerPhoto}
							alt="vitagoliImage"
							style={{
								width: "100%",
								height: "30rem",
							}}
						/>
					</div>
					<div style={{ display: "flex", gap: "16px" }}>
						{photosArray.map((photo, index) => (
							<img key={index} src={photo} style={{ width: "100%", height: "120px" }} alt={`Product Photo ${index}`} />
						))}
					</div>

					<div style={{ display: "flex", gap: "16px", marginTop: "20px" }}>
						{qualityPhotos.map((photo, index) => (
							<img key={index} src={photo} style={{ width: "100%", height: "50px" }} alt={`Product Photo ${index}`} />
						))}
					</div>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Card
						sx={{
							width: "100%",
							backgroundColor: "#fff",
							borderRadius: 1,
						}}
					>
						<CardContent>
							<Typography variant="h6" sx={{ fontWeight: 700 }}>
								{singleBlog.product1.singleProduct1.heading}
							</Typography>

							<Typography variant="h6" sx={{ fontWeight: 100 }}>
								{singleBlog.product1.singleProduct1.title1}:{singleBlog.product1.singleProduct1.title2}
							</Typography>
							<Typography>{singleBlog.product1.singleProduct1.description}:</Typography>

							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "10px",
									textAlign: "left",
									marginBottom: "5%",
								}}
							>
								<Typography style={{ textTransform: "uppercase" }}>Quantity</Typography>

								<Typography variant="h5">Rs{singleBlog.product1.singleProduct1.price}</Typography>
							</div>
							<div
								style={{
									display: "flex",
									marginBottom: "1rem",
									textAlign: "left",
									gap: "10%",
								}}
							>
								<Button
									sx={{
										bgcolor: "#009090",

										color: "white",
										"&:hover": {
											bgcolor: "lightGreen",
											color: "black",
										},
										width: "50%",
										fontWeight: "bold",
										padding: "3%",
									}}
								>
									ADD TO CART
								</Button>
								<Button
									sx={{
										bgcolor: "#009090",

										color: "white",
										"&:hover": {
											bgcolor: "lightGreen",
											color: "black",
										},
										width: "50%",
										fontWeight: "bold",
										padding: "3%",
									}}
								>
									BUY KNOW
								</Button>
							</div>
							<Typography>Share the product information to a friend.</Typography>
							<Box>
								<Typography variant="h4" fontWeight="700">
									{singleBlog.product1.singleProduct1.fact.heading1}
								</Typography>
								<Typography variant="h6" fontWeight="700">
									{singleBlog.product1.singleProduct1.fact.subHeading1}
								</Typography>
								<Typography>{singleBlog.product1.singleProduct1.fact.content1}</Typography>
								<Box>
									<Typography variant="h6" fontWeight="700">
										{singleBlog.product1.singleProduct1.fact.subHeading2}{" "}
									</Typography>
									<Typography>
										<ul>{contentList}</ul>
									</Typography>
								</Box>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
			<Grid container spacing={2} justifyContent="center">
				<Grid item xs={12} sm={12} md={12} lg={12}>
					{categoryPhotos.slice(0, 1).map((photo, index) => (
						<img key={index} src={photo} style={{ width: "100%", height: "80%" }} alt={`Product Photo ${index}`} />
					))}
				</Grid>
				
			</Grid>
   
			<Grid
      container
     
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "",
        backgroundSize: "cover",
        color: "white",
        opacity: "1",
        backgroundColor: "#009090",
		height:"20rem",
		marginTop:{
			md:"-50%",
			xs:"-40%"
		}
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row", 
          alignItems: "center" 
        }}
      >
        <Fade in={checked === true} timeout={1000}>
          <Typography fontSize="12rem" fontWeight='700' >{singleBlog.product1.singleProduct1.fact.benefits.heading.main
		  }</Typography>
        </Fade>
       <div style={{display:"grid"}}>
       <Fade in={checked === true} timeout={1000}>
          <Typography  fontSize="6rem">{singleBlog.product1.singleProduct1.fact.benefits.heading.subheading1
		  }</Typography>
        </Fade>
        <Fade in={checked === true} timeout={1000}>
          <Typography  fontSize="6rem">{singleBlog.product1.singleProduct1.fact.benefits.heading.subheading2
		  }</Typography>
        </Fade>
       </div>
      </Box>
    </Grid>
		
		
		</>
	);
};

export default SingleProduct;
