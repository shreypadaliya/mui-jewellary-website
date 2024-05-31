import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import followimg1 from "../assets/images/Rectangle 14.png";
import followimg2 from "../assets/images/Rectangle 15.png";
import followimg3 from "../assets/images/Rectangle 16.png";
import followimg4 from "../assets/images/Rectangle 17.png";
import followimg5 from "../assets/images/Rectangle 14 (1).png";
import followimg6 from "../assets/images/Rectangle 15 (1).png";
import followimg7 from "../assets/images/Rectangle 16 (1).png";
import followimg8 from "../assets/images/Rectangle 17 (1).png";

const Followus = () => {
  return (
    <Box
      sx={{
        width: "68%",
        display: "flex",
        flexDirection: "column",
        marginInline: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Box
          sx={{ fontSize: "30px", lineHeight: "47px", fontFamily: "Bastiken" }}
        >
          Follow us on Instagram
        </Box>
        <Box
          sx={{ fontSize: "14px", lineHeight: "23px", fontFamily: "Martel" }}
        >
          @SHOPJEWELSBOUTIQUE #JEWELS
        </Box>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
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
        }}>
          <img src={followimg1} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} md={3}
        sx={{
          img: {
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.1)' ,
            },
          },
        }}>
          <img src={followimg2} alt="" />
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
          <img src={followimg3} alt="" />
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
          <img src={followimg4} alt="" />
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          paddingTop: "45px",
          marginBottom: "100px",
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
        }}>
          <img src={followimg5} alt="" />
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
          <img src={followimg6} alt="" />
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
          <img src={followimg7} alt="" />
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
          <img src={followimg8} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Followus;
