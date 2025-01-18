import React, { useEffect, useState } from 'react'
import './Faq.css'

function Faqitem({faq,index}) {
    const [show,setShow]=useState(false)
    // useEffect(()=>{
    //     if(index===0){
    //         setShow(true)
    //     }
    // },[])

    function handleClick(){
        setShow((prev)=>!prev)
    }
  return (
    <div className='container-class' onClick={handleClick}>
        <button className= {show ?'arrow':""}>></button>
    <div>{faq.question} </div>
  {show && <div >{faq.answer}</div>}
    </div>
  )
}

export default Faqitem
