import React from "react";

const Button = ({ buttonType, buttonLabel, buttonClass, buttonClick }) => {
  return (
    <button type={buttonType} className={buttonClass} onClick={buttonClick}>
      {buttonLabel}
    </button>
  );
};

export default Button;
