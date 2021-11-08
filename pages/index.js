// --------------------------------------------------
// import

// react

// nextjs
import Head from "next/head";
import Image from "next/image";

// in-house components
import Nav from "../features/landing/nav";
import Hero from "../features/landing/hero";
import TrelloProduct from "../features/landing/trello-product";
import FullfeaturedFooter from "../features/fullfeaturedFooter";

// sass styles
import styles from "../styles/home.module.sass";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trello - Clone - By - Muhammed Ahad</title>
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
        <section className={styles.hero}>
          <Hero />
        </section>
        <section className={styles.trelloProduct}>
          <TrelloProduct />
        </section>
      </main>

      {/* footer */}
      <footer className={styles.footer}>
        <FullfeaturedFooter />
      </footer>
    </div>
  );
}
