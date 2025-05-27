import React from "react";

const ProgressBar = ({
  progress,
  completedColor = "#4CAF50",
  incompleteColor = "#E0E0E0",
  thickness = 10,
}) => {
  const progressBarContainerStyle = {
    width: "90%",
    backgroundColor: incompleteColor,
    borderRadius: "5px",
    overflow: "hidden",
    height: `${thickness}px`,
  };

  const progressBarFillStyle = {
    width: `${progress}%`,
    backgroundColor: completedColor,
    height: "100%",
    borderRadius: "5px",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <div style={progressBarContainerStyle}>
      <div style={progressBarFillStyle}></div>
    </div>
  );
};

export default ProgressBar;
