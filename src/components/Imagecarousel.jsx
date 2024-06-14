import React, { useEffect } from "react";
import Mycard from "./Mycard";
import "../assets/styles/Imagecarousel.css";
import good4me1 from "../assets/images/Necklaces.png";
import good4me2 from "../assets/images/Earrings.png";
import good4me3 from "../assets/images/wedding-Rings.png";

const Imagecarousel = () => {
  let box;

  useEffect(() => {
    box = document.querySelector(".product-container");

    return () => {};
  }, []);

  const btnpressprev = () => {
    const box = document.querySelector(".product-container");
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft -= 400;
      console.log(width);
    }
  };
  
  const btnpressnext = () => {
    const box = document.querySelector(".product-container");
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft += 400;
      console.log(width);
    }
  };
  

  return (
    <div className="product-carousel" style={{paddingBottom:"80px", fontFamily:"Bastiken"}}>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"40px",paddingBottom:"40px",fontSize:"30px"}}> New Collection</div>
      <button className="pre-btn" onClick={btnpressprev}>
        <p>&lt;</p>
      </button>
      <button className="next-btn" onClick={btnpressnext}>
        <p>&gt;</p>
      </button>
      <div className="product-container">
        
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me2} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me3} />
        <Mycard imageSrc={good4me1} />
        <Mycard imageSrc={good4me2} />
        <Mycard imageSrc={good4me1} />
      </div>
    </div>
  );
};

export default Imagecarousel;

