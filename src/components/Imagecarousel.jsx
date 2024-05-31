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
      box.scrollLeft -= 250;
      console.log(width);
    }
  };
  
  const btnpressnext = () => {
    const box = document.querySelector(".product-container");
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft += 250;
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

// import React, { useEffect, useState } from "react";
// import Mycard from "./Mycard";
// import "../assets/styles/Imagecarousel.css";
// import good4me1 from "../assets/images/Necklaces.png";
// import good4me2 from "../assets/images/Earrings.png";
// import good4me3 from "../assets/images/wedding-Rings.png";

// const Imagecarousel = () => {
//   const [boxWidth, setBoxWidth] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       const box = document.querySelector(".product-container");
//       if (box) {
//         setBoxWidth(box.scrollWidth);
//       }
//     };

//     handleResize(); // Initial width calculation
//     window.addEventListener("resize", handleResize); 

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const btnpressprev = () => {
//     const box = document.querySelector(".product-container");
//     if (box) {
//       box.scrollLeft -= boxWidth * 0.25; 
//   };

//   const btnpressnext = () => {
//     const box = document.querySelector(".product-container");
//     if (box) {
//       box.scrollLeft += boxWidth * 0.25; 
//     }
//   };

//   return (
//     <div className="product-carousel" style={{ paddingBottom: "80px", fontFamily: "Bastiken" }}>
//       <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "40px", paddingBottom: "40px", fontSize: "30px" }}> New Collection</div>
//       <button className="pre-btn" onClick={btnpressprev}>
//         <p>&lt;</p>
//       </button>
//       <button className="next-btn" onClick={btnpressnext}>
//         <p>&gt;</p>
//       </button>
//       <div className="product-container">
//         <Mycard imageSrc={good4me1} />
//         <Mycard imageSrc={good4me2} />
//         <Mycard imageSrc={good4me3} />
//         <Mycard imageSrc={good4me3} />
//         <Mycard imageSrc={good4me1} />
//         <Mycard imageSrc={good4me2} />
//         <Mycard imageSrc={good4me1} />
//       </div>
//     </div>
//   );
// };

// export default Imagecarousel;
