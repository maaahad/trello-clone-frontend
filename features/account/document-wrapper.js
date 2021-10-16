// --------------------------------------------------
// import

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house component
import Layout from "../../features/layout";
import PageBackground from "./page-background";

// testing footer
import Footer from "../footer";

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
              {renderAdditionalLinks()}
            </div>
          </div>

          <div className={styles.footerContainer}>
            <Footer />
            {/* <div className={styles.languageSelectionContainer}>
              <LanguageSelect />
              <VscChevronDown />
            </div>
            <div className={styles.atlassianNquickLinks}>
              Atlasian logo and Several Quick links ...
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
