import React from "react";
import Header from "../src/components/Header";
import Home from "../src/pages/Home";
import Newcollection from "./pages/Newcollection";
import Aboutus from "./pages/Aboutus";
import Tranding from "./pages/Tranding";
import Followus from "./pages/Followus";
import Signature from "./pages/Signature";
import Footer from "./components/Footer";
import Bestsell from "./pages/Bestsell";
import Imagecarousel from "./components/Imagecarousel";
// import Newcollectionslider from "./components/Newcollectionslider";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <div className="App">
        <Imagecarousel />
      </div>
      {/* <Newcollectionslider></Newcollectionslider> */}
      <Newcollection />
      <Bestsell></Bestsell>
      <Aboutus />
      <Signature />
      <Tranding />
      <Followus />
      <Footer />    
    </>
  );
};

export default App;
