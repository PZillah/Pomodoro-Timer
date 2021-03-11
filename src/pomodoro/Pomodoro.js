import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import FocusDuration from "./FocusDuration";
import BreakDuration from "./BreakDuration";
import TimerControls from "./TimerControls";
import StatusMessage from "./StatusMessage";
import ProgressBar from "./ProgressBar";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [currentFocus, setCurrentFocus] = useState(25 * 60);
  const [currentBreak, setCurrentBreak] = useState(5 * 60);
  const [actualFocus, setActualFocus] = useState(currentFocus); // represents time remaining
  const [currentMode, setCurrentMode] = useState("focus");
  const [actualBreak, setActualBreak] = useState(currentBreak);
  
  useInterval(
    () => {
      // for every second, change actual focus by 1
      if (currentMode === "focus") {
        setActualFocus(actualFocus - 1);
      }
      if (actualFocus === 0) {
        setCurrentMode("break");
        setActualBreak(currentBreak); // resets timer display
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      }
      if (currentMode !== "focus") {
        setActualBreak(actualBreak - 1);
      }
      if (actualBreak === 0) {
        setCurrentMode("focus");
        setActualFocus(currentFocus);
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
      }
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null // if isTimerRunning is true then call useInterval to countdown 1 second to wait btwn calls : do nothing
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <FocusDuration
            currentFocus={currentFocus}
            setCurrentFocus={setCurrentFocus}
            setActualFocus={setActualFocus}
          />
        </div>
        <div className="col">
          <div className="float-right">
            <BreakDuration
              currentBreak={currentBreak}
              setCurrentBreak={setCurrentBreak}
              setActualBreak={setActualBreak}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TimerControls
            playPause={playPause}
            isTimerRunning={isTimerRunning}
            currentFocus={currentFocus}
            currentBreak={currentBreak}
            setActualBreak={setActualBreak}
            setActualFocus={setActualFocus}
            setCurrentMode={setCurrentMode}
            setIsTimerRunning={setIsTimerRunning}
          />
        </div>
      </div>
      <div>
        <div className="row mb-2">
          <div className="col">
            <StatusMessage
              currentFocus={currentFocus}
              actualFocus={actualFocus}
              currentBreak={currentBreak}
              actualBreak={actualBreak}
              currentMode={currentMode}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <ProgressBar
            currentFocus={currentFocus}
            actualFocus={actualFocus}
            currentBreak={currentBreak}
            actualBreak={actualBreak}
            currentMode={currentMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
