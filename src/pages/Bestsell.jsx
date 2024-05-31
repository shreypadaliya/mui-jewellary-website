import React from 'react'
import { Grid, Box } from '@mui/material'
import BraceletData from "../Data/utils/BraceletData"
import EarringData from "../Data/utils/EarringData"
import ChainData from "../Data/utils/EarringData"
import Earring from '../components/Earring'
import Chain from "../components/Chain"
import Bracelet from '../components/Bracelet'


function Bestsell() {
  return (
    <>
    <Box sx={{width:"55%",textAlign:"center",alignItems:"center",marginInline:"auto"}}>
    <Box>
      <Box sx={{ alignItems: 'center', justifyContent: 'center', gap: '20px', display: 'flex', flexDirection: 'column', textAlign: 'center', marginInline: 'auto' }}>
        <Box py={8} sx={{ display: "flex", justifyContent: "center", alignItems: "center",fontSize:"30px", fontFamily:"Bastiken" }}>Best Sellers</Box>

        <Grid container sx={{ display: "flex",paddingBottom:"40px",gap:"150px",
        img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: ' translateX(-90px)',
            },
          }, }} >
          {EarringData.map((item) => (
            <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
              <Earring data={item} />
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{ justifyContent: 'flex-end',paddingBottom:"40px",gap:"150px",
        img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: ' translateX(90px)',
            },
          }, }}
        
         >
          {ChainData.map((item) => (
            <Grid item key={item.id} xs={12} sm={9} md={6} lg={3} sx={{ alignSelf: 'flex-end', display: 'flex' }}>
              <Chain data={item} />
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{paddingBottom:"40px",gap:"150px",
         img: {
            width: '100%',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: ' translateX(-90px)',
            },
          },
         }}>
          {BraceletData.map((item) => (
            <Grid item key={item.id} xs={12} sm={9} md={6} lg={3}>
              <Bracelet data={item} />
            </Grid>
          ))}
        </Grid>

      </Box>
    </Box>

    </Box>

    </>
    
    

  )
}

export default Bestsell
