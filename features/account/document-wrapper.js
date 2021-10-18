// --------------------------------------------------
// import

// nextjs
import Image from "next/image";

// in-house component
import Layout from "../../features/layout";
import PageBackground from "./page-background";

// in-houser hooks
import { useInput } from "../../lib/hooks";

// sass styles
import styles from "../../styles/account/document-wrapper.module.sass";

export default function DocumentWrapper({
  title = "title",
  meta = {},
  form = <p>Form Not provided</p>,
  renderAdditionalLinks = (f) => f,
  footer = <p>footer</p>,
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

          <div className={styles.footerContainer}>{footer}</div>
        </div>
      </div>
    </Layout>
  );
}
