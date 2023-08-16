import React from "react";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	Hidden,
	Menu,
	MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Buttons from "../common/Buttons";
import { styled } from "@mui/material/styles";
import mobile from "../assets/Mobile-01.jpg";
const pages = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/products",
		title: "Products",
	},
	{
		path: "/ingredient",
		title: "Ingredient",
	},
	{
		path: "/shop",
		title: "Shop",
	},
	{
		path: "/about",
		title: "About",
	},
	{
		path: "/blog",
		title: "Blog",
	},
	{
		path: "/impact",
		title: "Impact",
	},
];

const styles = {
	main: {
		padding: "7px 5px 7px 20px",
		borderBottom: "1px solid #adadad",
		display: "block",
		fontSize: "13px",
		color: "#58595B",
		textTransform: "uppercase",
		fontFamily: "Montserrat, sans-serif",
	},
};

const Header = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [selectedPage, setSelectedPage] = React.useState(pages[0].path);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [productsMenuOpen, setProductsMenuOpen] = React.useState(false);

	const toggleDrawer = () => {
		setDrawerOpen(!drawerOpen);
	};

	const closeDrawer = () => {
		setDrawerOpen(false);
	};

	const handlePageClick = (path) => {
		setSelectedPage(path);
		closeDrawer();
	};

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};
	const handleProductsMenuOpen = () => {
		setProductsMenuOpen(true);
	};

	const handleProductsMenuClose = () => {
		setProductsMenuOpen(false);
	};
	return (
		<AppBar
			position="fixed"
			top="0"
			left="0"
			width="100%"
			zIndex="99"
			color="default"
			sx={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold" }}
		>
			<Typography textAlign={"center"} style={{ backgroundColor: "#009090", color: "#fff", fontSize: "12px" }}>
				Get Flat 20% Off Use Promocode: VITAGOLI20
			</Typography>
			<Toolbar>
				<Hidden mdUp>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
				</Hidden>

				<Hidden mdDown>
					<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
						{/* Left Section */}
						<Box sx={{ display: "flex", alignItems: "center" }}>
							{pages.map((page) => (
								<ListItem key={page.title}>
									{page.title === "Products" ? (
										<React.Fragment>
											<Button
												color="inherit"
												sx={{
													mx: 1,
													textDecoration: selectedPage === page.path ? "underline" : "none",
													fontWeight: selectedPage === page.path ? "bold" : "normal",
												}}
												onMouseEnter={(event) => handleProductsMenuOpen(event, page.path)}
												onMouseLeave={handleProductsMenuClose}
											>
												<Typography
													variant="subtitle1"
													sx={{
														color: selectedPage === page.path ? "#009090" : "inherit",
														fontWeight: selectedPage === page.path ? "bold" : "normal",
													}}
												>
													{page.title}
												</Typography>
											</Button>
											<Menu
									anchorEl={anchorEl}
									open={productsMenuOpen}
									onClose={handleProductsMenuClose}
									onMouseEnter={handleProductsMenuOpen} // Keep the menu open when hovering over it
									onMouseLeave={handleProductsMenuClose} // Close the menu when not hovering
									anchorOrigin={{
									
									  }}
									  transformOrigin={{
										
									  }}
									style={{cursor:"pointer"}}
								>
									<MenuItem
										sx={styles.main}
										component={NavLink}
										to="/productVitagoli"
										onClick={handleProductsMenuClose}
									>
										<Typography fontSize="12px" >Vitagoli Vitamin Gummies Hair, Skin and Nails</Typography>
									</MenuItem>
									<MenuItem
										sx={styles.main}
										component={NavLink}
										to="/productVitagoliPre"
										onClick={handleProductsMenuClose}
									>
										<Typography fontSize="12px">Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA</Typography>
									</MenuItem>
								</Menu>
										</React.Fragment>
									) : (
										<Button
											color="inherit"
											component={NavLink}
											to={page.path}
											sx={{
												mx: 1,
												textDecoration: selectedPage === page.path ? "underline" : "none",
												fontWeight: selectedPage === page.path ? "bold" : "normal",
											}}
											onClick={() => handlePageClick(page.path)}
										>
											<Typography
												variant="subtitle1"
												sx={{
													color: selectedPage === page.path ? "#009090" : "inherit",
													fontWeight: selectedPage === page.path ? "bold" : "normal",
												}}
											>
												{page.title}
											</Typography>
										</Button>
									)}
								</ListItem>
							))}
						</Box>

						{/* Right Section */}
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography variant="h6" component="div">
								<img src={logo} alt="logo" style={{ width: "100px" }} />
							</Typography>
							<Button style={{ color: "#000" }} component={NavLink} to="/login" sx={{ mx: 1 }}>
								Login
							</Button>
							
							<Button  style={{ color: "#fff",backgroundColor:"#009090" }} component={NavLink} to="/shop">Shop Now</Button>
							
							<IconButton color="inherit" component={NavLink} to="/cart">
								<ShoppingCartOutlinedIcon /> 0
							</IconButton>
						</Box>
					</Box>
				</Hidden>
			</Toolbar>

			<Hidden mdUp>
				<Box sx={{ display: "flex", alignItems: "center", marginTop: "-12%", justifyContent: "space-around" }}>
					<Typography variant="h6" component="div">
						<img src={logo} alt="logo" style={{ width: "100px" }} />
					</Typography>
					<Button style={{ color: "#000" }} component={NavLink} to="/login" sx={{ mx: 1 }}>
						Login
					</Button>
					<Buttons title="Shop Now" />
					<IconButton color="inherit" component={NavLink} to="/cart">
						<ShoppingCartOutlinedIcon /> 0
					</IconButton>
				</Box>
				<Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
					<List>
						{pages.map((page) => (
								<ListItem key={page.title}>
									{page.title === "Products" ? (
										<React.Fragment>
											<Button
												color="inherit"
												sx={{
													mx: 1,
													textDecoration: selectedPage === page.path ? "underline" : "none",
													fontWeight: selectedPage === page.path ? "bold" : "normal",
												}}
												onMouseEnter={handleProductsMenuOpen}
												onMouseLeave={handleProductsMenuClose}
											>
												<Typography
													variant="subtitle1"
													sx={{
														color: selectedPage === page.path ? "#009090" : "inherit",
														fontWeight: selectedPage === page.path ? "bold" : "normal",
													}}
												>
													{page.title}
												</Typography>
											</Button>
											<Menu
									anchorEl={anchorEl}
									open={productsMenuOpen}
									onClose={handleProductsMenuClose}
									onMouseEnter={handleProductsMenuOpen} // Keep the menu open when hovering over it
									onMouseLeave={handleProductsMenuClose} // Close the menu when not hovering
									anchorOrigin={{ vertical: "left" }} // Adjust menu position
									transformOrigin={{ vertical: "left",  }} // Adjust menu position
									style={{cursor:"pointer",width:"60%"}}
								>
									<MenuItem
										sx={styles.main}
										component={NavLink}
										to="/productVitagoli"
										onClick={handleProductsMenuClose}
									>
										<Typography fontSize="12px" >Vitagoli Vitamin Gummies Hair, Skin and Nails</Typography>
									</MenuItem>
									<MenuItem
										sx={styles.main}
										component={NavLink}
										to="/productVitagoliPre"
										onClick={handleProductsMenuClose}
									>
										<Typography fontSize="12px">Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA</Typography>
									</MenuItem>
								</Menu>
										</React.Fragment>
									) : (
										<Button
											color="inherit"
											component={NavLink}
											to={page.path}
											sx={{
												mx: 1,
												textDecoration: selectedPage === page.path ? "underline" : "none",
												fontWeight: selectedPage === page.path ? "bold" : "normal",
											}}
											onClick={() => handlePageClick(page.path)}
										>
											<Typography
												variant="subtitle1"
												sx={{
													color: selectedPage === page.path ? "#009090" : "inherit",
													fontWeight: selectedPage === page.path ? "bold" : "normal",
												}}
											>
												{page.title}
											</Typography>
										</Button>
									)}
								</ListItem>
							))}
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<Typography variant="h6" component="div">
								<img src={logo} alt="logo" style={{ width: "100px" }} />
							</Typography>
							<Button style={{ color: "#000" }} component={NavLink} to="/login" sx={{ mx: 1 }}>
								Login
							</Button>
							<Buttons title="Shop Now" />
							<IconButton color="inherit" component={NavLink} to="/cart">
								<ShoppingCartOutlinedIcon /> 0
							</IconButton>
						</Box>
					</List>
				</Drawer>
			</Hidden>
		</AppBar>
	);
};

export default Header;
