// react
import React, { useState } from "react";

// nextjs
import Image from "next/image";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";

// in-house components

// in-house hooks
import { useInput } from "../../lib/hooks";

// sass styles
import styles from "../../styles/account/signup-trello.module.sass";

// should be moved to its own file
function Form({ setThirdPartyAuth }) {
  const [displayFullnameInput, setDisplayFullnameInput] = useState(false);

  const [emailProps, resetEmail] = useInput("");
  const [fullnameProps, resetFullname] = useInput("");
  const [subscriptionProps, resetSubscription] = useInput(false);

  const onEmailChange = (event) => {
    // controlling the display of thirdpartyauth based on user input to email field
    event.target.value ? setThirdPartyAuth(false) : setThirdPartyAuth(true);
    emailProps.onChange(event);
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
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.name.value);
    console.log(event.target.elements.subscription.checked);
  };

  return (
    <form
      className={styles.form}
      onSubmit={displayFullnameInput ? onSubmitOnSignup : onSubmitOnContinue}
    >
      <input
        type="email"
        name="email"
        value={emailProps.value}
        placeholder="Enter email"
        onChange={onEmailChange}
        required
      />
      {displayFullnameInput && (
        <>
          <input
            type="text"
            name="name"
            value={fullnameProps.value}
            placeholder="Enter full name"
            onChange={fullnameProps.onChange}
            required
          />
          <div className={styles.offerSubscription}>
            <input
              type="checkbox"
              name="subscription"
              checked={subscriptionProps.value}
              onChange={subscriptionProps.onChange}
              id="subscription"
            />
            <label htmlFor="subscription">
              Yes! Send me news and offers from Atlassian about products,
              events, and more.
            </label>
          </div>
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

export default function SignupTrello() {
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
