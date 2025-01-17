import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputtimer from "./Pages/Inputtimer/Inputtimer";
import Showtimer from "./Pages/Showtimer/Showtimer";

function App() {
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <>
      <h2>Countdown Timer</h2>
      {!start && <Inputtimer hours={hours} minutes={minutes} seconds={seconds} setStart={setStart} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds} />}

      {start && <Showtimer setStart={setStart} hours={hours} minutes={minutes} seconds={seconds} setHours={setHours} setMinutes={setMinutes} setSeconds={setSeconds}/>}
    </>
  );
}

export default App;
