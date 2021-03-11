import React from "react";
import classNames from "../utils/class-names";

const TimerControls = ({
  playPause,
  isTimerRunning,
  currentFocus,
  currentBreak,
  setActualBreak,
  setActualFocus,
  setCurrentMode,
  setIsTimerRunning,
}) => {
  const handleStopBtn = (event) => {
    if (event.target.id === "stopBtn") {
      setActualFocus(currentFocus);
      setActualBreak(currentBreak);
      setCurrentMode("focus");
      setIsTimerRunning(false);
    }
  }
  return (
    <div>
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          id="playPause"
          type="button"
          className="btn btn-info"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            id="playPause"
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
        <button
          id="stopBtn"
          onClick={handleStopBtn}
          type="button"
          className="btn btn-danger"
          title="Stop the session"
        >
          <span id="stopBtn" className="oi oi-media-stop" />
        </button>
      </div>
    </div>
  );
};

export default TimerControls;
