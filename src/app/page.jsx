import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.heroitem}>
        <h1 className={styles.herotitle}>Welcome to the NFT Marketplace</h1>
        <p className={styles.herodesc}>
          {" "}
          Explore the world of NFTs and buy and sell your favorite NFTs here{" "}
        </p>
        <Button url="/" text="Explore NFTs"></Button>
      </div>
      <div className={styles.heroitem}>
        <Image src={Hero} alt="Hero" width={500} height={500} />
      </div>
    </div>
  );
}
