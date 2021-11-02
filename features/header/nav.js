// import
// react
import React, { useReducer } from "react";

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

// react-redux
import { useSelector } from "react-redux";

//
import { selectCurrentUser } from "../user/userSlice";

// || we need a hook for toggle

const useDropdown = (initial = false) => {
  const [display, toggleDisplay] = useReducer((display) => !display, initial);
  return [display, toggleDisplay];
};

export default function Nav() {
  const [displayUserDropdownMenu, toggleUserDropdownMenu] = useDropdown();
  const [displayCreateDropdownMenu, toggleCreateDropdownMenu] = useDropdown();

  return (
    <nav className={styles.nav}>
      <LeftNav toggleCreateDropdownMenu={toggleCreateDropdownMenu} />
      <RightNav toggleUserDropdownMenu={toggleUserDropdownMenu} />
      {displayUserDropdownMenu && (
        <section className={styles.userDropdownMenuContainer}>
          <UserDropdownMenu toggleUserDropdownMenu={toggleUserDropdownMenu} />
        </section>
      )}
      {displayCreateDropdownMenu && (
        <section className={styles.createDropdownMenuContainer}>
          <CreateDropdownMenu
            toggleCreateDropdownMenu={toggleCreateDropdownMenu}
          />
        </section>
      )}
    </nav>
  );
}
