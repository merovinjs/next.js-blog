import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
const Herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h1 className={styles.herotitle}>
          Welcome to my blog. Here I create Frontend content.
        </h1>
        <p className={styles.herodesc}>
          {" "}
          Explore the content I have created for frontend developers, such as
          button, cart, navbar designs and much more.{" "}
        </p>
        <Button url="/blog" text="Discover now"></Button>
      </div>
      <div className={styles.heroitem}>
        <Image
          src={"/hero.png"}
          alt="Hero"
          placeholder="blur"
          blurDataURL={"/hero.png"}
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Herosection;
