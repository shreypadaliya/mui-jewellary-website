import { Box, Button } from "@mui/material";
import React from "react";

const Custombutton2 = (props) => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#B07B54",
          borderRadius: "100px 0px 0px 100px",
          height: "42.92px",
          width: "233px",
          color: "white",
          fontFamily: "Martel",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1) translateX(10px)",
            backgroundColor: "#785343",
          },
        }}
      >
        {props.name}
      </Button>
    </>
  );
};

export default Custombutton2;
