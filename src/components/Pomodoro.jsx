import React from "react";
import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import "../style/pomodoro.css";

const Pomodoro = () => {
  let [secs, setSecs] = useState(5);
  let [mins, setMins] = useState(0);
  let [run, setRun] = useState(false);
  let [startStop, setStartStop] = useState("Start");
  
  function handleStartStopClick() {
    setRun(!run);
    startStop === "Start" ? setStartStop("Stop") : setStartStop("Start");
  }

useEffect(() => {
  if(secs === 0 && mins === 0 ){
    setStartStop("Start");
    setMins(25);
    return setRun(false) ; }

  if(run){
    let myInterval = setInterval( () => {
    clearInterval(myInterval);

    if(secs === 0) {
      if (mins !== 0){
        setSecs(59);
        setMins(mins - 1);
      }else{
        setSecs(59);
        setRun(!run);
        setStartStop("Start");
      }
      }else{
        setSecs(secs -1);
      }
    }, 1000);
  }
  }, [run, mins, secs]);

  return (
    <>
      <div id="pomodoro">
        <div className="mins" value={mins}>{mins < 10 ? "0" + mins : mins} </div>
        <div className="dots">:</div>
        <div className="mins" value={secs}>{secs < 10 ? "0" + secs : secs} </div>
      </div>
      <Buttons onClick={() => { handleStartStopClick(); }} className="controls"> {" "} {startStop} </Buttons><br/>
      <Buttons disabled={run} onClick={() => { setMins(mins + 1); }} className="controls"> {" "} Add mins {" "} </Buttons>
      <Buttons disabled={run} onClick={() => { setMins(mins - 1); }} className="controls"> {" "} Del mins {" "} </Buttons>
    </>
  );
};

export default Pomodoro;