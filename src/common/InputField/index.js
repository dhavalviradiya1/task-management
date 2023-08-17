import React from "react";

const InputFelid = ({
  inputLabel,
  inputName,
  inputType,
  inputPlaceholder,
  inputClass,
  inputLabelClass,
  inputOnChange,
  inputValue,
}) => {
  return (
    <div class="mb-6">
      <label for={inputName} className={inputLabelClass}>
        {inputLabel}
      </label>
      <input
        type={inputType}
        id={inputName}
        className={inputClass}
        placeholder={inputPlaceholder}
        onChange={inputOnChange}
        value={inputValue}
        required
      />
    </div>
  );
};

export default InputFelid;
