import React from "react";
import good4me1 from "../assets/images/Necklaces.png";
import good4me2 from "../assets/images/Earrings.png";
import good4me3 from "../assets/images/wedding-Rings.png";
import { Box, Container } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Newcollectionslider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
     <Box sx={{display:"flex"}}>
        <Container>
           <Slider {...settings}>
              <Box><img style={{height:"359px",Width:"100%"}} src={good4me1} alt="" /></Box>
              <Box><img style={{height:"359px",Width:"100%"}} src={good4me2} alt="" /></Box>
              <Box><img style={{height:"359px",Width:"100%"}} src={good4me3} alt="" /></Box>
            </Slider>
        </Container>
        
     </Box> 
    </>
  )
}

export default Newcollectionslider

