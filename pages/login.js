// --------------------------------------------------
// import

// react

// nextjs
import Image from "next/image";
import Head from "next/head";

// in-house components

// sass styles
import styles from "../styles/login.module.sass";

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <Head>
        <title>Log in to Trello</title>
        <meta
          name="description"
          content="This is the log in page for Trello Clone"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* no nav here  : logo goes with the login form */}
      {/* <header>This is the header for login page</header> */}
      <main>
        <div className={styles.loginLeft}>
          <Image src="/account/left.png" layout="fill" objectFit="cover" />
        </div>
        <div className={styles.loginRight}>
          <Image src="/account/right.png" layout="fill" objectFit="cover" />
        </div>
      </main>
      {/* footer also goes with the login form */}
      {/* <footer>This is the footer</footer> */}
    </div>
  );
}
