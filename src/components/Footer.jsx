import React from 'react';
import { Grid, Box, Typography, Button} from '@mui/material';
import facebook from "../assets/images/Facebook.png"
import instagram from "../assets/images/Instagram.png"
import pintrest from "../assets/images/Pinterest.png"

const Footer = () => {
  return (
    <Box id="contact" sx={{ backgroundColor: '#EAD9CE', paddingTop:"40px",paddingLeft:"30px" }}>
      <Grid container spacing={4} justifyContent="center" sx={{borderBottom:"1px solid black",paddingBottom:"40px",paddingTop:"10px"}}>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Join Our Email List
          </Typography>
          <Typography variant="body2" gutterBottom sx={{paddingBottom:"15px",fontFamily:"Martel"}}>
            Subscribing to Jewels allows you to stay <br/> updated on the latest trends and designs in the <br/>jewelry industry.
          </Typography>
          <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex',paddingBottom:"30px",position:"relative",width:"340px",marginTop:"20px"}}>
            <Box
              label="Email"
              variant="outlined"
              size="small"
              sx={{ marginRight: '8px', flexGrow: 1 ,border:"none",backgroundColor:"white",borderRadius:"100px",height:"38px"}}
            />
            <Button variant="contained" sx={{backgroundColor:"#B07B54",borderRadius:"100px",position:"absolute",right:"8px",
            "&:hover": {
            transform: "scale(1.1) translateX(10px)",
            backgroundImage: 'linear-gradient(to right, #D4BFB5, #785343)',
          },
            }}>
              Send
            </Button>
          </Box>
          <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: "flex-start" }}>
            <Box sx={{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:"30px"}}>
             <img src={instagram} alt="" />
             <img src={pintrest} alt="" />
             <img src={facebook} alt="" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom sx={{color:"#B07B54",lineHeight:"30px",fontFamily:"Martel"}}>
            Shop
          </Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Collections</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Rings</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Bracelets</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Chains</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Wedding Rings</Typography>
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography variant="h6" gutterBottom sx={{color:"#B07B54"}}>
            About
          </Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>About Us</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Contact</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>Privacy Policy</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>FAQ's</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom sx={{color:"#B07B54"}}>
            Our Contacts
          </Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>shop_Jewels@gmail.com</Typography>
          <Typography variant="body2" sx={{lineHeight:"25px",fontFamily:"Martel"}}>+123456789</Typography>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', alignItems:"center",justifyContent:"center",display:"flex",flexDirection:"column",paddingTop:"5px",paddingBottom:"5px" }}>
        <Typography color="textSecondary" sx={{fontFamily:"Martel"}}>
          2023 ©JEWELS. All Rights Reserved. 
        </Typography>
        <Typography sx={{fontFamily:"Martel"}}>Created by Julianna</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
