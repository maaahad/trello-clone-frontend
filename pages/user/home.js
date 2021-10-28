// react

// nextjs
import { useRouter } from "next/router";
import Link from "next/link";

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
import WorkspaceCard from "../../features/user/workspaceCard";
import HomeLeft from "../../features/user/homeLeft";

// in-house hooks

// in-house libs

// sass styles
import styles from "../../styles/user/home.module.sass";

export default function UserHome() {
  const currentUser = useSelector(selectCurrentUser);

  console.log("Current User : ", currentUser);
  // here we use the current user to fetch workspaces for the uesr using SWR
  //  user information is passed as the query string
  const router = useRouter();

  // console.log("Query Parameter : ", router.query);
  // if (!currentUser) return <h1> User home page .... coming soon ....</h1>;
  return (
    <Layout title="Boards | Trello" nav={true}>
      <div className={styles.contentContainer}>
        <div className={styles.asideLeft}>
          <HomeLeft />
        </div>
        <div className={styles.workspacesContainer}>
          <h3 className={styles.workspacesTitle}>Your Workspaces</h3>
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <WorkspaceCard />
          <div className={styles.viewClosedBoards}>
            {/* || todo : add links ot all closed books */}
            <Link href="/" passHref>
              <a className={styles.viewClosedBoardsAnchor}>
                View all closed boards
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
