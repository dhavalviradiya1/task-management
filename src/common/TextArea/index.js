import React from "react";

const TextArea = ({
  inputLabel,
  inputName,
  inputPlaceholder,
  inputClass,
  inputLabelClass,
  inputOnChange,
  inputValue,
}) => {
  return (
    <>
      <label for={inputName} className={inputLabelClass}>
        {inputLabel}
      </label>
      <textarea
        id={inputName}
        rows="4"
        className={inputClass}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        value={inputValue}
      ></textarea>
    </>
  );
};

export default TextArea;
