"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { FaArrowDown } from "react-icons/fa";
export const Codepenembed = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linkGroup}>
        <Link className={styles.visitMe} target="_blank" href={`https://codepen.io/oldbeedev/pen/GRwmWbG?editors=1010`}>
          {" "}
          <p>
            visit ME
            <FaArrowDown />
          </p>
        </Link>
      </div>
      <div className={styles.iframeContainer}>
        <iframe title="React Calculator" src={`//codepen.io/oldbeedev/embed/GRwmWbG?editors=1010?height=265&theme-id=dark&default-tab=result`}></iframe>
      </div>
    </div>
  );
};
