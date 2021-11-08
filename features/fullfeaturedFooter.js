// react

// nextjs
import Image from "next/image";

// react-icons
import { VscGlobe } from "react-icons/vsc";
import { FaCaretDown } from "react-icons/fa";

// in house component
import { LanguageSelect } from "./footer";

// sass styles
import styles from "../styles/fullfeaturedFooter.module.sass";

function FeatureLinks({ title, features }) {
  return (
    <div className={styles.featuerLinks}>
      <h5>{title}</h5>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>
            <a href="/">{feature}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopFooter() {
  return (
    <section className={styles.topFooterContainer}>
      <div className={styles.trelloLogoContainer}>
        <div className={styles.trelloLogo}>
          <Image
            src="/trello-logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Trello Logo"
          />
        </div>
      </div>
      <div className={styles.featuresContainer}>
        <FeatureLinks
          title="Get Started"
          features={[
            "Guide",
            "Templates",
            "Team Solutions",
            "Webinars",
            "Log In",
          ]}
        />
        <FeatureLinks
          title="Must-haves"
          features={[
            "Apps",
            "Automation",
            "Integrations",
            "Power-Ups",
            "Views",
          ]}
        />
        <FeatureLinks
          title="Level Up"
          features={["Pricing", "Standard", "Premium", "Enterprise"]}
        />
        <FeatureLinks title="Company" features={["About", "Jobs", "Legal"]} />
        <FeatureLinks
          title="Resources"
          features={["Blog", "Developers", "Help"]}
        />
      </div>
    </section>
  );
}

function BottomFooter() {
  return (
    <section className={styles.bottomFooterContainer}>
      <div className={styles.language}>
        <VscGlobe />
        <div className={styles.languageSelectionContainer}>
          <LanguageSelect />
          <FaCaretDown />
        </div>
      </div>
      <div>Social Networks</div>
      <div>Privacy Policy and Copyright</div>
    </section>
  );
}

export default function FullfeaturedFooter() {
  return (
    <section className={styles.fullfeaturedFooter}>
      <div>
        <TopFooter />
      </div>
      <div>
        <BottomFooter />
      </div>
    </section>
  );
}
