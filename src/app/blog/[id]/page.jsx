import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { dark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ClipButton from "@/components/ClipButton/ClipButton";

async function getData(id) {
  const res = await fetch(`https://oldbee.netlify.app/api/posts/${id}`);

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
      <div className={styles.clipboard}>
        <div className={styles.clipboardButton}>
          <ClipButton text={data.content} />
        </div>
        <div>
          <SyntaxHighlighter
            language="jsx"
            style={dark}
            customStyle={{
              textAlign: "left",
            }}>
            {data.content}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
