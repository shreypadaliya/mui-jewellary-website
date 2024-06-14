import React from 'react';
import { Grid, Box } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BraceletData from "../Data/utils/BraceletData";
import EarringData from "../Data/utils/EarringData";
import ChainData from "../Data/utils/ChainData";
import Earring from '../components/Earring';
import Chain from "../components/Chain";
import Bracelet from '../components/Bracelet';

const Bestsell = () => {
  const earringControls = useAnimation();
  const chainControls = useAnimation();
  const braceletControls = useAnimation();
  
  const [earringRef, inEarringView] = useInView({ triggerOnce: true });
  const [chainRef, inChainView] = useInView({ triggerOnce: true });
  const [braceletRef, inBraceletView] = useInView({ triggerOnce: true });

  if (inEarringView) {
    earringControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
  }

  if (inChainView) {
    chainControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
  }

  if (inBraceletView) {
    braceletControls.start({ x: 0, opacity: 1, transition: { duration: 1 } });
  }

  return (
    <>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"60px",paddingBottom:"40px",fontSize:"30px",fontFamily:"Bastiken"}}>Best Sellers</Box>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px", marginBottom: "30px" }}>
        <Box  sx={{ width: "80%"}}>
          <motion.div
            ref={earringRef}
            initial={{ x: -100, opacity: 0 }}
            animate={earringControls}
          >
            <Grid container sx={{ display: "flex", gap: "50px", justifyContent: "flex-start", marginInline: "auto",paddingLeft:{xs:"0px",sm:"0px",md:"100px",lg:"132px",xl:"220px"} }}>
              {EarringData.map((item) => (
                <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
                  <Earring data={item} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
          
          <motion.div
            ref={chainRef}
            initial={{ x: 100, opacity: 0 }}
            animate={chainControls}
          >
            <Grid container sx={{ display: "flex", gap: "50px", justifyContent: "flex-end",paddingRight:{xs:"0px",sm:"0px",md:"00px",lg:"132px",xl:"220px"} }}>
              {ChainData.map((item) => (
                <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
                  <Chain data={item} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
          
          <motion.div
            ref={braceletRef}
            initial={{ x: -100, opacity: 0 }}
            animate={braceletControls}
          >
            <Grid container sx={{ display: "flex", gap: "50px", justifyContent: "flex-start",paddingLeft:{xs:"0px",sm:"00px",md:"00px",lg:"132px",xl:"220px"} }}>
              {BraceletData.map((item) => (
                <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
                  <Bracelet data={item} />
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}

export default Bestsell;


