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
import UserDropdownMenu from "./userDropdownMenu";
import CreateDropdownMenu from "./createDropdownMenu";

// in-house hooks
import { useDropdownMenus } from "../../lib/hooks";

// in-house libs

// sass styles
import styles from "../../styles/header/nav.module.sass";

export default function Nav() {
  const [
    displayCreateDropdownMenu,
    createSectionStyle,
    toggleCreateDropdownMenu,
    onCreateClick,
  ] = useDropdownMenus({ displayOption: false, initialStyle: {} });

  const [
    displayUserDropdownMenu,
    userSectionStyle,
    toggleUserDropdownMenu,
    onUserClick,
  ] = useDropdownMenus({ displayOption: false, initialStyle: {} });

  // controlling hiding the dropdown while clicking on
  const onDropdownContainerClick = (event) => event.stopPropagation();

  // adding a click handler on window object
  useEffect(() => {
    // if dropdown is not displaye, there is nothing to do
    if (!displayUserDropdownMenu) return;
    const toggleDropdown = () => toggleUserDropdownMenu();
    window.addEventListener("click", toggleDropdown);
    return () => window.removeEventListener("click", toggleDropdown);
  }, [displayUserDropdownMenu]);

  return (
    <nav className={styles.nav}>
      <LeftNav onCreateClick={onCreateClick} />
      <RightNav onUserClick={onUserClick} />
      {/* the left and right position of following will be controlled by ref */}
      {displayUserDropdownMenu && (
        <section
          className={styles.dropdownMenuContainer}
          style={{ ...userSectionStyle }}
          onClick={onDropdownContainerClick}
        >
          <UserDropdownMenu toggleUserDropdownMenu={toggleUserDropdownMenu} />
        </section>
      )}
      {displayCreateDropdownMenu && (
        <section
          className={styles.dropdownMenuContainer}
          style={{ ...createSectionStyle }}
        >
          <CreateDropdownMenu
            toggleCreateDropdownMenu={toggleCreateDropdownMenu}
          />
        </section>
      )}
    </nav>
  );
}
