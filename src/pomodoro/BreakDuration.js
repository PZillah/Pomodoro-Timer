import React from "react";
import { secondsToDuration } from "../utils/duration/index";

const BreakDuration = ({ currentBreak, setCurrentBreak, setActualBreak }) => {
  //create a click handler helper function to set min/max boundaries
  const handleClick = (event) => {
    if (event.target.id === "decrementBreak") {
      if (!(currentBreak - 1 * 60 < 1 * 60)) {
        // if currentBreak is not less than 1 (minimum)
        setCurrentBreak(currentBreak - 1 * 60); //then decrement by 1 min
        setActualBreak(currentBreak - 1 * 60);
      }
    }
    if (event.target.id === "incrementBreak") {
      if (!(currentBreak + 1 * 60 > 15 * 60)) {
        setCurrentBreak(currentBreak + 1 * 60);
        setActualBreak(currentBreak + 1 * 60);
      }
    }
  };

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-break">
        {/* TODO: Update this text to display the current break session duration */}
        Break Duration: {secondsToDuration(currentBreak)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
        <button
          id="decrementBreak"
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-break"
        >
          <span id="decrementBreak" className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
        <button
          id="incrementBreak"
          onClick={handleClick}
          type="button"
          className="btn btn-primary"
          data-testid="increase-break"
        >
          <span id="incrementBreak" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};

export default BreakDuration;
