import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
const Herosection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <h1 className={styles.herotitle}>Welcome to the NFT Marketplace</h1>
        <p className={styles.herodesc}>
          {" "}
          Explore the world of NFTs and buy and sell your favorite NFTs here{" "}
        </p>
        <Button url="/" text="Explore NFTs"></Button>
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
