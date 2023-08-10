import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import { Box, Card, CardContent, Typography } from "@mui/material";
const styles = {
	bannerTitleStyle1: {
		textAlign: "center",
		margin: "4%",
		padding: "5%",
	},
	main: {
		backgroundColor: "#f2f2f2",
		marginBottom: "4%",
		
	},
	bannerCards: {
		backgroundColor: "#009090",
		height: "50vh",
		width: "100%",
		color: "white",
		margin: "2%",
		marginTop: "20%",
		borderRadius: "2px",
	},
};
const ReviewPage = () => {
	const carouselItems = [
		{ id: 1, text: "Card 1" },
		{ id: 2, text: "Card 2" },
		{ id: 3, text: "Card 3" },
		{ id: 4, text: "Card 4" },
		{ id: 5, text: "Card 5" },
		{ id: 6, text: "Card 6" },
		{ id: 7, text: "Card 7" },
	];

	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const goToNextSlide = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
	};

	const goToPrevSlide = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
	};

	const visibleItems = carouselItems.slice(currentImageIndex, currentImageIndex + 9); // Show 3 items at a time

	return (
		<Box className="carousel-container" sx={styles.main}>
			<Typography
				textAlign={"center"}
				color={"#009090"}
				fontWeight={"bold"}
				fontSize={"30px"}
				marginTop={"3%"}
				marginBottom={"3%"}
			>
				Over 1000+ Reviews from Happy Customers
			</Typography>
			<Box className="carousel">
				<Carousel itemsToShow={4} itemsToScroll={3}>
					{visibleItems.map((item) => (
						<Box key={item.id}>
							<Card sx={styles.bannerCards}>
								<CardContent>
									<Typography sx={styles.bannerTitleStyle1}>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quod culpa reprehenderit cupiditate
										distinctio.Neque quod culpa reprehenderit cupiditate distinctio.
									</Typography>
								</CardContent>
							</Card>
						</Box>
					))}
				</Carousel>
			</Box>
		</Box>
	);
};

export default ReviewPage;
