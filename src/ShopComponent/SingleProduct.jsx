import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Grid, CardMedia, CardContent, Typography, Card, TextField, Button, Box } from "@mui/material";
import axios from "axios";
import Fade from "@mui/material/Fade";
import Carousel from "react-elastic-carousel";
import { motion } from "framer-motion";
import ShopProducts from "./ShopProducts";
import { useCartContext } from "../CartContext";
const styles = {
	main: {
		marginTop: {
			md: "10%",
			xs: "30%",
		},
	},
};

const SingleProduct = () => {
	const { addToCart } = useCartContext(); // Get the addToCart function from the context

	const params = useParams();
	const [singleBlog, setSingleBlog] = useState(null); // Initialize with null
	const checked = true;
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
	const imagesTypes = singleBlog.product1.singleProduct1.fact.ingredientsData.ingredientImages;

	const qualityPhotos = singleBlog.product1.singleProduct1.productQualityPhotos;
	const categoryPhotos = singleBlog.product1.singleProduct1.fact.categoryImages;

	const contentList = singleBlog.product1.singleProduct1.fact.content2.map((item, index) => (
		<li key={index}>{item}</li>
	));
	const visibleImages = imagesTypes.slice(currentImageIndex, currentImageIndex + 9); // Show 6 images at a time

	const carouselBreakpoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 4 },
	];
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
										width: "100%",
										fontWeight: "bold",
										
									}}
									onClick={() => addToCart(singleBlog.product1.singleProduct1)} // Add the product to cart

								>
									ADD TO CART
								</Button>
								
								<NavLink to="/shop">
								<Button
									sx={{
										bgcolor: "#009090",

										color: "white",
										"&:hover": {
											bgcolor: "lightGreen",
											color: "black",
										},
										width: "100%",
										fontWeight: "bold",
										
									}}
								>
									BUY KNOW
								</Button>
								</NavLink>
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
					height: "20rem",
					marginTop: {
						md: "-50%",
						xs: "-40%",
					},
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						alignItems: "center",
					}}
				>
					<Fade in={checked === true} timeout={1000}>
						<Typography fontSize="12rem" fontWeight="700">
							{singleBlog.product1.singleProduct1.fact.benefits.heading.main}
						</Typography>
					</Fade>
					<div style={{ display: "grid" }}>
						<Fade in={checked === true} timeout={1000}>
							<Typography fontSize="6rem">
								{singleBlog.product1.singleProduct1.fact.benefits.heading.subheading1}
							</Typography>
						</Fade>
						<Fade in={checked === true} timeout={1000}>
							<Typography fontSize="6rem">
								{singleBlog.product1.singleProduct1.fact.benefits.heading.subheading2}
							</Typography>
						</Fade>
					</div>
				</Box>
			</Grid>

			<Box sx={{ textAlign: "center", width: "100%" }}>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1} color="#58595B" fontSize="40px">
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading1}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content1}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading2}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content2}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading3}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content3}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading4}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content4}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading5}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content5}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading6}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content6}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading7}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content7}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading8}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content8}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="40px" variant="h3" sx={styles.bannerTitleStyle1}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.heading9}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography color="#58595B" fontSize="18px" variant="h3" sx={styles.bannerTitleStyle2}>
						{singleBlog.product1.singleProduct1.fact.benefits.content.content9}
					</Typography>
				</Fade>
			</Box>

			<Box sx={{ textAlign: "center", width: "100%", backgroundColor: "#fff", backgroundColor: "#EFEFEF" }}>
				<Fade in={checked === true} timeout={1000}>
					<Typography
						sx={{
							color: "#009090",
							fontWeight: "light",
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontSize: "16px",
						}}
					>
						<span style={{ fontSize: "211px", fontWeight: 700 }}>
							{singleBlog.product1.singleProduct1.fact.headingNature.main}
						</span>{" "}
						<span style={{ fontSize: "111px", fontWeight: 400 }}>
							{singleBlog.product1.singleProduct1.fact.headingNature.sub1}
						</span>
					</Typography>
				</Fade>
			</Box>

			<Box sx={{ textAlign: "center", width: "100%" }}>
				<Fade in={checked === true} timeout={1000}>
					<Typography
						sx={{
							fontWeight: 400,
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontStyle: "normal",
							fontSize: "50px",
							color: "#009090",
							marginBottom: "20px",
						}}
					>
						{singleBlog.product1.singleProduct1.fact.headingNature.sub2}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography
						sx={{
							fontWeight: "light",
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontSize: "16px",
						}}
					>
						{singleBlog.product1.singleProduct1.fact.headingNature.content2}
					</Typography>
				</Fade>

				<img
					src={singleBlog.product1.singleProduct1.fact.headingNature.photos}
					style={{ maxWidth: "20%", borderRadius: "50px", marginTop: "2%", marginBottom: "2%" }}
				/>

				<Fade in={checked === true} timeout={1000}>
					<Typography
						sx={{
							fontWeight: "light",
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontSize: "36px",
						}}
					>
						{singleBlog.product1.singleProduct1.fact.headingNature.fruitname}
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography
						sx={{
							fontWeight: "light",
							textAlign: "center",
							fontFamily: "'Montserrat', sans-serif",
							fontSize: "16px",
							marginBottom: "3%",
						}}
					>
						{singleBlog.product1.singleProduct1.fact.headingNature.fruitContent}
					</Typography>
				</Fade>
			</Box>
			<Fade in={checked === true} timeout={1000}>
				<Typography
					sx={{
						fontWeight: 400,
						textAlign: "center",
						fontFamily: "'Montserrat', sans-serif",
						fontSize: "50px",
						marginBottom: "3%",
						color: "#009090",
					}}
				>
					{singleBlog.product1.singleProduct1.fact.ingredientsData.title}
				</Typography>
			</Fade>
			<div className="carousel-container">
				{" "}
				{/* Change the class name here */}
				<div className="carousel">
					<Carousel itemsToShow={3} itemsToScroll={3}>
						{visibleImages.map((image, index) => (
							<div key={index} className="carousel-image-container">
								{" "}
								{/* Wrap each image in a div */}
								<img src={image} alt={`Slide ${currentImageIndex + 1}`} style={{ margin: "10px" }} />
							</div>
						))}
					</Carousel>
				</div>
			</div>
			<Typography textAlign="center" fontSize="22px" fontWeight="600" marginBottom="40px">
				Similar Products
			</Typography>
			<ShopProducts />
		</>
	);
};

export default SingleProduct;
