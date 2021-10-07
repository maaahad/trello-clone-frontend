// react
import React, { useState } from "react";

// nextjs
import Image from "next/image";

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
      <button type="button">Continue</button>
    </form>
  );
}

function ThirdPartyAuth() {
  return (
    <div>
      <div>
        <button type="button">Continue with Google</button>
      </div>
      <div>
        <button type="button">Continue with Facebook</button>
      </div>
      <div>
        <button type="button">Continue with Apple</button>
      </div>
    </div>
  );
}

function LanguageSelect() {
  return (
    <select>
      <option value="englighUK">English(UK)</option>
      <option value="englighUK">English(US)</option>
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
        <div>OR</div>
        <ThirdPartyAuth />
        <div>horizontal line</div>
        <a href="/signin">Already have an account? Log In</a>
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
