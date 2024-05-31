import { Box, Typography } from '@mui/material'
import React from 'react'

const Newcollection = () => {
  return (
    <>
        <Box sx={{display:"flex",backgroundColor:"#EAD9CE",flexDirection:"column",justifyContent:"center",textAlign:"center"}}>
            <Box sx={{fontSize:"30px",lineHeight:"47px",paddingTop:"70px",paddingBottom:"40px", fontFamily:"Bastiken"}}>A diamond is a woman`s best friends!</Box>
            <Box sx={{display:"flex",flexDirection:"column",fontSize:"16px",lineHeight:"26px",paddingBottom:"60px",}}>
                <Typography sx={{display:{xs: "inline", sm: "inline", md: "block" },fontFamily:"Martel"}}>A diamond is a timeless symbol of beauty and friendship, making it the perfect gift for any woman. It is often said that diamonds</Typography>
                <Typography sx={{fontFamily:"Martel"}}>are a woman's best friend, and for good reason. Not only does a diamond represent unwavering loyalty and devotion, but it is also a</Typography>
                <Typography sx={{fontFamily:"Martel"}}>symbol of luxury, glamor and class. A diamond tells the world that you are proud of your loved one, and want them to have only the </Typography>
                <Typography sx={{fontFamily:"Martel"}}>best. As Coco Chanel once said, "A diamond is eternity, it is real and it is unbreakable".</Typography>
            </Box>
        </Box>
    </>
  )
}
  
export default Newcollection
