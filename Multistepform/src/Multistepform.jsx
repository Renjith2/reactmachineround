import React, { useState } from "react";
import "./Multistepform.css";
import { dateValidations, emailValidations, nameValidations, passwordValidations } from "./Validations";

function Multistepform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [error,setError]=useState("")
  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "name") {
      setName(value);
    } else if (id === "email") {
      setEmail(value);
    } else if (id === "date") {
      setDate(value);
    }
    else if(id==="password"){
        setPassword(value)
    }
  }
  function handleClick(e) {
    setError(""); 
    if(submitCount===0){
        console.log("mate1")
        const nameError=nameValidations(name)
        console.log(nameError)
        if(nameError){
            console.log("mm")
        setError(nameError)
        return;
        }
    }
  
    if(submitCount===1){
        const emailError=emailValidations(email)
        if(emailError){
        setError(emailError)
        return;
        }
    }

   
    console.log("mmsss")
    if(submitCount===2){
        const dateError=dateValidations(date)
        if(dateError){
        setError(dateError)
        return;
        }
        console.log("mmzz")
    }
    if(submitCount===3){
        const passError=passwordValidations(password)
        if(passError){
        setError(passError)
        return;
        }
    }
    console.log("mate3!!!122")
    if(e.target.textContent==="Next"){
        console.log("Mate")
      setSubmitCount((x) =>x+ 1);
    }

    
    if(e.target.textContent==="Submit"){
        setSubmitCount((x) => 0);
        setName(null)
        setEmail(null)
        setPassword(null)
        setDate(null)
        setError("")
      }

  }

  function handleBack() {
    setError("")
    setSubmitCount((x) => x - 1);
  }
  return (
    <div className="outer-container">
      <div className="form-container">
        <div className="field-container">
        {error && <p className="error-message">{error}</p>}
          {submitCount === 0 && (
            <>
              <label className="label-class">Name</label>
              <input
                type="text"
                value={name}
                onChange={handleChange}
                id="name"
                className="input-field"
              />
            </>
          )}
          {submitCount === 1 && (
            <>
              <button onClick={handleBack} className="back-button">
                Back
              </button>
              <label className="label-class">Email</label>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                id="email"
                className="input-field"
              />
            </>
          )}

          {submitCount === 2 && (
            <>
              <button onClick={handleBack} className="back-button">
                Back
              </button>
              <label className="label-class">DOB</label>
              <input
                type="date"
                value={date}
                onChange={handleChange}
                id="date"
                className="input-field"
              />
            </>
          )}

{submitCount === 3 && (
            <>
              <button onClick={handleBack} className="back-button">
                Back
              </button>
              <label className="label-class">Password</label>
              <input
                type="password"
                value={password}
                onChange={handleChange}
                id="password"
                className="input-field"
              />
            </>
          )}
        </div>
        <button onClick={handleClick} className="button-class">
         {submitCount===3? "Submit":"Next"}
        </button>
      </div>
    </div>
  );

}

export default Multistepform;
