import { Box } from '@mui/material'
import React from 'react'
import aboutimg from "../assets/images/Rectangle 25.png"
import Custombutton2 from "../components/Custombutton2"

const Aboutus = () => {
  return (
    <>
      <Box id="aboutus" sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" }, 
        backgroundColor: "#EAD9CE",
        justifyContent: "space-between",
        gap:"30px",
        flexDirection:{ xs: "column", sm: "column",md:"row" },
       
      }}>
        <Box sx={{
          paddingTop: { xs: "30px", sm: 0 }, 
          width: { xs: "100%", sm: "100%",md:"50%" }, 
          img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(0.75) translateX(40px) ',
            },
          },
        
        }}>
          <img style={{ width: "100%", height: "auto" }} src={aboutimg} alt="" /> 
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex:1,
           padding: { xs: "30px", sm: 0 }, 
        }}>
          <Box sx={{ paddingBottom: "37px", fontSize: "30px", lineHeight: "47px", fontFamily:"Bastiken", textAlign:{xs:"center",sm:"center",md:"center",lg:"left"} }}>About Us</Box>
          <Box sx={{
            display: {xs:"none",sm:"none",md:"none",lg:"flex"},
            flexDirection: "column",
            fontSize: "17px",
            lineHeight: "28px",fontFamily:"Martel",
            textAlign:{xs:"center",sm:"center",md:"center",lg:"left"}
          }}>
            <Box>We're a group of five friends passionate about making unique</Box>
            <Box>and beautiful jewelry. Whether it's crafting intricate beaded </Box>
            <Box>necklaces or designing elegant bracelets, our creativity and </Box>
            <Box>skills shine through in every piece we create. We value </Box>
            <Box>collaboration and work together to come up with new ideas</Box>
            <Box>and techniques that enrich our craft. From sourcing the</Box>
            <Box>highest quality materials to putting the finishing touches on</Box>
            <Box>each piece, we take pride in every step of the process. At the </Box>
            <Box>heart of our business is a genuine love for jewelry-making,</Box>
            <Box>and we can't wait to share our passion with you.</Box>
          </Box>
          <Box sx={{ display: {xs:"flex",sm:"flex",md:"flex",lg:"none"},fontSize: "17px",
            lineHeight: "28px",fontFamily:"Martel",
            textAlign:{xs:"center",sm:"left",md:"left",lg:"left"},
            paddingLeft:{xs:"10px",sm:"10px",md:"0px",lg:"0px"}}} ><p>We're a group of five friends passionate about making unique and beautiful jewelry. Whether it's crafting intricate beadednecklaces or designing elegant bracelets, our creativity and skills shine through in every piece we create. We value collaboration and work together to come up with new ideas and techniques that enrich our craft. From sourcing the highest quality materials to putting the finishing touches on each piece, we take pride in every step of the process. At the heart of our business is a genuine love for jewelry-making, and we can't wait to share our passion with you.</p></Box>
          <Box sx={{ marginTop: '50px', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginRight: '180px',marginBottom:"20px"}}>
            <Custombutton2 name="Read more" />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Aboutus

