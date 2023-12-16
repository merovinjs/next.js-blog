import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button2 from "@/components/Button/Button2";
import Link from "next/link";
const Herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h1 className={styles.herotitle}>Welcome to my blog. Here I create Frontend content.</h1>
        <p className={styles.herodesc}> Explore the content I have created for frontend developers, such as button, cart, navbar designs and much more... </p>
      </div>
      <div className={styles.heroitem}>
        <Image src={"/hero.png"} alt="Hero" placeholder="blur" blurDataURL={"/hero.png"} width={500} height={500} />
        <Link className={styles.button} href="./editor">
          <Button2 />
        </Link>
      </div>
    </div>
  );
};

export default Herosection;
