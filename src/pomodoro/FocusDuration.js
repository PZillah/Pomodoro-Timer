import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration/index";

const FocusDuration = ({ currentFocus, setCurrentFocus, setActualFocus }) => {
  //create a click handler helper function to set min/max boundaries
  const handleClick = (event) => {
    if (event.target.id === "decrementFocus") {
      if (!(currentFocus - 5 * 60 < 5 * 60)) {
        // subtract 5 only if currentFocus is above 5
        setCurrentFocus(currentFocus - 5 * 60);
        setActualFocus(currentFocus - 5 * 60);
      } 
      // else {
      //   setCurrentFocus(5); // delete this else statement after testing
      //   setActualFocus(5);
      // }
    }
    if (event.target.id === "incrementFocus") {
      if (!(currentFocus + 5 * 60 > 60 * 60)) {
        setCurrentFocus(currentFocus + 5 * 60);
        setActualFocus(currentFocus + 5 * 60);
      } 
      // else {
      //   setActualFocus(5);
      //   setCurrentFocus(5);
      // }
    }
  };

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text below to display the current focus session duration */}
        Focus Duration:{" "}
        {currentFocus === 60 * 60
          ? minutesToDuration(60)
          : secondsToDuration(currentFocus)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          id="decrementFocus"
          onClick={handleClick}
          type="button"
          className="btn btn-secondary"
          data-testid="decrease-focus"
        >
          <span id="decrementFocus" className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          id="incrementFocus"
          onClick={handleClick}
          type="button"
          className="btn btn-primary"
          data-testid="increase-focus"
        >
          <span id="incrementFocus" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
};

export default FocusDuration;
