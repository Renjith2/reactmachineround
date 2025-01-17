import React, { useState } from "react";
import "./Inputtimer.css";

function Inputtimer({ hours,minutes,seconds,setStart,setHours,setMinutes,setSeconds }) {
 
  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hour") {
      setHours(value);
    } else if (id === "minute") {
      setMinutes(Math.min(59, value));
    } else {
      setSeconds(Math.min(59, value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (hours || minutes || seconds) {
      setStart(true);
    }
  };
  return (
    <>
      <div className="timer-container">
        <input
          type="number"
          min={0}
          id="hour"
          onChange={handleChange}
          value={hours}
          className="hour-field"
        />
        <input
          type="number"
          min={0}
          max={60}
          id="minute"
          onChange={handleChange}
          value={minutes}
          className="minute-field"
        />
        <input
          type="number"
          min={0}
          max={60}
          id="second"
          onChange={handleChange}
          value={seconds}
          className="second-field"
        />
      </div>
      <div>
        <button onClick={handleSubmit} className="button-class">
          START
        </button>
      </div>
    </>
  );
}

export default Inputtimer;
