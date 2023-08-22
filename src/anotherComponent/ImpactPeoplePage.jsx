import { useNavigate } from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from 'axios'
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";
const styles = {
	main: {
		backgroundColor: "#fff",
		paddingLeft: "6%",
		paddingRight: "6%",

		paddingBottom: "4.6%",
	},

	bannerTitleStyle1: {
		color: "#009090",
		fontWeight: "bold",
		textAlign: "center",
		fontSize: "60px",
		fontFamily: "'Montserrat', sans-serif",
        letterSpacing:"6px",
        marginBottom:"5%"
	},
	bannerTitleStyle2: {
		color: "black",
		fontWeight: "400",
		textAlign: "center",
		fontFamily: "'Arizonia', cursive",
		fontSize: "100px",
		
       
        
	},
    bannerTitleStyle3: {
		color: "#000",
		fontWeight: 300,
		textAlign: "center",
		fontSize: "16px",
		fontFamily: "'Montserrat', sans-serif",
		lineHeight:"1.65"
		
	},
};
const ImpactPeoplePage = () => {
	const checked = true;
	const [impact2Data, setImpact2Data] = useState([]);
	const fetchImpact2 = async () => {
		try {
			const response = await axios.get("http://localhost:3000/impact2");
			console.log(response);
			setImpact2Data(response.data.impact2);
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchImpact2();
	}, []);
	return (
		<Grid
			container
			style={styles.main}
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "",
				backgroundSize: "cover",
				color: "white",
				opacity: "1",
			}}
		>
			<Box sx={{ textAlign: "center", width: "100%" }}>
				{impact2Data.map((items)=>{
					return (
						<>
						 <Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle2}>
						{items.head5.heading1}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle1}>
					{items.head5.heading2}
					</Typography>
				</Fade>

				<Fade in={checked === true} timeout={1000}>
					<Typography variant="h3" sx={styles.bannerTitleStyle3}>
					{items.head5.content2}
					</Typography>
				</Fade>
				<Fade in={checked === true} timeout={1000}>
				<img src={items.head5.photos2} alt="Blog Banner" style={{ width: "100%" }} />
			</Fade>
						</>
					)
				})}


                
			</Box>
           
		</Grid>
	);
};

export default ImpactPeoplePage;
