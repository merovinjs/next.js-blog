"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://oldbee.netlify.app/api/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setData(await res.json());
    }

    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
        img,
        content,
        username,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
  const handleDelete = async (id) => {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      // handle successful deletion
    } else {
      // handle error
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.posts}>
        {data?.map((post) => (
          <div className={styles.post} key={post._id}>
            <div className={styles.imgContainer}>
              <Image alt="" src={post.img} width={200} height={100}></Image>
            </div>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span
              className={styles.delete}
              onClick={() => handleDelete(post._id)}
            >
              X
            </span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.new}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.input}
        />
        <br />
        <label htmlFor="desc">Description:</label>
        <input
          type="text"
          id="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className={styles.input}
        />
        <br />
        <label htmlFor="img">Image:</label>
        <input
          type="text"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className={styles.input}
        />
        <br />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${styles.input} ${styles.textArea}`}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <br />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
