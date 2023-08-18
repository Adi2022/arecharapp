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
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logos.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Buttons from "../common/Buttons";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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
  const [selectedPage, setSelectedPage] = React.useState(pages[0].path);
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Hidden mdDown>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            {/* Left Section */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {pages.map((page) => (
                <ListItem key={page.title}>
                  {page.title === "Products" ? (
                    <div
					
                      onMouseEnter={handleMenuOpen}
                      onMouseLeave={handleMenuClose}
                    >
                      <Button
					  
                        color="inherit"
                        sx={{
                          mx: 1,
                          textDecoration:
                            selectedPage === page.path ? "underline" : "none",
                          fontWeight:
                            selectedPage === page.path ? "bold" : "normal",
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color:
                              selectedPage === page.path ? "#009090" : "inherit",
                            fontWeight:
                              selectedPage === page.path ? "bold" : "normal",
                          }}
                        >
                          {page.title}
                        </Typography>
                      </Button>
                      {anchorEl && (
                        <div
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            backgroundColor: "#e1e1e1",
                            boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
							fontSize:"13px",
							paddingLeft:"4%",
							paddingRight:'4%'
					
                          }}
                          onMouseEnter={handleMenuOpen}
                          onMouseLeave={handleMenuClose}
                        >
                          <Menu

						  
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    getContentAnchorEl={null}
                  >
                    <MenuItem component={NavLink} to="/productVitagoli" style={{
						
						backgroundColor: "#e1e1e1",
						fontSize:"13px",
						borderBottom:"1px solid #adadad"
				
					  }}>
                      Vitagoli Vitamin Gummies Hair, Skin and Nails
                    </MenuItem>
                    <MenuItem style={{
						
						backgroundColor: "#e1e1e1",
						fontSize:"13px",
						
				
					  }} component={NavLink} to="/productVitagoliPre">
                      Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA
                    </MenuItem>
                  </Menu>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Button
                      color="inherit"
                      component={NavLink}
                      to={page.path}
                      sx={{
                        mx: 1,
                        textDecoration:
                          selectedPage === page.path ? "underline" : "none",
                        fontWeight:
                          selectedPage === page.path ? "bold" : "normal",
                      }}
                      onClick={() => handlePageClick(page.path)}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            selectedPage === page.path ? "#009090" : "inherit",
                          fontWeight:
                            selectedPage === page.path ? "bold" : "normal",
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
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </Typography>
              <Button
                style={{ color: "#000" }}
                component={NavLink}
                to="/login"
                sx={{ mx: 1 }}
              >
                Login
              </Button>
              <Button
                style={{ color: "#fff", backgroundColor: "#009090" }}
                component={NavLink}
                to="/shop"
              >
                Shop Now
              </Button>
              <IconButton
                color="inherit"
                component={NavLink}
                to="/cart"
              >
                <ShoppingCartOutlinedIcon /> 0
              </IconButton>
            </Box>
          </Box>
        </Hidden>
      </Toolbar>

      <Hidden mdUp>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "-12%",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" component="div">
            <img src={logo} alt="logo" style={{ width: "100px" }} />
          </Typography>
          <Button
            style={{ color: "#000" }}
            component={NavLink}
            to="/login"
            sx={{ mx: 1 }}
          >
            Login
          </Button>
          <Buttons title="Shop Now" />
          <IconButton
            color="inherit"
            component={NavLink}
            to="/cart"
          >
            <ShoppingCartOutlinedIcon /> 0
          </IconButton>
        </Box>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={closeDrawer}
        >
          <List>
            {pages.map((page) => (
              <ListItem key={page.title}>
                {page.title === "Products" ? (
                  <div
                    onMouseEnter={handleMenuOpen}
                    onMouseLeave={handleMenuClose}
                  >
                    <Button
                      color="inherit"
                      sx={{
                        mx: 1,
                        textDecoration:
                          selectedPage === page.path ? "underline" : "none",
                        fontWeight:
                          selectedPage === page.path ? "bold" : "normal",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color:
                            selectedPage === page.path ? "#009090" : "inherit",
                          fontWeight:
                            selectedPage === page.path ? "bold" : "normal",
                        }}
                      >
                        {page.title}
                      </Typography>
                    </Button>
                    {anchorEl && (
                      <div
					  style={{
						position: "absolute",
						top: "100%",
						left: 0,
						backgroundColor: "#e1e1e1",
						boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
						fontSize:"13px",
						paddingLeft:"4%",
						paddingRight:'4%'
						
						
					  }}
                        onMouseEnter={handleMenuOpen}
                        onMouseLeave={handleMenuClose}
                      >
                        <NavLink
                          to="/productVitagoli"
                          style={{
                            display: "block",
                            padding: "10px 20px",
                            textDecoration: "none",
                            color:"#58595B",
							  borderBottom:"1px solid #adadad"
                          }}
                        >
                          Vitagoli Vitamin Gummies Hair, Skin and Nails
                        </NavLink>
                        <NavLink
                          to="/productVitagoliPre"
                          style={{
                            display: "block",
                            padding: "10px 20px",
                            textDecoration: "none",
                            color:"#58595B",
                          }}
                        >
                          Vitagoli Pre and Probiotics Vitamin Gummies with Algal DHA
                        </NavLink>
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    color="inherit"
                    component={NavLink}
                    to={page.path}
                    sx={{
                      mx: 1,
                      textDecoration:
                        selectedPage === page.path ? "underline" : "none",
                      fontWeight:
                        selectedPage === page.path ? "bold" : "normal",
                    }}
                    onClick={() => handlePageClick(page.path)}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color:
                          selectedPage === page.path ? "#009090" : "inherit",
                        fontWeight:
                          selectedPage === page.path ? "bold" : "normal",
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
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "100px" }}
                />
              </Typography>
              <Button
                style={{ color: "#000" }}
                component={NavLink}
                to="/login"
                sx={{ mx: 1 }}
              >
                Login
              </Button>
              <Buttons title="Shop Now" />
              <IconButton
                color="inherit"
                component={NavLink}
                to="/cart"
              >
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
