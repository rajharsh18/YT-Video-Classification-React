import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({
  isVisible = false,
  message = "Loading...",
  overlay = true,
}) => {
  if (!isVisible) return null;

  const spinnerContent = (
    <div className="loading-content">
      <div className="animate-spin rounded-full h-20 w-20 border-b-6 border-blue-700 mx-auto"></div>
      <p className="loading-message">{message}</p>
    </div>
  );

  if (overlay) {
    return <div className="loading-overlay">{spinnerContent}</div>;
  }

  return spinnerContent;
};

export default LoadingSpinner;
