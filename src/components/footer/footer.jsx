"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footerClassName =
    theme === "light" ? styles.lightFooter : styles.darkFooter;
  return (
    <div className={`${styles.wrapper} ${footerClassName}`}>
      <div className={styles.container}>
        <p className={styles.p}>created @oldbeedev</p>
        <div className={styles.imgContainer}>
          <Image
            src="/1.png"
            className={styles.logo}
            alt="oldbeedev facebook"
            width={25}
            height={25}
          />
          <Image
            src="/2.png"
            className={styles.logo}
            alt="oldbeedev instagram"
            width={25}
            height={25}
          />
          <Image
            src="/3.png"
            className={styles.logo}
            alt="oldbeedev twitter"
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
