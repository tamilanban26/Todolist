import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import mathii from '../assets/mathii.jpeg'
import jeeva from '../assets/jeevaedu.jpeg'
import tamil from '../assets/tamil.jpg'
import bousi from '../assets/bousi.jpeg'
import mouli from '../assets/moulii.jpeg'
// import sivaaaa from '../assets/sivaaaa.jpeg'
import CardActionArea from '@mui/material/CardActionArea';
import Grid from "@mui/material/Grid";
import { useNavigate } from 'react-router-dom';


export default function TeamsPage() {
 const navigate = useNavigate()

    const teamMembers = [
        {
          name: "Mathivathani",
          role: "Frontend Developer",
          image: mathii
        },
        {
          name: "Jeeva",
          role: "Backend Developer",
          image: jeeva,
        },
        {
          name: "TamilAnban",
          role: "UI/UX Designer",
          image: tamil,
        },
        {
          name: "Boushica",
          role: "Project Manager",
          image: bousi,
        },
        {
          name: "Moulee",
          role: "React Developer",
          image: mouli,
        },
        {
          name: "Siva",
          role: "JS developer ",
          image: jeeva,
        },
        {
          name: "Kowsalya",
          role: "JS developer ",
          image: bousi,
        },
      ];

  return (
    <>
     <Box sx={{ flexGrow: 1, margin:0,}}>
      <AppBar position="static" sx={{backgroundColor:"#ab47bc"}} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontSize:30,fontFamily:"Open sans",fontWeight:"bold",justifyContent:"center", alignItems:'center',display:"flex" }}>
            Team Section
          </Typography>
          <Button color="inherit" sx={{fontSize:20,fontFamily:"serif"}}>Login</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ backgroundColor: "#f3e5f5", py:5,   height:"90vh" }}>
  <Grid container spacing={4} justifyContent="center">
    {teamMembers.map((member, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
        onClick={() => navigate(`/team/${member.name}`)}
          sx={{
            borderRadius: 4,
            boxShadow: 3,
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            component="img"
            image={member.image}
            alt={member.name}
            sx={{
              height: 220,
              width: '100%',
              objectFit: 'cover',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
            }}
          />
          <CardContent sx={{ textAlign: "center", backgroundColor: "#fff" }}>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins, sans-serif",
                color: "#6a1b9a",
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ fontFamily: "Poppins, sans-serif" }}
            >
              {member.role}
            </Typography>
          </CardContent>
          
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>



    </Box>
    </>
  )
}
