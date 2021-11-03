// import
// react
import React, { useReducer, useRef } from "react";

// react icons
// nextjs
// in-house components
import LeftNav from "./leftNav";
import RightNav from "./rightNav";
import UserDropdownMenu from "./userDropdownMenu";
import CreateDropdownMenu from "./createDropdownMenu";

// in-house hooks

// in-house libs

// sass styles
import styles from "../../styles/header/nav.module.sass";

// || we need a hook for toggle
const useDropdown = (initial = false) => {
  const [display, toggleDisplay] = useReducer((display) => !display, initial);
  return [display, toggleDisplay];
};

export default function Nav() {
  const [displayUserDropdownMenu, toggleUserDropdownMenu] = useDropdown();
  const [displayCreateDropdownMenu, toggleCreateDropdownMenu] =
    useDropdown(true);

  // we need to make this ref available all the time
  const createSectionRef = useRef();

  const onCreateClick = (ref) => {
    // set up the position of modal
    const { left } = ref.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const rightSpace = viewportWidth - left;
    if (rightSpace >= 304) {
      createSectionRef.current.style.left = `${left}px`;
    } else {
      createSectionRef.current.style.left = 0;
    }
    // display the modal
    // toggleCreateDropdownMenu();
  };

  return (
    <nav className={styles.nav}>
      <LeftNav onCreateClick={onCreateClick} />
      <RightNav toggleUserDropdownMenu={toggleUserDropdownMenu} />
      {/* the left and right position of following will be controlled by ref */}
      {displayUserDropdownMenu && (
        <section className={styles.userDropdownMenuContainer}>
          <UserDropdownMenu toggleUserDropdownMenu={toggleUserDropdownMenu} />
        </section>
      )}
      {displayCreateDropdownMenu && (
        <section
          ref={createSectionRef}
          className={styles.createDropdownMenuContainer}
        >
          <CreateDropdownMenu
            toggleCreateDropdownMenu={toggleCreateDropdownMenu}
          />
        </section>
      )}
    </nav>
  );
}
