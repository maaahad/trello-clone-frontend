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
const useDropdown = ({ displayOption = false, initialStyle = {} }) => {
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

// this hooks will be use for displaying modal
const useModal = ({ displayOption = false, hideController }) => {
  const [modalContent, setModalContent] = useState(null);
  const [display, toggleDisplay] = useReducer((display) => {
    display && setModalContent(null);
    return !display;
  }, displayOption);

  const onDisplay = useCallback(
    ({ event, newModalContent = null }) => {
      // we don't want this click event to propagate to the window object
      event.stopPropagation();
      !display && toggleDisplay();
      // this will hide the button or clickable element that
      // make modal to display
      hideController();
      setModalContent(newModalContent);
    },
    [display]
  );

  return [display, toggleDisplay, modalContent, onDisplay];
};

// a hook to cotroll the Options for Custom Select
const useDropdownComponent = (displayOption = false) => {
  const [dropdownComponent, setDropdownComponent] = useState(null);

  const reset = () => {
    setDropdownComponent(null);
  };

  const [display, toggleDisplay] = useReducer(
    (display) => !display,
    displayOption
  );

  const _dropdownComponent = useMemo(
    () => dropdownComponent,
    [dropdownComponent]
  );

  const onControllerClick = useCallback(
    (event, renderComponent) => {
      event.stopPropagation();
      if (
        display &&
        _dropdownComponent?.constructor.name ===
          renderComponent.constructor.name
      ) {
        reset();
        toggleDisplay();
      } else {
        setDropdownComponent(renderComponent);
        !display && toggleDisplay();
      }
    },
    [display, _dropdownComponent]
  );

  return [display, _dropdownComponent, toggleDisplay, onControllerClick, reset];
};

export { useInput, useDropdown, useModal, useDropdownComponent };
