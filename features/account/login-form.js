// react
import React, { useState, useReducer, useEffect } from "react";

// nextjs
import Link from "next/link";
import { useRouter } from "next/router";

// react-redux
import { useSelector, useDispatch } from "react-redux";

// action creator and selector
import { login } from "../user/userSlice";

// react-icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// in-house components

// in-house hooks
import { useInput } from "../../lib/hooks";
// in-houser libs

// sass styles
import styles from "../../styles/account/login-form.module.sass";

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

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.user.status);
  // or and thirdparty auth only visible if the user does not start providing value for email
  const [thirdPartyAuth, setThirdPartyAuth] = useState(true);
  const [loginWithSSO, toggleLoginWithSSO] = useReducer(
    (loginWithSSO) => !loginWithSSO,
    false
  );

  //   login logic should be passed from here, so that it can decided between email + password and SSO
  const onLoginFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // we need two different logic for two different login option
    if (loginWithSSO) {
      console.log("Trying to login with SSO: [NOT IMPLEMENTED YET]");
    } else {
      //  sending put request to the server to log the user in
      const rootUrl = process.env.NEXT_PUBLIC_TRELLO_BACKEND_URL_ROOT;
      const body = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      };

      if (fetchStatus === "idle") {
        dispatch(
          login({
            url: `${rootUrl}/auth/login/inhouse`,
            method: "put",
            body,
          })
        ).then(() => {
          router.push({
            pathname: "/user/home",
          });
        });
      }
    }
  };

  // prefetch the /user/hose
  useEffect(() => {
    router.prefetch("/user/home");
  }, []);

  return (
    <div className={styles.formSubContainer}>
      <h1 className={styles.formTitle}>Log in to Trello</h1>
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

      <div className={styles.links}>
        <Link href="/account/forgot" passHref>
          <a className={styles.anchorTag}>Can't login?</a>
        </Link>

        <div className={styles.dot}></div>
        <Link href="/account/signup" passHref>
          <a className={styles.anchorTag}>Sign up for an account</a>
        </Link>
      </div>
    </div>
  );
}
