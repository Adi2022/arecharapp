import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Card, CardContent, Typography } from "@mui/material";

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

	const carouselSettings = {
		autoPlay: true,
		infiniteLoop: true,
		showStatus: false,
		showThumbs: false,
		interval: 3000, // Change this value to control the slide duration
		centerMode: true,
		centerSlidePercentage: 30,
		selectedItem: 2, // Change this value to control which card is initially visible
		onClickItem: (index) => {
			// Handle the click on carousel item here (optional)
			console.log(`Clicked on card ${index + 1}`);
		},
	};

	return (
		<div style={{ backgroundColor: "#f0f0f0", marginTop: "2%",marginBottom:"2%" }}>
			<Typography textAlign={"center"} color={"#009090"} fontWeight={"bold"} fontSize={"30px"} marginTop={"3%"} marginBottom={"3%"}>
				Over 1000+ Reviews from Happy Customers
			</Typography>
			<Carousel {...carouselSettings}>
				{carouselItems.map((item) => (
					<div key={item.id} style={{ margin: "0 10px" }}>
						<Card
							sx={{
								backgroundColor: "white",
								border: "1px solid #ccc",
								borderRadius: "8px",
								boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
								height: "200px", // Adjust the height as needed
								width: "200px",
                                
							}}
						>
							<CardContent>
								<Typography variant="h6" gutterBottom>
									{item.text}
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Some text content inside the card.
								</Typography>
							</CardContent>
						</Card>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default ReviewPage;
