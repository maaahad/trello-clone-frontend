// react

// nextjs
import { useRouter } from "next/router";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// action creator and selector
import {
  userLoggedIn,
  userLoggedOut,
  selectCurrentUser,
} from "../../features/users/usersSlice";

// react-icons

// in-house components
import Layout from "../../features/layout";

// in-house hooks

// in-house libs

// sass styles
import styles from "../../styles/user/home.module.sass";

function Workspace() {
  return (
    <div className={styles.workspaceContainer}>
      <div className={styles.workspaceMetas}>
        <div>W</div>
        <h3 className={styles.workspaceTitle}>Title of the workspaces</h3>
        <div className={styles.workspaceMetaOptions}>
          <button>Boards</button>
          <button>Workspace table</button>
          <button>Members</button>
          <button>Settings</button>
          <button>Upgrade</button>
        </div>
      </div>
      <div className={styles.boardCardsContainer}>Boards</div>
    </div>
  );
}

export default function UserHome() {
  // const currentUser = useSelector(selectCurrentUser);

  // console.log("Current User : ", currentUser);
  // here we use the current user to fetch workspaces for the uesr using SWR
  //  user information is passed as the query string
  const router = useRouter();

  // console.log("Query Parameter : ", router.query);
  // if (!currentUser) return <h1> User home page .... coming soon ....</h1>;
  return (
    <Layout title="Boards | Trello" nav={true}>
      <div className={styles.contentContainer}>
        <div className={styles.asideLeft}>Aside left</div>
        <div className={styles.workspacesContainer}>
          <h3>Your Workspaces</h3>
          <Workspace />
        </div>
      </div>
    </Layout>
  );
}
