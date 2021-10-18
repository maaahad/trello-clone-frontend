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
// import styles from "../../styles/account/signup-trello.module.sass";

export default function UserHome() {
  const currentUser = useSelector(selectCurrentUser);

  console.log("Current User : ", currentUser);
  // here we use the current user to fetch workspaces for the uesr using SWR
  //  user information is passed as the query string
  const router = useRouter();

  console.log("Query Parameter : ", router.query);
  if (!currentUser) return <p> User logged out</p>;
  return (
    <Layout
      title="Boards | Trello"
      nav={true}
      currentUser={{ email: currentUser.email, id: currentUser.id }}
    >
      <div>
        <div>This is User ({currentUser.email}) home page</div>
      </div>
    </Layout>
  );
}
