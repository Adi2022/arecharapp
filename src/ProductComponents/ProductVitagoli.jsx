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
import vitagoliImage from "../assets/P1VitagoliImage.jpg";
import P2 from "../assets/P2Image.jpg";
import P3 from "../assets/P3Image.jpg";
import P4 from "../assets/P4Image.jpg";
import P5 from "../assets/P5Image.jpg";
import p1 from '../assets/trans_free_1.png';
import p2 from '../assets/soya_FRee_2.png';
import p3 from '../assets/Metal_Free_1.png';
import p4 from '../assets/DAIRY_FREE_1.png'
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ProductVitaFAQs from "./ProductVitaFAQs";
import ProductVitaUsingPersons from "./ProductVitaUsingPersons";
const productData = [{ image: P2 }, { image: P3 }, { image: P4 }, { image: P5 }];
const productData2 = [{ images: p1 }, { images: p2 }, { images: p3 }, { images: p4 }];

const ProductVitagoli = () => {
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
          <Grid container spacing={2} margin="auto" >
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
								Vitagoli Vitamin Gummies Hair, Skin and Nails
							</Typography>

							<Typography variant="h6" sx={{ fontWeight: 100 }}>
								SKU : AN-HSN-01
							</Typography>

							<Typography>
								Pack of 30 Hair Gummies | Biotin, Keratin, Seabuckthorn, Grape seed extract and Inositol
							</Typography>
							<div
								style={{
									display: "flex",
									alignItems:"center",
									gap: "10px",
									textAlign: "left",
                  marginBottom:"5%",
                 
								}}
							>
								
                <Typography style={{textTransform:"uppercase"}}>Quantity</Typography>
               
               
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
									Vitagoli's Hair Nail and Skin Gummies
								</Typography>
								<Typography>Gummies that do good and make you feel good.</Typography>
								<Typography>
									Vitagoli’s hair, skin, and nail gummies are a tasty dose of good health and happiness for all adults.
								</Typography>
								<Typography>Inclusive of all key ingredients like biotin, keratin, inositol, sea</Typography>
								<Typography>buckthorn, grape seed extract, zinc, folate, etc. which are rare to find</Typography>
								<Typography>today in any gummies out there.</Typography>
							</Box>
							<Box>
								<Typography variant="h6" fontWeight="700">
									Delivering immense benefits like:
								</Typography>
								<Typography>
									<FiberManualRecordIcon  style={{height:"20px"}}/>
									Stimulates hair growth and strengthens hair and nails.
								</Typography>
								<Typography>
										<FiberManualRecordIcon  style={{height:"20px"}}/>
									Works as a barrier between you and harmful UV rays.
								</Typography>
								<Typography>
										<FiberManualRecordIcon  style={{height:"20px"}}/>
									Healthy and sound immune system along with controlled sugar levels.
								</Typography>
								<Typography>
										<FiberManualRecordIcon  style={{height:"20px"}}/>
									Healthy and glowing skin which is acne-free.
								</Typography>
								<Typography>
										<FiberManualRecordIcon  style={{height:"20px"}}/>
									Improved fertility and maintain the body’s natural oils.
								</Typography>
								<Typography>
										<FiberManualRecordIcon  style={{height:"20px"}}/>
									Frizz-free hair and non-brittle nails.
								</Typography>
							</Box>
						</CardContent>
					</Card>
				</Grid>
				
			</Grid>

			

			
		</div>
	);
};

export default ProductVitagoli;
