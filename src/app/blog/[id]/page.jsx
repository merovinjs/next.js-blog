import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";

async function getData(id) {
  const res = await fetch(`https://oldbee.netlify.app/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image src={data.img} alt="" width={40} height={40} className={styles.avatar} />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>

      <SyntaxHighlighter
        language="jsx"
        style={darcula}
        customStyle={{
          textAlign: "left",
        }}>
        {data.content}
      </SyntaxHighlighter>
    </div>
  );
};

export default BlogPost;
