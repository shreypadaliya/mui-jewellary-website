import { Box } from '@mui/material'
import React from 'react'
import logo from "../assets/images/JEWELS.png"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
       <Box py={2} display={"flex"} justifyContent={"space-between"} alignItems={"center"} sx={{backgroundColor:"#EAD9CE",paddingInline:{xs:'50px',sm:"80px",md:"130px",lg:"190px"},borderBottom: '1px solid black'}}>
        <Box justifyContent={"space-between"} alignItems={"center"} sx={{display:{xs:'none',sm:"none",md:"flex"},}}>
        <l1 style={{display:"flex",gap:"20px"}}>
            <Box sx={{'&:hover':{backgroundColor:"#785343",borderRadius:"10px"}}}><ul style={{padding:"0px"}}><a style={{color:"black",textDecoration:"none"}} href="#home">Home</a></ul></Box>
            {/* <ul><a style={{color:"black",textDecoration:"none",padding:"0px"}} href="#home">Home</a></ul> */}
            <Box sx={{'&:hover':{backgroundColor:"#785343",borderRadius:"10px"}}}><ul style={{padding:"0px"}}><a style={{color:"black",textDecoration:"none"}} href="#aboutus">Aboutus</a></ul></Box>
            <Box sx={{'&:hover':{backgroundColor:"#785343",borderRadius:"10px"}}}><ul style={{padding:"0px"}}><a style={{color:"black",textDecoration:"none"}} href="#collection">Collection</a></ul></Box>
            <Box sx={{'&:hover':{backgroundColor:"#785343",borderRadius:"10px"}}}><ul style={{padding:"0px"}}><a style={{color:"black",textDecoration:"none"}} href="#contact">Contact</a></ul></Box>
        </l1>
        </Box>
        <Box>
        <img src={logo} alt="" />
        </Box>
        <Box sx={{display:{xs:'none',sm:"none",md:"flex"},justifyContent:"center",alignItems:'center',gap:"30px"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:'center',gap:"10px"}}>
          <SearchIcon/>
          <Box sx={{background:"#B2A4A4",width:"1px",height:"23px"}}></Box>
          <ShoppingCartIcon></ShoppingCartIcon>
          <Box sx={{background:"#B2A4A4",width:"1px",height:"23px"}}></Box>
          <PersonIcon></PersonIcon>
        </Box>   
        <Box>Sign Up</Box>
        </Box>
        <Box
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              // position: "fixed",
              right: "30px",
              top: "32px",
            }}
            onClick={toggleMenu}
          >
            <MenuIcon />
          </Box>
        </Box>
        {menuOpen && (
        <Box
          sx={{
            backgroundColor: "FFFFFF",
            width: "100%",
            display: { md: "none" },
          }}
        >
          <ul
            style={{
              display: "flex",
              fontSize: "18px",
              listStyleType: "none",
              gap: "25px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor:"#EAD9CE",
              marginTop:"0px",
              marginBottom:"0px",paddingTop:'10px'
            }}
          >
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
            <li>Client</li>
            <li>Contact Us</li>
          </ul>
        </Box>
      )}
        
    </>
  )
}

export default Header
