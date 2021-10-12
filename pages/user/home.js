// react

// nextjs
import { useRouter } from "next/router";

// react-icons

// in-house components
import Layout from "../../components/layout";

// in-house hooks

// in-house libs

// sass styles
// import styles from "../../styles/account/signup-trello.module.sass";

export default function UserHome() {
  // here we use the current user to fetch workspaces for the uesr using SWR
  //  user information is passed as the query string
  const router = useRouter();

  console.log("Query Parameter : ", router.query);
  return (
    <Layout
      title="Boards | Trello"
      nav={true}
      currentUser={{ email: router.query.email, id: router.query.id }}
    >
      <div>
        <div>This is User's ({router.query.email}) home page</div>
      </div>
    </Layout>
  );
}
