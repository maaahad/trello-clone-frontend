import React, { useState } from "react";

// input hooks to be used for form input control
// to handle the value and change of input widget
const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setValue(value);
  };
  return [{ value, onChange }, () => setValue(initialValue)];
};

export { useInput };
