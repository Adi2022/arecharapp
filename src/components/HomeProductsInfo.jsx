import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography, Box } from "@mui/material";
import Buttons from "../common/Buttons";
import axios from "axios";



const HomeProductsInfo = () => {
	const [blogsData, setBlogsData] = useState([]);

	const checked = true;
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("https://mernappback12.onrender.com/home");
			console.log(response);
			setBlogsData(response.data.impact1); // Update this line
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	return (
		<div>
			<Grid container spacing={2} p={4}>
				{/* Left Grid */}

				<Grid item xs={12} sm={6}>
					<></>
					{blogsData.map((item) => {
						return (
							<>
								<Paper
									style={{
										backgroundColor: "#009090",
										padding: "20px",
										border: "1px solid black",
										borderRadius: "50px",
									}}
								>
									<Grid container spacing={2} alignItems="center">
										{/* Left half for the image */}
										<Grid item xs={12} sm={6}>
											<img src={item.product1.photos1} alt="Banner 1" width="100%" />
										</Grid>
										{/* Right half for the text */}
										<Grid item xs={12} sm={6}>
											<Typography style={{ color: "#fff" }}>{item.product1.product1Data.data1}</Typography>
											<Typography style={{ color: "#fff" }}>{item.product1.product1Data.data2}</Typography>
											<Typography style={{ color: "#fff" }}>{item.product1.product1Data.data3}</Typography>
										</Grid>
									</Grid>
								</Paper>
								<Buttons title="Shop Now" />
								<div style={{ padding: "40px", textAlign: "left" }}>
									<Typography style={{ fontSize: "14px" }}>{item.product1.content1.title1}</Typography>
									<Box>
										<Typography fontSize="14px">
											{" "}
											<strong>{item.product1.content1.description1.heading1}</strong>:
											{item.product1.content1.description1.paragraph1}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{item.product1.content1.description1.heading2}</strong>:
											{item.product1.content1.description1.paragraph2}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{item.product1.content1.description1.heading3}</strong>:
											{item.product1.content1.description1.paragraph3}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{item.product1.content1.description1.heading4}</strong>:
											{item.product1.content1.description1.paragraph4}
										</Typography>
									</Box>
								</div>
							</>
						);
					})}
				</Grid>

				{/* Right Grid */}
				<Grid item xs={12} sm={6}>
					<></>
					{blogsData.map((items) => {
						return (
							<>
								<Paper
									style={{
										backgroundColor: "#009090",
										padding: "20px",
										border: "1px solid black",
										borderRadius: "50px",
									}}
								>
									<Grid container spacing={2} alignItems="center">
										{/* Left half for the image */}
										<Grid item xs={12} sm={6}>
											<img src={items.product2.photos2} alt="Banner 1" width="100%" />
										</Grid>
										{/* Right half for the text */}
										<Grid item xs={12} sm={6}>
											<Typography style={{ color: "#fff" }}>{items.product2.product2Data.data5}</Typography>
											<Typography style={{ color: "#fff" }}>{items.product2.product2Data.data6}</Typography>
											<Typography style={{ color: "#fff" }}>{items.product2.product2Data.data7}</Typography>
										</Grid>
									</Grid>
								</Paper>
								<Buttons title="Shop Now" />
								<div style={{ padding: "40px", textAlign: "left" }}>
									<Typography style={{ fontSize: "14px" }}>{items.product2.content2.title2}</Typography>
									<Box>
										<Typography fontSize="14px">
											{" "}
											<strong>{items.product2.content2.description2.heading5}</strong>:
											{items.product2.content2.description2.paragraph5}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{items.product2.content2.description2.heading6}</strong>:
											{items.product2.content2.description2.paragraph6}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{items.product2.content2.description2.heading7}</strong>:
											{items.product2.content2.description2.paragraph7}
										</Typography>
										<Typography fontSize="14px">
											{" "}
											<strong>{items.product2.content2.description2.heading8}</strong>:
											{items.product2.content2.description2.paragraph8}
										</Typography>
									</Box>
								</div>
							</>
						);
					})}
				</Grid>
				{blogsData.map((items) => {
					return (
						<>
							<Box style={{ backgroundColor: "#009090", minHeight: "30vh",paddingBottom:"5%", alignItems: "center", width: "100%" }}>
								<Typography variant="h2" fontWeight={"bold"} color="white" align="center" marginTop={"40px"}>
									{items.productVitagoli.headings}
								</Typography>
								<Typography margin="1rem" color="white" align="center" fontWeight={"normal"}>
									{items.productVitagoli.content11}
								</Typography>
								<Typography margin="1rem" color="white" align="center" fontWeight={"normal"}>
									{items.productVitagoli.content12}
								</Typography>
							</Box>

            
						</>
					);
				})}
			</Grid>
		</div>
	);
};

export default HomeProductsInfo;
