import React, { useEffect, useRef, useState } from "react";
import "./Otp.css";

function Otp() {
  const emptyArr = ["", "", "", ""];
  const inputRef = [useRef(), useRef(), useRef(), useRef()];
  const [input, setInput] = useState(emptyArr);
  const [missing,setMissing]=useState(emptyArr)
  const CODE="1234"
  useEffect(() => {
    inputRef[0].current.focus();
    console.log(input)
  }, []);
  const handleInput = (e, idx) => {
    const value = e.target.value;

    if (!/^\d/.test(value)) {
      e.target.value = "";
      return;
    }

    if (idx < emptyArr.length - 1) {
      inputRef[idx + 1].current.focus();
    }

    const copyInput = [...input];
    copyInput[idx] = value;
    setInput(copyInput);
  };

  const handleKeyDown = (e, idx) => {
    if (e.keyCode === 8) {
      const copyInput = [...input];
      console.log(idx);
      copyInput[idx] = "";
      setInput(copyInput);
      if (idx > 0) {
        inputRef[idx - 1].current.focus();
      }
    }
  };
  const handlePaste=(e)=>{
    const data=e.clipboardData.getData('text')
    if (!/^\d+$/.test(data) || data.length !== input.length) {
        setInput([...emptyArr]);
        inputRef[0].current.focus();
    return
    }
   const value=data.split("")
   setInput(value)
   inputRef[input.length-1].current.focus()


  }
const handleSubmit =()=>{
    const missed=input.map((item,i)=>{
       if(item === ""){
        return i
       }
}).filter((item)=>(item || item===0))
setMissing(missed)
if (missed.length) {
    return
  }

  const inputcopy=input.join('')
  const isMatch = inputcopy === CODE
  const msg= isMatch? "Valid Code" :"Invalid Code"
   alert(msg)
}
console.log(missing)
  return (
    <div className="outer-container">
      <div className="input-container">
        <h2>Two Factor code input</h2>
        <div className="input-box">
          {Array(4)
            .fill("")
            .map((_, idx) => (
              <input
                value={input[idx]}
                ref={inputRef[idx]}
                className={missing.includes(idx)?"input-field-empty":"input-field"}
                maxLength="1"
                onPaste={handlePaste}
                onChange={(e) => handleInput(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              />
            ))}
        </div>
        <button onClick={handleSubmit} className="button-class">Submit</button>
      </div>
    </div>
  );
}

export default Otp;
