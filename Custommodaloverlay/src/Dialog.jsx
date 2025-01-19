import React, { useState } from 'react'
import Modal from 'react-modal'
import './Custom.css'

function Dialog({modalClose,setModalClose,modalOpen,setModalOpen,setAccept,accept}) {
    const [acceptOffer,setAcceptOffer]=useState(false)
    const handleClose=()=>{
        setModalOpen(false)
        setModalClose(true)
       setAccept(false)
    }
    const handleOutside=(e)=>{
        if (e.target.className==='outer-div'){
        setModalOpen(false)
        setModalClose(true)
       setAccept(false)
        }
        
    }
    const acceptFn=(e)=>{
            setModalOpen(false)
            setModalClose(true)
            setAcceptOffer(true)
    }
  return (
    <div onClick={handleOutside} className='outer-div'>
     {!acceptOffer && (<Modal
      isOpen={modalOpen}
      onRequestClose={modalClose}
       overlayClassName="class-overlay"
      className="class-modal">
        <button onClick={handleClose} className='close-button'>X</button>
        <p>Click the button given below to accept the offer!!!</p>
        <button onClick={acceptFn} className='accept-button'>Accept Offer</button>
      </Modal>)
}
{acceptOffer && <div className='offer-div'>Offer Accepted</div>}
      </div>
    
  )
}

export default Dialog

