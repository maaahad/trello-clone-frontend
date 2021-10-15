// --------------------------------------------------
// import

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house component
import Layout from "../../features/layout";
import LoginForm from "../../features/account/login-form";
import SignupForm from "../../features/account/signup-form";

// in-houser hooks
import { useInput } from "../../lib/hooks";

// react-icons
import { VscChevronDown } from "react-icons/vsc";

// sass styles
import styles from "../../styles/account/testing.module.sass";

// Should be moved to its's own file
function LanguageSelect() {
  const [languageProps, ,] = useInput("english-uk");
  return (
    <select value={languageProps.value} onChange={languageProps.onChange}>
      <option value="english-uk">English (UK)</option>
      <option value="english-us">English (US)</option>
      <option value="swedish">Swedish</option>
    </select>
  );
}

export default function Testing() {
  return (
    <Layout
      title="Test"
      meta={{
        name: "description",
        content: "This is the Log in page for Trello-Clone",
      }}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.logo}>
              <div className={styles.trelloLogo}>
                <Image
                  src="/trello-logo.svg"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>

            <div className={styles.formContainer}>
              {/* <LoginForm /> */}
              <SignupForm />
              {/* <h1>Log in to trello</h1>
              <form>
                <input type="text" placeholder="Your email" />

                <input type="password" placeholder="Your password" />
                <button type="button">Login / signup</button>
              </form>
              <div>OR</div>
              <div>Third party auth</div>
              <div>links in form container</div> */}
            </div>

            <div className={styles.additionalLinks}>
              {/* login : Privacy policy + Terms of Service */}
              {/* TODO: double check logout : Privacy policy + user Notice*/}
              {/* signup : no additional links */}
              <Link href="/" passHref>
                <a>Privacy Policy</a>
              </Link>
              <div className={styles.dot}></div>
              <Link href="/" passHref>
                <a>Terms of Service</a>
              </Link>
            </div>
          </div>

          <footer className={styles.footer}>
            {/* footer should hava border top, padding top */}
            <div className={styles.languageSelectionContainer}>
              <LanguageSelect />
              {/* we add a custom caret */}
              <VscChevronDown />
            </div>
            <div className={styles.quickLinks}>
              Atlasian logo and Several Quick links
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
