// react

// nextjs
import { useRouter } from "next/router";
import Link from "next/link";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// action creator and selector
import { selectCurrentProfile } from "../../features/user/userSlice";

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
  const currentProfile = useSelector(selectCurrentProfile);
  const fetchStatus = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  let content = <h1>Nothing to return</h1>;
  if (fetchStatus === "loading") content = <h1>loading ...</h1>;
  else if (fetchStatus === "failed") content = <h1>{error}</h1>;
  else if (fetchStatus === "succeeded" || currentProfile) {
    content = (
      <Layout title="Boards | Trello" nav={true}>
        <div className={styles.contentContainer}>
          <div className={styles.asideLeft}>
            <HomeLeft />
          </div>
          <div className={styles.workspacesContainer}>
            <h3 className={styles.workspacesTitle}>
              Your ({currentProfile.user.email}) Workspaces
            </h3>
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

  // if current user is null, redirect to login page
  return content;
}
