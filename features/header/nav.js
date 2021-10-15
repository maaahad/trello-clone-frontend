// import
// react
import React from "react";

// react icons
import { FaTrello } from "react-icons/fa";

import { BiSearch, BiPlus, BiBell } from "react-icons/bi";

// nextjs
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// action creator and selector
import { userLoggedOut, selectCurrentUser } from "../users/usersSlice";

// in-house components

// in-house hooks

// in-house libs
import { jsonFetch } from "../../lib/backend-fetch";

// sass styles
import styles from "../../styles/header/nav.module.sass";

function DotRow() {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default function Nav() {
  // currentUser should be in the redux store
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const currentUser = useSelector(selectCurrentUser);
  // test logout
  // const logout = (event) => {
  //   event.preventDefault();
  //   const rootUrl = process.env.NEXT_PUBLIC_TRELLO_BACKEND_URL_ROOT;
  //   const body = {
  //     id: currentUser._id,
  //   };
  //   jsonFetch(`${rootUrl}/account/user/logout`, "put", body).then(
  //     (messageFromDb) => {
  //       console.log(messageFromDb);
  //       dispatch(userLoggedOut());
  //       router.push({ pathname: "/" });
  //     }
  //   );
  // };
  return (
    <nav className={styles.nav}>
      <div>
        <button type="button">
          <DotRow />
          <DotRow />
          <DotRow />
        </button>
        <button type="button">
          <FaTrello />
        </button>
        <button type="button">
          <BiSearch />
        </button>
      </div>
      <div>
        <Image src="/trello-logo.svg" width={50} height={40} />
      </div>
      <div>
        <button type="button">
          <BiPlus />
        </button>
        <button type="button">
          <BiBell />
        </button>
        <button type="button">MA</button>

        <Link href="/account/logout" passHref>
          <a>Logout</a>
        </Link>
      </div>
    </nav>
  );
}
