// --------------------------------------------------
// import

// react

// nextjs
import Head from "next/head";
import Image from "next/image";

// in-house components
import Nav from "../components/landing/nav";

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
        {/* < 768px */}
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2>Trello helps teams move work forward.</h2>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            {/* input for >= 768px */}
            <input type="email" placeholder="Email" />
            <button type="button">Sign up-it's free!</button>
          </div>
          {/* >=992px */}
          <div className={styles.heroRight}>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
              alt="Trello Hero Image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        </div>

        {/* || repeating for test */}
        {/* < 768px */}
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2>Trello helps teams move work forward.</h2>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            {/* input for >= 768px */}
            <input type="email" placeholder="Email" />
            <button type="button">Sign up-it's free!</button>
          </div>
          {/* >=992px */}
          <div className={styles.heroRight}>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
              alt="Trello Hero Image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        </div>
        {/* < 768px */}
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2>Trello helps teams move work forward.</h2>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            {/* input for >= 768px */}
            <input type="email" placeholder="Email" />
            <button type="button">Sign up-it's free!</button>
          </div>
          {/* >=992px */}
          <div className={styles.heroRight}>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
              alt="Trello Hero Image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        </div>
        {/* < 768px */}
        <div className={styles.hero}>
          <div className={styles.heroLeft}>
            <h2>Trello helps teams move work forward.</h2>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              From high rises to the home office, the way your team works is
              unique—accomplish it all with Trello.
            </p>
            {/* input for >= 768px */}
            <input type="email" placeholder="Email" />
            <button type="button">Sign up-it's free!</button>
          </div>
          {/* >=992px */}
          <div className={styles.heroRight}>
            <img
              src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
              alt="Trello Hero Image"
              style={{ width: "100px", height: "auto" }}
            />
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className={styles.footer}>This is footer</footer>
    </div>
  );
}
