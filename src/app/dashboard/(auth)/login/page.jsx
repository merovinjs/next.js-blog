"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const session = useSession();
  if (session.status === "loading") {
    return <p>Loading</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <div>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
            required
          />
          <button className={styles.button}>Register</button>
        </form>
        <Link href="/dashboard/login">Login with existing account</Link>
      </div>

      <button onClick={() => signIn("github")}>Login with github</button>
    </div>
  );
};

export default Login;
