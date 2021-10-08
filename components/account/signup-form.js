// react
import React, { useState } from "react";

// nextjs
import Image from "next/image";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

// in-house components

// sass styles
import styles from "../../styles/account/signup-form.module.sass";

function Form({ setThirdPartyAuth }) {
  const [email, setEmail] = useState("");
  const [displayFullnameInput, setDisplayFullnameInput] = useState(false);

  const onEmailChange = (event) => {
    event.target.value ? setThirdPartyAuth(false) : setThirdPartyAuth(true);
    setEmail(event.target.value);
  };

  const onSubmitOnContinue = (event) => {
    event.preventDefault();
    setDisplayFullnameInput(true);
    setThirdPartyAuth(true);
  };

  const onSubmitOnSignup = (event) => {
    event.preventDefault();
    console.log("I am signing up...");
    // || todo : here we do the ajax request to sign up the user
  };

  return (
    <form
      className={styles.form}
      onSubmit={displayFullnameInput ? onSubmitOnSignup : onSubmitOnContinue}
    >
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={onEmailChange}
        required
      />
      {displayFullnameInput && (
        <>
          <input type="text" placeholder="Enter full name" required />
          <div>
            {/* || todo : style checkbox */}
            <input type="checkbox" id="offer" />
            <label htmlFor="offer">
              Yes! Send me news and offers from Atlassian about products,
              events, and more.
            </label>
          </div>
          {/* use a checkbox with : Yes! Send me news and offers from Atlassian about products, events, and more. */}
        </>
      )}

      <p className={styles.policy}>
        By signing up, you confirm that you've read and accepted our{" "}
        <a href="/signup">Terms of Service</a> and{" "}
        <a href="/signup">Privacy Policy</a>.
      </p>
      {displayFullnameInput ? (
        <button type="submit" className={styles.signupButton}>
          Signup
        </button>
      ) : (
        <button type="submit" className={styles.continueButton}>
          Continue
        </button>
      )}
    </form>
  );
}

function OAuthButton({ label, Icon }) {
  return (
    <button type="button" className={styles.oauthButton}>
      <Icon />
      <span>{label}</span>
    </button>
  );
}

function ThirdPartyAuth() {
  return (
    <div className={styles.thirdpartyAuth}>
      <OAuthButton label="Continue with Google" Icon={FcGoogle} />
      <OAuthButton label="Continue with Facebook" Icon={FaFacebookF} />
      <OAuthButton label="Continue with Linkedin" Icon={FaLinkedinIn} />
    </div>
  );
}

function LanguageSelect() {
  const [language, setLanguage] = useState();
  const onLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  return (
    <select value={language} onChange={onLanguageChange}>
      <option value="english-uk">English (UK)</option>
      <option value="english-us">English (US)</option>
      <option value="swedish">Swedish</option>
    </select>
  );
}

export default function SignupForm() {
  // or and thirdparty auth only visible if the user does not start providing value for email
  const [thirdPartyAuth, setThirdPartyAuth] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.formContainer}>
        <h1>Sign up for your account</h1>
        <Form setThirdPartyAuth={setThirdPartyAuth} />

        {thirdPartyAuth && (
          <>
            <div className={styles.or}>OR</div>
            <ThirdPartyAuth />
          </>
        )}
        <div className={styles.horizontalDivider}></div>
        <a href="/signin" className={styles.anchorTag}>
          Already have an account? Log In
        </a>
      </div>
      <div className={styles.languageChoice}>
        <LanguageSelect />
        {/* we add a custom caret */}
        <VscChevronDown />
      </div>
      <footer className={styles.footer}>
        This will be the footer...This will have a complete separate component
        to be used by other page
      </footer>
    </div>
  );
}
