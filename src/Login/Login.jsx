import React, { useState } from "react";
import {Button,InputAdornment} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate,NavLink } from "react-router-dom";
const styles = {
	heading: {
		backgroundColor: "#72B280",
		width: "100%",
		fontSize: "25px",
		fontWeight: 700,
		lineHeight: "25px",
		padding: "20px 30px",
	},
	social: {
		fontSize: "1rem",
		fontWeight: 400,
		lineHeight: 1.5,
	},
	iconButton: {
		backgroundColor: "#72B280",
	},
	formLabel: {
		color: "#fff",
	},
	formTextField: {
		"& .MuiInputBase-root": {
			color: "#fff",
			border: "1px solid #fff",
		},
	},
	heading2: {
		color: "white",
		margin: "10px",
		width: "100%",
	},
	gridleft: {
		border: "1px solid #fff",
		padding: "6px 10px",
		"&:hover": {
			backgroundColor: "#fff",
			color: "#000",
		},
		cursor: "pointer",
	},
	gridRight: {
		border: "1px solid #fff",
		padding: "6px 10px",
		"&:hover": {
			backgroundColor: "#fff",
			color: "#000",
		},
		cursor: "pointer",
	},
};

export default function Login() {
    const [showP, setShowP] = useState(false);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
      });
      const handleInput = (e) => {
        const { name, value } = e.target;
        setInputData({
          ...inputData,
          [name]: value,
        });
      };
      const handleTogglePassword = () => {
        setShowP(!showP);
      };

      const validateEmail = (email) => {
        // Email validation logic (e.g., regex)
        // if no email is entered
      
    // if email is entered
    
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validatePassword = (password) => {
        // Password validation logic
        // Here, we're checking if the password length is at least 6 characters
        return password.length >= 6;
      };
      const PostData = async (e) => {
        e.preventDefault();
        const { email, password } = inputData;
        if (!email.trim()) {
          toast.error("Email is required");
          return;
        }
      
        if (!password.trim()) {
          toast.error("Password is required");
          return;
        }
        // Validate email and password
        if (!validateEmail(email)) {
          toast.error("Invalid email address");
          return;
        }
        // if noo email is entered
         
        if (!validatePassword(password)) {
          toast.error("Password should have atleast 6 characters");
          return 
        }
       
        toast.success("Registered Successfully")
        setTimeout(() => {
            navigate("/");
          }, 1000);
      };

	return (
		<>
			<Container component="main" maxWidth="sm">
				<Box
					sx={{
						boxShadow: 3,
						borderRadius: 2,
						px: 4,
						py: 6,
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						marginTop: "30%",
						marginBottom: "10%",
						backgroundColor: "#009090",
						color: "#fff",
					}}
				>
					<Typography sx={styles.heading}>Sign in</Typography>

					<Typography sx={styles.heading2}>Don't have an account? <NavLink   to="/register">Sign Up</NavLink></Typography>

					<span style={{ color: "white", width: "100%" }}>OR</span>

					<Typography sx={styles.heading2}>Sign in with</Typography>
					<Grid container>
						<Grid item xs={6} md={6} sx={styles.gridleft}>
							<IconButton sx={styles.iconButton} aria-label="Facebook">
								<FacebookIcon />
							</IconButton>
							<Typography sx={styles.social}>FACEBOOK</Typography>
						</Grid>
						<Grid item xs={6} md={6} sx={styles.gridRight}>
							<IconButton sx={styles.iconButton} aria-label="Google">
								<GoogleIcon />
							</IconButton>
							<Typography sx={styles.social}>GOOGLE</Typography>
						</Grid>
					</Grid>
					<span style={{ color: "white", width: "100%", marginTop: "10%" }}>OR</span>
					<Typography sx={styles.heading2}>Sign in with existing account</Typography>

					<Box component="form"  noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							fullWidth
							id="email"
							placeholder="Email"
							name="email"
							autoComplete="email"
							autoFocus
							sx={styles.formTextField}
                            value={inputData.email}
                            onChange={handleInput}
						/>
						<TextField
							margin="normal"
							fullWidth
							name="password"
							placeholder="Password"
                            type={showP ? "text" : "password"}
							id="password"
							autoComplete="current-password"
							sx={styles.formTextField}
                            value={inputData.password}
                            onChange={handleInput}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <IconButton onClick={handleTogglePassword} edge="end">
                                      {showP ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                  </InputAdornment>
                                ),
                              }}
						/>
						<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
						<Button
							
							fullWidth
                            type="submit"
                            value="register"
                            onClick={PostData}
							style={{ backgroundColor: "#72B280", color: "#fff", fontWeight: 700 }}
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>
						<Grid container>
							<Grid item xs>
                            <Typography sx={styles.heading2}><NavLink   to="/forgot_password">Forgot Password?</NavLink> </Typography>
							</Grid>
							<Grid item>
                            <Typography sx={styles.heading2}>Don't have an account? <NavLink   to="/register">Sign Up</NavLink></Typography>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
            <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
		</>
	);
}
