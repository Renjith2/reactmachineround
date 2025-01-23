import React, { useState } from 'react'
import './Calc.css'

function Calc() {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '+', '-', '/', '*', '=', 'C', '.'
      ]
      const handleChange=(e)=>{
      setValue(e.target.value)
      }
      const [value,setValue]=useState("")
      const handleClick=(e)=>{
       const id=e.target.id;
       if(id === "C"){
        setValue("")
       }
       else if(id === "="){
        handleSubmit()
       }
       else{
       setValue((val)=>val+id)
       }
      }
      console.log(value)
      const handleSubmit =(e)=>{
        e?.preventDefault();
      const val=eval(value)
      setValue(val)
      }
  return (
    <div className='outer-container'>
     <h3> Calculator </h3>
      <div  className='input-box'>
        <input onChange={handleChange} value={value} type='text' className='input-field'/>
      </div>
      <div onClick={handleClick} className='button-container'>
       {arr.map((item,idx)=>(
        <button id={item} key={idx} className='button-class'>{item}</button>
       ))}
      </div>
    </div>
  )
}

export default Calc
