import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://oldbee.netlify.app/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Featuresection = async () => {
  const data = await getData();
  return (
    <div className={styles.posts}>
      {data?.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.postContainer}
          key={post._id}
        >
          <div className={styles.imgContainer}>
            <Image alt={post.title} src={post.img} fill={true} priority></Image>
          </div>
          <div className={styles.postBody}>
            <h2 className={styles.postTitle}>
              {post.title.length > 45
                ? post.title.slice(0, 45) + "..."
                : post.title}
            </h2>
            <h2 className={styles.postDesc}>
              {post.desc.length > 45
                ? post.desc.slice(0, 45) + "..."
                : post.desc}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Featuresection;
