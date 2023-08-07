import React from "react";
import { Typography, Grid, Button, Card, CardContent, Box, TextField } from "@mui/material";
import { green, pink } from "@mui/material/colors";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const ProductsRateandReview = () => {
	return (
		<div>
			<Grid
				item
				xs={6}
				md={6}
				sx={{
					display: "flex",
					flexDirection: "row",

					padding: "4%",
				}}
			>
				<Card
					sx={{
						width: "100%",
						backgroundColor: "#fff",
						borderRadius: 1,
						padding: "4%",
					}}
				>
					<CardContent>
						<div
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<div>
								<Typography variant="h3" sx={{ fontWeight: 700 }}>
									Rating and review
								</Typography>
								<Typography sx={{ fontWeight: 500, color: "#000" }}>
									<span style={{ fontSize: "100px", fontWeight: "bold" }}>5</span> out of 5
								</Typography>
							</div>
							<div>
								<Stack spacing={1}>
									<Rating name="size-small" defaultValue={2} size="small" />
									<Rating name="size-medium" defaultValue={2} />
									<Rating name="size-medium" defaultValue={2} />
									<Rating name="size-medium" defaultValue={2} />
									<Rating name="size-large" defaultValue={2} size="large" />
								</Stack>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								textAlign: "left",
								marginBottom: "1rem",
								gap: 4,
							}}
						>
							<TextField></TextField>
						</div>
					</CardContent>
				</Card>
			</Grid>
		</div>
	);
};

export default ProductsRateandReview;
