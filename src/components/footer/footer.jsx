import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>created @oldbeedev</div>
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
  );
};

export default Footer;
