import React, { useEffect, useState } from 'react'
import './Loancalculator.css'

function Loancalculator() {
    const [principal,setPrincipal]=useState(0)
    const [rate,setRate]=useState(0)
    const [year,setYear]=useState(0)
    const [emi ,setEmi]=useState(0)
    const handleChange=(e)=>{
        let value=e.target.value
       let id=e.target.id
       if(id==='principal'){
        setPrincipal(value)
       }
       else if(id==='rate'){
        setRate(value)
       }
       else if(id==='year'){
        setYear(value)
       }
    } 
    function calc() {
        const monthlyRate = rate / 100 / 12; 
        const totalMonths = year * 12; 
      
        // EMI calculation
        const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths);
        const denominator = Math.pow(1 + monthlyRate, totalMonths) - 1;
        const result = numerator / denominator;
      
        setEmi(Math.round(result || 0)); // Avoid NaN for invalid input
      }
    useEffect(()=>{
        calc()
    },[principal,year,rate])
  return (
    <div>
        
     <form className='form-container'>
     <h2>Count your monthly mortgage</h2>
       <label htmlFor='principal'>Principal</label>
       <input type="number" onChange={handleChange} value={principal} id='principal' name='principal' />

       <label htmlFor='rate'>Rate</label>
       <input type="number"  onChange={handleChange} value={rate} id='rate' name='rate' />

       <label htmlFor='year'>Year</label>
       <input type="number"  onChange={handleChange} value={year} id='year' name='year' />

      <h3>Your Monthly Mortgage is {emi}!!!</h3>
     </form>
    </div>
  )
}

export default Loancalculator
