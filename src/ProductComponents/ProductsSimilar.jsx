import React from "react";
import { Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "react-elastic-carousel"; // Import react-elastic-carousel
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";

const blogsData = [
  { image: product1, text: "Vitagoli Vitamin Gummies Hair, Skin and Nails" },
  { image: product2, text: "Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA" },
];
const styles = {
  bannerTitleStyle3: {
    color: "#000",
    fontWeight: 300,
    textAlign: "left",
    fontSize: "1rem",
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: "150%",
    left: "1rem",
    right: "1rem",
  },
  bannerTitleStyle2: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "right",
    fontSize: "24px",
    fontFamily: "'Montserrat', sans-serif",
    lineHeight: "31px",
  },
};

const ProductsSimilar = () => {
  const carouselBreakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
  ];

  return (
   <>
   <Typography textAlign="center" fontSize="22px" fontWeight="600" marginBottom="40px">Similar Products
</Typography>
    <Carousel breakPoints={carouselBreakpoints}>
      {blogsData.map((blog, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card sx={{ maxWidth: 400, width: "100%", margin: "auto" }}>
            <div
              style={{
                backgroundImage: "linear-gradient(to bottom, #f2f2f2, #e1e1e1)",
                display: "flex",
                flexDirection: "column",
                opacity: 4,
              }}
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={blog.image}
                  alt={blog.text}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </motion.div>
            </div>
          </Card>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box padding="16px">
                <Typography variant="h3" sx={styles.bannerTitleStyle3}>
                  {blog.text}
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box padding="16px">
                <Typography sx={styles.bannerTitleStyle2}>INR 799</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Carousel>
   </>
  );
};

export default ProductsSimilar;
