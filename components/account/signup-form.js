// react
import React, { useState } from "react";

// nextjs
import Image from "next/image";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// in-house components

// sass styles
import styles from "../../styles/account/signup-form.module.sass";

function Form() {
  const [email, setEmail] = useState();
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <form className={styles.form}>
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={onEmailChange}
      />
      <p className={styles.policy}>
        By signing up, you confirm that you've read and accepted our{" "}
        <a href="/signup">Terms of Service</a> and{" "}
        <a href="/signup">Privacy Policy</a>.
      </p>
      <button type="button" className={styles.continueButton}>
        Continue
      </button>
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
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.formContainer}>
        <h1>Sign up for your account</h1>
        <Form />
        <div className={styles.or}>OR</div>
        <ThirdPartyAuth />
        <div className={styles.horizontalDivider}></div>
        <a href="/signin" className={styles.anchorTag}>
          Already have an account? Log In
        </a>
      </div>
      <div className={styles.languageChoice}>
        <LanguageSelect />
      </div>
      <footer className={styles.footer}>
        This will be the footer...This will have a complete separate component
        to be used by other page
      </footer>
    </div>
  );
}
