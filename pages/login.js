// --------------------------------------------------
// import

// react

// nextjs
import Image from "next/image";
import Head from "next/head";

// in-house components
import Layout from "../features/layout";
import FormBackground from "../features/account/form-background";
import LoginTrello from "../features/account/login-trello";

// sass styles
import styles from "../styles/login.module.sass";

export default function Login() {
  return (
    <Layout
      title="Login to Trello - Clone"
      meta={{
        name: "description",
        content: "This is the Login page for Trello-Clone",
      }}
    >
      <div className={styles.loginContainer}>
        <FormBackground />
        <div className={styles.loginFormContainer}>
          {/* the following will be replaced by LoginTrello */}
          <LoginTrello />
        </div>
      </div>
    </Layout>
  );
}
