// react
import React, { useRef } from "react";

// nextjs
import { useRouter } from "next/router";

// react icons

// react-redux
import { useSelector, useDispatch } from "react-redux";

// thunk creator
import { selectCurrentUser, logout } from "../user/userSlice";
// in-houser hooks
import { useInput } from "../../lib/hooks";

import {
  BiSearch,
  BiBell,
  BiInfoCircle,
  BiX,
  BiUpArrowAlt,
} from "react-icons/bi";

// sass styles
import styles from "../../styles/header/rightNav.module.sass";

function FullSearch() {
  const conRef = useRef();
  const [{ value, onChange }, reset] = useInput("");
  const onFocus = () => {
    conRef.current.style.backgroundColor = "#fff";
    conRef.current.style.color = "#172b4d";
    conRef.current.style.borderColor = "transparent";
  };

  const onBlur = () => {
    conRef.current.style.backgroundColor = "#3588b9";
    conRef.current.style.color = "white";
    conRef.current.style.borderColor = "#7bb1d2";
  };

  return (
    <div ref={conRef} className={styles.fullSearchContainer}>
      <BiSearch />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <div className={styles.searchInputRight}>
        <button type="button">
          <BiUpArrowAlt />
        </button>
        <button type="button">
          <BiX />
        </button>
      </div>
    </div>
  );
}

export default function RightNav({ toggleUserDropdownMenu = (f) => f }) {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // successful logout will automatically reset state.user along with state.user.status
  const fetchStatus = useSelector((state) => state.user.status);
  const router = useRouter();

  const onLogout = (event) => {
    const rootUrl = process.env.NEXT_PUBLIC_TRELLO_BACKEND_URL_ROOT;
    // it will do only the previous fetchStatus was succeeded
    if (fetchStatus === "succeeded") {
      dispatch(
        logout({
          url: `${rootUrl}/account/user/logout/${currentUser._id}`,
          method: "put",
        })
      ).then(() => {
        router.push({
          pathname: "/",
        });
      });
    }
  };
  return (
    <div className={styles.rightNavContainer}>
      <button type="button" className={styles.searchButton}>
        <BiSearch />
      </button>

      <FullSearch />

      <button type="button" className={styles.infoButton}>
        <BiInfoCircle />
      </button>
      <button type="button" className={styles.notificationButton}>
        <BiBell />
      </button>
      <button
        type="button"
        className={styles.userButton}
        onClick={toggleUserDropdownMenu}
      >
        {/* || todo : The following should be initial of each name, not the initial of firstname */}
        {currentUser.name.slice(0, 2).toUpperCase()}
      </button>
    </div>
  );
}
