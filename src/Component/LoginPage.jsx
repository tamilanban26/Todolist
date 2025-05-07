import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Paper,
} from "@mui/material";

const LoginPage = () => {
  return (
    
      <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to bottom right,rgb(234, 232, 236),rgb(255, 255, 255))",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          display: "flex",
          width: "90%",
          maxWidth: 1000,
          height: "80%",
        }}
      >
        {/* Left Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#7b2cbf",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 4,
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2166/2166820.png"
            alt="Welcome"
            style={{ width: "200px", marginBottom: "30px" }}
          />
          <Typography textAlign="center">
           Get a masterclass in product-led experiences—straight from the experts
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "white",
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "#7b2cbf", mb: 1 ,display:"flex",justifyContent: "center"}}
          >
            Welcome back
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 3 }}>
            Login your account
          </Typography>

          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6a0dad",
              mt: 2,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#5e1cbd",
              },
            }}
            fullWidth
          >
            Login
          </Button>

          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 14,
            }}
          >
            <Link href="#" underline="hover">
              Create Account
            </Link>
            <Link href="#" underline="hover">
              Forgot Password?
            </Link>
          </Box>
        </Grid>
      </Paper>
    </Box>
      
    
  )
}

export default LoginPage