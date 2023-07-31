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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

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

const Header = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);
	const [selectedPage, setSelectedPage] = React.useState(pages[0].path); // Initially select the first page

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

	return (
		<AppBar position="static" color="default" sx={{ backgroundColor: "#fff", color: "#000", fontWeight: "bold" }}>
			<Toolbar>
				

				<Hidden mdUp>
					<IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
						<MenuIcon />
					</IconButton>
				</Hidden>

				<Hidden mdDown>
					<Box sx={{ display: "flex" }}>
						{pages.map((page) => (
							<Button
								key={page.title}
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
										color: selectedPage === page.path ? "#FF7276" : "inherit",
										fontWeight: selectedPage === page.path ? "bold" : "normal",
									}}
								>
									{page.title}
								</Typography>
								
							</Button>
						))}
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					<img src={logo} alt="logo" style={{ width: "100px" }} />
				</Typography>
			{/* add login , shop now and cart */}
					</Box>
				</Hidden>
			</Toolbar>

			<Hidden mdUp>
				<Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
					<List>
						{pages.map((page) => (
							<ListItem
								key={page.title}
								onClick={() => handlePageClick(page.path)}
								component={NavLink}
								to={page.path}
								sx={{
									color: selectedPage === page.path ? "#FF7276" : "inherit",
								}}
							>
								<ListItemText primary={page.title} />
							</ListItem>
						))}
					</List>
				</Drawer>
			</Hidden>

			
		</AppBar>
	);
};

export default Header;
