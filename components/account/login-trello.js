// react
import React, { useState, useReducer } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";

// in-house components

// in-house hooks
import { useInput } from "../../lib/hooks";

// sass styles
import styles from "../../styles/account/login-trello.module.sass";

// should be moved to its own file
function Form({
  onLoginFormSubmit = (f) => f,
  setThirdPartyAuth = (f) => f,
  loginWithSSO = false,
}) {
  const [emailProps, resetEmail] = useInput("");
  const [passwordProps, resetPassword] = useInput("");

  const onEmailChange = (event) => {
    // controlling the display of thirdpartyauth based on user input to email field
    event.target.value ? setThirdPartyAuth(false) : setThirdPartyAuth(true);
    emailProps.onChange(event);
  };

  //   const onSubmitLoginForm = (event) => {
  //     event.preventDefault();
  //     console.log("I am signing up...");
  //     // || todo : here we do the ajax request to sign up the user
  //     console.log(event.target.elements.email.value);
  //     console.log(event.target.elements.name.value);
  //     console.log(event.target.elements.subscription.checked);
  //   };

  return (
    <form className={styles.form} onSubmit={onLoginFormSubmit}>
      {!loginWithSSO && (
        <input
          type="email"
          name="email"
          value={emailProps.value}
          placeholder="Enter email"
          onChange={onEmailChange}
          required
        />
      )}

      <input
        type="password"
        name="password"
        value={passwordProps.value}
        placeholder="Enter password"
        onChange={passwordProps.onChange}
        required
      />

      <button type="submit" className={styles.loginButton}>
        Log in {loginWithSSO && "with SSO"}
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

// should be moved to it's own file
function ThirdPartyAuth() {
  return (
    <div className={styles.thirdpartyAuth}>
      <OAuthButton label="Continue with Google" Icon={FcGoogle} />
      <OAuthButton label="Continue with Facebook" Icon={FaFacebookF} />
      <OAuthButton label="Continue with Linkedin" Icon={FaLinkedinIn} />
    </div>
  );
}

// Should be moved to its's own file
function LanguageSelect() {
  const [languageProps, ,] = useInput("english-uk");
  return (
    <select value={languageProps.value} onChange={languageProps.onChange}>
      <option value="english-uk" selected>
        English (UK)
      </option>
      <option value="english-us">English (US)</option>
      <option value="swedish">Swedish</option>
    </select>
  );
}

export default function LoginTrello() {
  // or and thirdparty auth only visible if the user does not start providing value for email
  const [thirdPartyAuth, setThirdPartyAuth] = useState(true);
  const [loginWithSSO, toggleLoginWithSSO] = useReducer(
    (loginWithSSO) => !loginWithSSO,
    false
  );

  //   login logic should be passed from here, so that it can decided between email + password and SSO
  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    // we need two different logic for two different login option
    if (loginWithSSO) {
      console.log("Trying to login with SSO: ");
    } else {
      console.log("Trying to login with email and password");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.formContainer}>
        <h1>Log in to Trello</h1>
        <Form
          onLoginFormSubmit={onLoginFormSubmit}
          setThirdPartyAuth={setThirdPartyAuth}
          loginWithSSO={loginWithSSO}
        />
        <div className={styles.or}>OR</div>
        {thirdPartyAuth && (
          <>
            <ThirdPartyAuth />
          </>
        )}
        {/* need to understand how to login with sso */}
        {/* <Link href={!loginWithSSO ? "/login-sso" : "/login"} passHref> */}
        <a className={styles.anchorTag} onClick={toggleLoginWithSSO}>
          {!loginWithSSO ? "Log in with SSO" : "Log in with email and password"}
        </a>
        {/* </Link> */}

        <div className={styles.horizontalDivider}></div>

        <div className={styles.otherOptions}>
          <Link href="/forgot" passHref>
            <a className={styles.anchorTag}>Can't login?</a>
          </Link>

          <div className={styles.dot}></div>
          <Link href="/signup" passHref>
            <a className={styles.anchorTag}>Sign up for an account</a>
          </Link>
        </div>
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
