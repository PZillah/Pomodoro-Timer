import React from "react";
import { secondsToDuration } from "../utils/duration/index";

const StatusMessage = ({
  currentFocus,
  actualFocus,
  currentBreak,
  actualBreak,
  currentMode,
}) => {
  // helper function will tell us which mode and currentFocus/currentBreak time

  const getHeading = () => {
    if (currentMode === "focus") {
      return `Focusing for ${secondsToDuration(currentFocus)} minutes`;
    }
    if (currentMode === "break") {
      return `On Break for ${secondsToDuration(currentBreak)} minutes`;
    }
  };
  const getSubHeading = () => {
    if (currentMode === "focus") {
      return `${secondsToDuration(actualFocus)} remaining`;
    }
    if (currentMode === "break") {
      return `${secondsToDuration(actualBreak)} remaining`;
    }
  };

  return (
    <div>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
      <h2 data-testid="session-title">{getHeading()}</h2>
      {/* TODO: Update message below to include time remaining in the current session */}
      <p className="lead" data-testid="session-sub-title">
        {getSubHeading()}
      </p>
    </div>
  );
};

export default StatusMessage;
