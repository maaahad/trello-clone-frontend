// react
import React, { useState, useEffect } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { VscChevronDown } from "react-icons/vsc";

// in-house components

// in-house hooks
import { useInput } from "../../lib/hooks";

// in-house libs
import { jsonFetch } from "../../lib/backend-fetch";

// sass styles
import styles from "../../styles/account/signup-form.module.sass";

// should be moved to its own file
function Form({
  setThirdPartyAuth = (f) => f,
  setDuplicateEmailError = (f) => f,
}) {
  const [displayFullnameInput, setDisplayFullnameInput] = useState(false);

  const [emailProps, resetEmail] = useInput("");
  const [fullnameProps, resetFullname] = useInput("");
  const [passwordProps, resetPassword] = useInput("");
  const [subscriptionProps, resetSubscription] = useInput(false);

  const router = useRouter();

  const onEmailChange = (event) => {
    // controlling the display of thirdpartyauth based on user input to email field
    event.target.value ? setThirdPartyAuth(false) : setThirdPartyAuth(true);
    emailProps.onChange(event);
  };

  const onContinueSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const rootUrl = process.env.NEXT_PUBLIC_TRELLO_BACKEND_URL_ROOT;
    jsonFetch(
      `${rootUrl}/account/user/${form.elements.email.value}`,
      "get"
    ).then((user) => {
      // the above fetch return user or null
      if (user) {
        setDuplicateEmailError(true);
      } else {
        setDuplicateEmailError(false);
        setDisplayFullnameInput(true);
        setThirdPartyAuth(true);
      }
    });
  };

  const onSignupFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const rootUrl = process.env.NEXT_PUBLIC_TRELLO_BACKEND_URL_ROOT;
    const body = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      subscribed: form.elements.subscribed.checked,
    };

    console.log("rooturl: ", rootUrl);

    jsonFetch(`${rootUrl}/auth/signup/inhouse`, "post", body).then(
      (jsonResponse) => {
        console.log(jsonResponse);
        router.push({
          pathname: "/user/home",
        });
      }
    );
  };

  // prefetch the /user/home
  // useEffect(() => {
  //   router.prefetch("/user/home");
  // }, []);

  return (
    <form
      className={styles.form}
      onSubmit={displayFullnameInput ? onSignupFormSubmit : onContinueSubmit}
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
          <input
            type="password"
            name="password"
            value={passwordProps.value}
            placeholder="Enter password"
            onChange={passwordProps.onChange}
            required
          />
          <div className={styles.offerSubscription}>
            <input
              type="checkbox"
              name="subscribed"
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
        <a href="/account/signup">Terms of Service</a> and{" "}
        <a href="/account/signup">Privacy Policy</a>.
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
      <option value="english-uk">English (UK)</option>
      <option value="english-us">English (US)</option>
      <option value="swedish">Swedish</option>
    </select>
  );
}

export default function SignupForm() {
  // or and thirdparty auth only visible if the user does not start providing value for email
  const [thirdPartyAuth, setThirdPartyAuth] = useState(true);
  const [duplicateEmailError, setDuplicateEmailError] = useState(false);

  return (
    <div className={styles.formSubContainer}>
      {duplicateEmailError && (
        <div className={styles.duplicateEmailError}>
          Hey, that email is already in use by another Trello account. You'll
          need to login with Atlassian to use Trello.
          <Link href="/account/login" passHref>
            <a className={styles.anchorTag}>Log In</a>
          </Link>
        </div>
      )}
      <h1>Sign up for your account</h1>
      <Form
        setThirdPartyAuth={setThirdPartyAuth}
        setDuplicateEmailError={setDuplicateEmailError}
      />

      {thirdPartyAuth && (
        <>
          <div className={styles.or}>OR</div>
          <ThirdPartyAuth />
        </>
      )}
      {/* <div className={styles.horizontalDivider}></div> */}
      <div className={styles.link}>
        <Link href="/account/login" passHref>
          <a className={styles.anchorTag}>Already have an account? Log In</a>
        </Link>
      </div>
    </div>
  );
}
