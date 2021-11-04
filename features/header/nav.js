// import
// react
import React, {
  useState,
  useReducer,
  useRef,
  useCallback,
  useEffect,
} from "react";

// react icons
// nextjs
// in-house components
import LeftNav from "./leftNav";
import RightNav from "./rightNav";

// in-house hooks
import { useDropdown } from "../../lib/hooks";

// in-house libs

// sass styles
import styles from "../../styles/header/nav.module.sass";

export default function Nav() {
  const [
    displayDropdown,
    dropdownStyle,
    dropdownComponent,
    toggleDropdown,
    onDisplay,
    reset,
  ] = useDropdown({ displayOption: false, initialStyle: {} });

  // controlling hiding the dropdown while clicking on
  const onDropdownContainerClick = (event) => event.stopPropagation();

  // adding a click handler on window object
  useEffect(() => {
    // if dropdown is not display, there is nothing to do
    if (!displayDropdown) return;
    const toggle = () => {
      reset();
      toggleDropdown();
    };
    window.addEventListener("click", toggle);
    return () => window.removeEventListener("click", toggle);
  }, [displayDropdown]);

  return (
    <nav className={styles.nav}>
      <LeftNav onCreateClick={onDisplay} toggleDropdown={toggleDropdown} />
      <RightNav onUserClick={onDisplay} toggleDropdown={toggleDropdown} />
      {/* the left and right position of following will be controlled by ref */}
      {displayDropdown && (
        <section
          className={styles.dropdownMenuContainer}
          style={{ ...dropdownStyle }}
          onClick={onDropdownContainerClick}
        >
          {dropdownComponent}
        </section>
      )}
    </nav>
  );
}
