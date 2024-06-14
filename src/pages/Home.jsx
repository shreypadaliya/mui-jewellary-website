import { Box } from "@mui/material";
import React from "react";
import image1 from "../assets/images/pink-cheeked-redhead-woman-plays-with-her-pearl-necklace-lady-classic-white-blouse-looking-down-camera 1.png";
import Custombutton from "../components/Custombutton";
const Home = () => {
  return (
    <Box id="home"
      sx={{
        display: "flex",
        backgroundColor: "#EAD9CE",
        width: "100%",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "column", md: "row" }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: {xs:"100%",sm:"100%",md:"100%",lg:"50%"},
          // marginLeft: { xs: "10px", sm: "10px", md: "240px" } 
          marginRight: "30px"
        }}
      >

     <Box sx={{display:"flex",justifyContent:{xs:"flex-start",sm:"start",md:"flex-end"}}}>
     <Box
          sx={{
            fontSize: "16px",
            lineHeight: "27px",
            marginTop: "30px",
            marginBottom: "30px",
            display: "flex",
            flexDirection: "column",
            // textAlign: "start",
            // justifyContent:"end",
            // alignItems:"flex-end",
            textAlign:"start",
            fontFamily:"Martel"
          }}
        >
                <Box
          sx={{
            fontSize: "45px",
            lineHeight: "70px",
            display:{ xs: "inline", sm: "inline", md: "inline", lg: "block" },
            textAlign: 'start',
            fontFamily:"Bastiken"
          }}
        >
          <Box >Your One-Stop Destination</Box>
          <Box>for Unique and Exquisite</Box>
          <Box>Jewelry Pieces</Box>
        </Box>
          <Box sx={{fontWeight:'400'}}>Here, we offer various types of jewelry, including necklaces,</Box>
          <Box>bracelets, earrings, and rings. From classic designs to modern</Box>
          <Box>styles, we have something for everyone.</Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start" ,marginTop:"30px"}}>
            <Custombutton name="Shop TheCollection" />
          </Box>


        </Box>
     </Box>

      </Box>
      <Box sx={{ paddingTop: "30px", maxWidth: "100%" , width: {xs:"100%",sm:"100%",md:"100%",lg:"50%"},img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(0.75) translateX(10px)',
            },
          },}}>
        <img
          src={image1}
          alt=""
          style={{ maxWidth: "100%", height: "auto", width: "100%", }} 
        />
      </Box>

    </Box>
  );
};

export default Home;
