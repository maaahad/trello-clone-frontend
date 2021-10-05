// --------------------------------------------------
// import

// react

// nextjs
import Head from "next/head";
import Image from "next/image";

// in-house components
import Nav from "../components/landing/nav";
import Hero from "../components/landing/hero";

// sass styles
import styles from "../styles/home.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trello</title>
        <meta
          name="description"
          content="This is a clone of Trello - For Training Purpose only. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className={styles.header}>
        <Nav />
      </header>
      {/* main */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <Hero />
        </div>
      </main>

      {/* footer */}
      <footer className={styles.footer}>This is footer</footer>
    </div>
  );
}
