import React from "react";

const ProgressBar = ({
  currentMode,
  actualFocus,
  currentFocus,
  actualBreak,
  currentBreak,
}) => {
  const getProgressBarValue = () => {
    if (currentMode === "focus") {
      return 100 - 100 * (actualFocus / currentFocus);
    }
    if (currentMode === "break") {
      return 100 - 100 * (actualBreak / currentBreak);
    }
  };

  return (
    <div>
      <div className="progress" style={{ height: "20px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={getProgressBarValue()} // TODO: Increase aria-valuenow as elapsed time increases
          style={{ width: `${getProgressBarValue()}%` }} // TODO: Increase width % as elapsed time increases
        />
      </div>
    </div>
  );
};

export default ProgressBar;
