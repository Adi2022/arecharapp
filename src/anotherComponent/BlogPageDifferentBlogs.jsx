import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, CardMedia, CardContent, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import ModalComponent from "../Modal/ModalComponent";

const styles = {
	bannerTitleStyle1: {
		fontWeight: "bold",
		textAlign: "left",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "20px",
		color: "#000",
		marginBottom: "20px",
		lineHeight: "1.2",
		letterSpacing: "-.02rem",

		// Add responsive styles
		"@media (max-width: 600px)": {
			fontSize: "30px",
			letterSpacing: "0px",
			fontWeight: "bold",
			fontFamily: "'Montserrat', sans-serif",
		},
	},
	bannerTitleStyle2: {
		fontWeight: 200,
		textAlign: "left",
		fontFamily: "'Montserrat', sans-serif",
		fontStyle: "normal",
		fontSize: "15px",
		color: "#000",
		marginBottom: "20px",
	},
	truncatedContent: {
		overflow: "hidden",
		display: "-webkit-box",
		WebkitBoxOrient: "vertical",
		WebkitLineClamp: 2, // Adjust this to control the number of visible lines
	},
};
const BlogPageDifferentBlogs = () => {
	const navigate = useNavigate();
	const [blogsData, setBlogsData] = useState([]);
	const [selectedBlogId, setSelectedBlogId] = useState(null);
	const fetchBlogs = async () => {
		try {
			const response = await axios.get("http://localhost:3000/blog");
			console.log(response);
			setBlogsData(response.data.blogs);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	const handleBlogs = (id) => {
		navigate(`/blog/singleblog/${id}`);
	};

	useEffect(() => {
		fetchBlogs();
	}, []);
	return (
		<Grid container spacing={2} marginBottom="6%" marginTop="4%" padding="4%">
			{blogsData.map((blog, index) => (
				<Grid item xs={12} sm={6} md={4} key={index} onClick={() => handleBlogs(blog._id)}>
					{/* <Card style={{border:"none",}}> */}
					<CardMedia component="img" height="200" image={blog.photos} />
					<Typography sx={styles.bannerTitleStyle2}>{blog.date}</Typography>

					<CardContent>
						<Typography sx={styles.bannerTitleStyle1}>{blog.title}</Typography>

						<Typography sx={{ ...styles.bannerTitleStyle2, ...styles.truncatedContent }}>
							{blog.content.content1}
						</Typography>{" "}
					</CardContent>
					{/* </Card> */}
				</Grid>
			))}
			<ModalComponent/>
		</Grid>
	);
};

export default BlogPageDifferentBlogs;
