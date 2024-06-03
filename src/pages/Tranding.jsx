import { Box } from '@mui/material'
import React from 'react'
import Custombutton from '../components/Custombutton'
import trandimg from "../assets/images/top-view-golden-earrings-arrangement 1.png"

const Tranding = () => {
  return (
    <>
        <Box sx={{ display: "flex",backgroundColor:"#EAD9CE",justifyContent:"space-between",flexDirection:{xs:'column',sm:'column',md:"column",lg:"row"},paddingTop:"30px" }}>
      <Box sx={{ display: "flex", flexDirection: "column",justifyContent:"center",width:{xs:"100%",sm:"100%",md:"100%",lg:"50%"},textAlign:{xs:"center",sm:"center",md:"center",lg:"end"},marginRight:"40px"}}>
        <Box sx={{display:"flex",justifyContent:{xs:"center",sm:"center",md:"center",lg:"flex-end"}}}>
        <Box sx={{display:{xs:"none",sm:"none",md:"flex",lg:"flex"},flexDirection:"column",fontSize:"17px",lineHeight:"28px",paddingBottom:"25px",textAlign:"start",fontFamily:"Martel"}}>
        <Box sx={{paddingBottom:"37px",fontSize:"30px",lineHeight:"47px", fontFamily:"Bastiken",}}>Most Trending In SS ‘23</Box>
            <Box>Based on current fashion trends and new emerging styles, it is </Box>
            <Box>expected that bold and oversized earrings will continue to be </Box>
            <Box>popular. Additionally, sustainable fashion, eco-friendly materials </Box>
            <Box>and ethical production methods are becoming more important to </Box>
            <Box>consumers, so earrings made from recycled or sustainable </Box>
            <Box>materials also gain popularity.</Box>
            <Box sx={{paddingTop:"25px"}}>
            <Custombutton name='Read More'/>
            </Box>
        </Box>
        <Box sx={{display: {xs:"flex",sm:"flex",md:"none",lg:"none"},flexDirection:"column",fontSize:"17px",lineHeight:"28px",paddingBottom:"25px",textAlign:"start",fontFamily:"Martel",paddingLeft:"15px"}}>
            <Box  sx={{paddingBottom:"37px",fontSize:"30px",lineHeight:"47px", fontFamily:"Bastiken",textAlign:"center"}}>Most Trending In SS ‘23</Box>
            <Box>Based on current fashion trends and new emerging styles, it is expected that bold and oversized earrings will continue to be popular. Additionally, sustainable fashion, eco-friendly materials and ethical production methods are becoming more important to consumers, so earrings made from recycled or sustainable materials also gain popularity.</Box>
            </Box>
            
        </Box>
        
      </Box>
      <Box sx={{paddingTop:"30px",width:{xs:"100%",sm:"100%",md:"100%",lg:"50%"}
      ,img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(0.75) translateX(40px) ',
            },
          },
      }}>
        <img style={{width:"100%",height:"644px"}} src={trandimg} alt="" />
      </Box>
      
    </Box>
    </>
    
  )
}

export default Tranding
