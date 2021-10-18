// --------------------------------------------------
// import

// react

// nextjs
import Image from "next/image";
import Link from "next/link";

// react-icons
import { VscArrowRight } from "react-icons/vsc";

// sass styles
import styles from "../../styles/landing/trello-product.module.sass";

// ||note : styles is a JS object, so we can use computed properties by passing classname as a string

export default function TrelloProduct() {
  return (
    <div className={styles.container}>
      <div className={styles.doTrello}>
        <h2>It’s more than work. It’s a way of working together.</h2>
        <p>
          Start with a Trello board, lists, and cards. Customize and expand with
          more features as your teamwork grows. Manage projects, organize tasks,
          and build team spirit—all in one place.
        </p>
        <Link href="/signup" passHref>
          <a className={styles.startDoingButton}>
            <span>Start doing</span> <VscArrowRight />
          </a>
        </Link>
      </div>
      <div className={styles.boardImgContainer}>
        <Image
          src="/landing/trello-board.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.trelloCustomers}>
        <p>
          Join over 1,000,000 teams worldwide that are using Trello to get more
          done.
        </p>
        <div className={styles.trelloCustomersLogo}>
          {/* a number of svg icon for Google, Tender, squarespace and costco wholesale */}
          {/* log reference : https://freebiesupply.com/logos/ */}
          <div className={styles.googleLogo}>
            {/* we need a image with at least 480px width */}
            <Image
              src="/landing/google-logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.fenderLogo}>
            <Image
              src="/landing/fender-logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.squarespaceLogo}>
            <Image
              src="/landing/squarespace-logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.constcoLogo}>
            <Image
              src="/landing/costco-wholesale-logo.svg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
