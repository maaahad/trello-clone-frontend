// --------------------------------------------------
// import

// react

// nextjs
import Image from "next/image";
import Head from "next/head";

// in-house components
import Layout from "../components/layout";
import FormBackground from "../components/account/form-background";
import SignupForm from "../components/account/signup-form";

// sass styles
import styles from "../styles/signup.module.sass";

export default function Signup() {
  return (
    <Layout
      title="Create a Trello Account"
      meta={{
        name: "description",
        content: "This is the Signup page for Trello-Clone",
      }}
    >
      <div className={styles.signupContainer}>
        <FormBackground />
        <div className={styles.signupFormContainer}>
          <SignupForm />
        </div>
      </div>
    </Layout>
  );
}