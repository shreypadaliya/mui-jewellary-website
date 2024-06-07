
import { Box } from '@mui/material'
import React from 'react'

const Earring = (props) => {
  // const { id, title, img, price } = props.data
  return (
    <Box key={props.id} sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Box>
        <img style={{ height: "350px", maxWidth: "350px",width:"100%" }} src={props.img} alt="" />
      </Box>
      <Box sx={{ fontSize: "18px", lineHeight: "30px",fontFamily:"Martel" }}>{props.title}</Box>
      <Box sx={{ fontSize: "16px", lineHeight: "27px",fontFamily:"Martel" }}>{props.price}</Box>
    </Box>
  )
}

export default Earring
