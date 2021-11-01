// import
// react
import React, { useReducer } from "react";

// react icons
// nextjs
// in-house components
import LeftNav from "./leftNav";
import RightNav from "./rightNav";
import UserDropdownMenu from "./userDropdownMenu";

// in-house hooks

// in-house libs

// sass styles
import styles from "../../styles/header/nav.module.sass";

// react-redux
import { useSelector } from "react-redux";

//
import { selectCurrentUser } from "../user/userSlice";

// || we need a hook for toggle

export default function Nav() {
  const [displayUserDropdownMenu, toggleUserDropdownMenu] = useReducer(
    (displayUserDropdownMenu) => !displayUserDropdownMenu,
    false
  );
  return (
    <nav className={styles.nav}>
      <LeftNav />
      <RightNav toggleUserDropdownMenu={toggleUserDropdownMenu} />
      {displayUserDropdownMenu && (
        <section className={styles.userDropdownMenuContainer}>
          <UserDropdownMenu toggleUserDropdownMenu={toggleUserDropdownMenu} />
        </section>
      )}
    </nav>
  );
}
