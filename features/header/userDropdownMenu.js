// react

// nextjs
import Link from "next/link";
import { useRouter } from "next/router";
// react icons
import { BiX } from "react-icons/bi";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// thunk creator
import { selectCurrentUser, logout } from "../user/userSlice";

// sass styles
import styles from "../../styles/header/userDropdownMenu.module.sass";

export default function UserDropdownMenu({
  toggleUserDropdownMenu = (f) => f,
}) {
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
    <div className={styles.userDropdownMenu}>
      <div className={styles.title}>
        <div className={styles.account}>Account</div>
        <button
          type="bytton"
          onClick={toggleUserDropdownMenu}
          className={styles.closeButton}
        >
          <BiX />
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.usersInitial}>MA</div>
          <div className={styles.nameNEmail}>
            <div>Muhammed Ahad</div>
            <div>maaahad@yahoo.com</div>
          </div>
        </div>
        <button type="button" className={styles.clickableMenuButton}>
          Add another account
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.profileOptions}>
        <Link href="/use/home">
          <a>Profile and visibility</a>
        </Link>
        <Link href="/use/home">
          <a>Activity</a>
        </Link>
        <Link href="/use/home">
          <a>Cards</a>
        </Link>
        <Link href="/use/home">
          <a>Settings</a>
        </Link>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.moreUserOptions}>
        <Link href="/use/home">
          <a>Help</a>
        </Link>
        <Link href="/use/home">
          <a>Shortcuts</a>
        </Link>
      </div>

      <div className={styles.divider}></div>

      <button
        type="button"
        className={styles.clickableMenuButton}
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
}
