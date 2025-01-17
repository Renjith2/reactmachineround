import React, { useEffect, useState } from 'react'
import './Showtimer.css'

function Showtimer({setStart, hours,minutes,seconds,setHours,setMinutes,setSeconds}) {
    const [reset,setReset]=useState(false)
    const [intervalId,setIntervalId]=useState(0)
    const handleclick=()=>{
        setReset((prev)=>!prev)
        if(!reset){
         clearInterval(intervalId)
        }
        if(reset){
            timer()
        }
    }

function timer(){
    if(seconds != 0){
        setSeconds((s)=>s-1)
    }

    else if(seconds === 0 && minutes>0){
        setSeconds(59)
        setMinutes((m)=>m-1)
    }

    else if (minutes ===0 && hours>0){
        setSeconds(59)
        setMinutes(59)
        setHours((h)=>h-1)
    }
    else if(minutes=== 0 && seconds === 0 && hours === 0){
      resetFn()
    }
}
function resetFn(){
    setSeconds(0)
        setMinutes(0)
        setHours(0)
    setStart(false)
}
    useEffect(()=>{
        var inter=setInterval(()=>{
            timer()
        },1000)
        setIntervalId(inter)
        return ()=> clearInterval(inter)
    },[hours ,minutes ,seconds])

  return (
    <>
    <div className='timer-container'>
      <div className='time-field'>{hours}</div>
      <div  className='time-field'>{minutes}</div>
      <div  className='time-field'>{seconds}</div>
    </div>

    <div>
        { !reset &&
            <button onClick={handleclick} className='button-class'>Pause</button>}
            { reset &&
            <button  onClick={handleclick} className='button-class'>Restart</button>}
        <button onClick={resetFn} className='button-class'>Reset</button>
    </div>
    </>
  )
}

export default Showtimer
