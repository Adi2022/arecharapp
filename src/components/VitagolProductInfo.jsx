import React from "react";
import { Container, Typography } from "@mui/material";

const VitagolProductInfo = () => {
	return (
		<Container style={{ backgroundColor: "#009090", minHeight: "40vh", alignItems: "center" }}>
			<Typography variant="h2" fontWeight={"bold"} color="white" align="center" marginTop={"40px"}>
				Why Vitagol ?
			</Typography>
			<Typography margin="1rem" padding="4rem" color="white" align="center" fontWeight={"bold"}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eaque doloremque perferendis repellat
				natus debitis Nobis tempore accus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eaque
				doloremque perferendis repellat natus debitis Nobis tempore accus. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Quisquam quos eaque doloremque perferendis repellat natus debitis Nobis tempore accus. Lorem
				ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eaque doloremque perferendis repellat natus
				debitis Nobis tempore accus.
				<br />
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eaque doloremque perferendis repellat
				natus debitis Nobis tempore accus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos eaque
				doloremque perferendis repellat natus debitis Nobis tempore accus.
			</Typography>
		</Container>
	);
};

export default VitagolProductInfo;
