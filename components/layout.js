// import

// react

// nextjs
import Head from "next/head";

// in-house components

// sass styles
import styles from "../styles/layout.module.sass";

export default function Layout({
  children,
  title,
  meta = { name: "", content: "" },
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={meta.name} content={meta.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* navigaiton : except for login and signup form */}

      <main>{children}</main>

      {/* footer : except for login and signup form */}
    </div>
  );
}
