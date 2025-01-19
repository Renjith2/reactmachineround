import React, { useState } from 'react'
import './Custom.css'
import Dialog from './Dialog'

function Custom() {
    const [accept,setAccept]=useState(false)
    const [modalOpen,setModalOpen]=useState(false)
    const[modalClose,setModalClose]=useState(true)
    const handleClick=()=>{
        setAccept(true)
     setModalOpen(true)
    }
  return (
    <div className='overlay-container'>
     {!accept &&<button onClick={handleClick} className='button-class'>Show Offer</button>}
     {accept && <Dialog modalClose={modalClose}  accept={accept} setAccept={setAccept} setModalClose={setModalClose} modalOpen={modalOpen} setModalOpen={setModalOpen}/>}
    </div>
  )
}

export default Custom
