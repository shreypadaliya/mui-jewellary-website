import React from 'react'
import '../assets/styles/Mycard.css'

const Mycard = (props) => {
    console.log(props)
    return (
        <div className='mycard'> <img className='sliderimg' src={props.imageSrc} alt="" /></div>
    )
}

export default Mycard