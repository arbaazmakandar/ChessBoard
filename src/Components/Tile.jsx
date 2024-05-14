import React from 'react'
import './Tile.css'

const Tile = (props) => {
    const {number, image} = props
  return (
    <span key={number} className={`tile ${(number)%2===0? " black-tile" : " white-tile"}`}> 
    {/* If image is there then only put this div */}
    {image && <div style={{backgroundImage: `url(${image})`}} className='chess-piece'/> }  
    </span>
  )
}

export default Tile