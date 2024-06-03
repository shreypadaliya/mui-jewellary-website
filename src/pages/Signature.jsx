import Simg1 from "../assets/images/Rectangle 27.png";
import Simg2 from "../assets/images/Rectangle 28.png";
import Simg3 from "../assets/images/Rectangle 29.png";
import Simg4 from "../assets/images/Rectangle 30.png";
import Custombutton2 from "../components/Custombutton2";
import React, { useState, useEffect, useRef } from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const Signature = () => {
  const [loading, setLoading] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); 

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <Box
      ref={sectionRef}
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
        spacing={10}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          paddingBottom: "40px",
        }}
      >
        {[Simg1, Simg2, Simg3, Simg4].map((src, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              img: {
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.1) translateX(-10px)',
                },
              },
            }}
          >
            {loading ? (
              <Skeleton variant="rectangular" width="100%" height={360} />
            ) : (
              <img src={src} alt={`Simg${index + 1}`} />
            )}
          </Grid>
        ))}
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
