import React, { useState, useReducer, useCallback, useMemo } from "react";

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

// dropdown hook
// it controls the visibility and the position of the dropdown
const useDropdown = ({ displayOption, initialStyle }) => {
  const [display, toggleDisplay] = useReducer(
    (display) => !display,
    displayOption
  );
  const [style, setStyle] = useState(initialStyle);
  const [dropdown, setDropdown] = useState(null);

  const _dropdown = useMemo(() => dropdown, [dropdown]);

  const reset = () => {
    setStyle(initialStyle);
    setDropdown(null);
  };

  // here ref is the element that control the visibility of the dropdown
  const onDisplay = useCallback(
    ({
      event,
      controllerRef,
      newDropdown = null,
      dropdownWidth = 304,
      align = null,
    }) => {
      // we stop the event propagation to avoid bubbling up the event
      // to the window object
      // Window object is responsible here for hiding the
      // drowdown by clicking outside of the dropdown
      event.stopPropagation();

      // if display is true, we just need to hide it
      // no need for style configuration
      if (
        display &&
        newDropdown?.constructor.name === _dropdown?.constructor.name
      ) {
        reset();
        return toggleDisplay();
      } else {
        setDropdown(newDropdown);
      }

      if (align && align === "right") {
        setStyle({ right: "5px" });
        !display && toggleDisplay();
        return;
      }
      // if not align or align === "left"
      const { left } = controllerRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const spaceOnRight = viewportWidth - left;
      spaceOnRight >= dropdownWidth
        ? setStyle({ left: `${left}px` })
        : setStyle({ left: 0 });

      !display && toggleDisplay();
    },
    [display, _dropdown]
  );

  return [display, style, _dropdown, toggleDisplay, onDisplay, reset];
};

export { useInput, useDropdown };
