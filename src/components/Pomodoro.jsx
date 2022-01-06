import React from 'react';
import { useState, useEffect } from 'react';
import '../style/pomodoro.css';
import Buttons from './Buttons';

const Pomodoro = () => {
    const [secs, setSecs] = useState(0);
    const [mins, setMins] = useState(9);
    const [run, setRun] = useState(false); 

   
      return(
        <>
        <div id="pomodoro">
            <div className="mins" value={mins}>
                { mins < 10 ? "0" + mins : mins }
            </div>
            <div className="dots">:</div>
            <div className="mins" value={secs}> 
                { secs < 10 ? "0" + secs : secs }
            </div>
        </div>

            <Buttons  className="controls" value="Start" />

            {/* <Buttons onClick={() => setStop(false)} disabled={startBut} className="controls">Start</Buttons> */}
            {/* <Buttons onClick={() => setStop(true)} hidden={stopBut} className="controls">Stop</Buttons> */}
        </>
    );
}

export default Pomodoro;