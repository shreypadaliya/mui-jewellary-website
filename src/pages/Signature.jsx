import { Box, Grid } from "@mui/material";
import React from "react";
import Simg1 from "../assets/images/Rectangle 27.png";
import Simg2 from "../assets/images/Rectangle 28.png";
import Simg3 from "../assets/images/Rectangle 29.png";
import Simg4 from "../assets/images/Rectangle 30.png";
import Custombutton2 from "../components/Custombutton2";

const Signature = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "68%",
        marginInline: "auto",
      }}
    >
      <Box
        py={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{ fontSize: "30px", lineHeight: "47px", fontFamily: "Bastiken" }}
        >
          Signature Earrings
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            flexDirection: "column",
            fontSize: "16px",
            lineHeight: "28px",
            fontFamily: "Martel",
          }}
        >
          <Box>
            Our unique and eye-catching earrings are exclusively made in-house.
            Each pair is carefully designed
          </Box>
          <Box>
            with attention to detail, resulting in a signature style that is
            both modern and timeless.
          </Box>
        </Box>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          paddingBottom: "40px",
          // transition: "transform 0.3s ease-in-out",
          // "&:hover": {
          //   transform: "scale(1.05)",
          // },
        }}
      >
        <Grid item xs={12} sm={6} md={3}
        sx={{
          img: {
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        }}
        >
          <img src={Simg1} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}
         sx={{
          img: {
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        }}>
          <img src={Simg2} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}
         sx={{
          img: {
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        }}>
          <img src={Simg3} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3
        }
        sx={{
          img: {
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          },
        }}>
          <img src={Simg4} alt="" />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 2,
            paddingRight: "15px",
          }}
        >
          <Custombutton2 name="View All" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signature;


