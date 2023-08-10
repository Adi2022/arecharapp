import { Typography, Grid, Button, Card, CardContent, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ShareIcon from "@mui/icons-material/Share";
import { pink, green, lightGreen } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import { Dialog, DialogContent } from "@mui/material";
import vitagoliImage from "../assets/banner2.png";
import P2 from "../assets/banner2.png";
import P3 from "../assets/pre2.jpg";
import P4 from "../assets/pre3.jpg";
import P5 from "../assets/pre4.jpg";
import p1 from "../assets/trans_free_1.png";
import p2 from "../assets/soya_FRee_2.png";
import p3 from "../assets/Metal_Free_1.png";
import p4 from "../assets/DAIRY_FREE_1.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ProductVitaFAQs from "./ProductVitaFAQs";
import ProductVitaUsingPersons from "./ProductVitaUsingPersons";
const productData = [{ image: P2 }, { image: P3 }, { image: P4 }, { image: P5 }];
const productData2 = [{ images: p1 }, { images: p2 }, { images: p3 }, { images: p4 }];

const VitagoliPreBanner = () => {
	const [openModal, setOpenModal] = useState(false);

	const params = useParams();

	const getSinglePhotographer = async () => {
		const res = await fetch(`http://35.154.144.61:3000/photographerDetail/${params.id}`);
		const data = await res.json();
		setMyPhoto(data.photographers[0]);
		setServicesOffered(data.servicesOffered); // Update the services offered

		console.log(data);
	};

	const getServices = async () => {
		const res = await fetch("http://35.154.144.61:3000/vendors");
		const data = await res.json();
		setServices(data);
	};

	const loadMorePhotos = () => {};
	useEffect(() => {
		getSinglePhotographer();
		getServices();
	}, []);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div>
			<Grid container spacing={2} p={4} style={{ height: "100%", marginTop: "10%" }}>
				{/* Left Grid */}
				<Grid item xs={12} md={6}>
					<div style={{ position: "relative" }}>
						<img
							src={vitagoliImage}
							alt="vitagoliImage"
							style={{
								width: "100%",
								height: "30rem",
							}}
						/>
					</div>
					<Grid container spacing={2}>
						{productData.map((photos, index) => (
							<Grid item xs={3} md={3} key={index}>
								<img
									src={photos.image}
									style={{
										width: "100%",
										height: "150px",
									}}
								/>
							</Grid>
						))}
					</Grid>
					<Grid container spacing={2} margin="auto">
						{productData2.map((photos, index) => (
							<Grid item xs={3} md={3} key={index}>
								<img
									src={photos.images}
									style={{
										height: "50px",
									}}
								/>
							</Grid>
						))}
					</Grid>
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
								Vitagoli Pre and Probiotics
							</Typography>
							<Typography variant="h6" sx={{ fontWeight: 700 }}>
								Vitamin Gummies with Algal
							</Typography>
							<Typography variant="h6" sx={{ fontWeight: 700 }}>
								DHA
							</Typography>

							<Typography variant="h6" sx={{ fontWeight: 100 }}>
								SKU : AN-PNP-01
							</Typography>

							<Typography>Pack of 30 Gummies | Algal, DHA and Amino Acids</Typography>
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

								<Typography variant="h4">Rs.799</Typography>
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
									Nutrition Facts
								</Typography>
								<Typography variant="h6" fontWeight="700">
									Vitagoli pre and pro-biotics + algal DHA gummies
								</Typography>
								<Typography>Chewable gummies, a tasty dose of supplement for women of all ages.</Typography>
								<Typography>
									Containing rich ingredients like apple cider vinegar and bacillus coagulans which are natural
									probiotics, and chicory extract which is
								</Typography>
								<Typography>a natural prebiotic. Also, these tiny gummies are inclusive of all the</Typography>
								<Typography>ingredients like cranberry extract, omega 3 (EPA, DHA), magnesium,</Typography>
								<Typography>and zinc.</Typography>
							</Box>
							<Box>
								<Typography variant="h6" fontWeight="700">
									It shows effective and visible results for:
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Improved vaginal health by maintaining a healthy pH down there.
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Improved gut health by the production of lactic acid.
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Body detoxification
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Maintaining a healthy weight
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Preventing depression and anxiety
								</Typography>
								<Typography>
									<FiberManualRecordIcon style={{ height: "10px" }} />
									Better cognitive function.
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};

export default VitagoliPreBanner;
