// import

// react

// nextjs
import Head from "next/head";

// in-house components
import Nav from "./header/nav";

// sass styles
import styles from "../styles/layout.module.sass";

export default function Layout({
  children,
  title,
  meta = { name: "", content: "" },
  nav = false,
  currentUser = null,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={meta.name} content={meta.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navigaiton : except for login and signup form */}
      {nav && (
        <header className={styles.navContainer}>
          <Nav currentUser={currentUser} />
        </header>
      )}

      <main>{children}</main>

      {/* footer : except for login and signup form */}
    </div>
  );
}
