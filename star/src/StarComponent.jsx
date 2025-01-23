import React, { useState } from 'react'
import './StarComponent.css'

function StarComponent() {
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)
    console.log(hover)
  
  return (
    <div className='outer-container'>
        <h3>Star Rating</h3>
    <div className='star-container'>
        {[1,2,3,4,5].map((numb,index)=>(
     <span id={index+1} onMouseEnter={()=>setHover(numb)} onMouseLeave={()=>setHover(rating)} onClick={()=>setRating(numb)} className={index<(rating|| hover)?'star-class-select':'star-class'} key={index}>&#9733;</span>
    ))
        }
    </div>
    <h3>Your Rating :- > {rating}</h3>
    </div>
  )
}

export default StarComponent
