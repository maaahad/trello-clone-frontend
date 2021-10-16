// --------------------------------------------------
// import

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house component
import Layout from "../../features/layout";
import PageBackground from "./page-background";

// in-houser hooks
import { useInput } from "../../lib/hooks";

// react-icons
import { VscChevronDown } from "react-icons/vsc";

// sass styles
import styles from "../../styles/account/document-wrapper.module.sass";

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

export default function DocumentWrapper({
  title = "title",
  meta = {},
  form = <p>Form Not provided</p>,
  renderAdditionalLinks = (f) => f,
}) {
  return (
    <Layout title={title} meta={meta}>
      <div className={styles.container}>
        <PageBackground />
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

            <div className={styles.formContainer}>{form}</div>

            <div className={styles.additionalLinks}>
              {/* login : Privacy policy + Terms of Service */}
              {/* TODO: double check logout : Privacy policy + user Notice*/}
              {/* signup : no additional links */}
              {/* <Link href="/" passHref>
                <a>Privacy Policy</a>
              </Link>
              <div className={styles.dot}></div>
              <Link href="/" passHref>
                <a>Terms of Service</a>
              </Link> */}
              {renderAdditionalLinks()}
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
              Atlasian logo and Several Quick links ...
            </div>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
