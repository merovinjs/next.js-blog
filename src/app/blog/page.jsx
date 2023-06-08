import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
async function getData() {
  const res = await fetch(`https://oldbee.netlify.app/api/posts`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
}
const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.MainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={item.img}
              alt="blog"
              width={450}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.body}</h1>
            <p className={styles.desc}>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
