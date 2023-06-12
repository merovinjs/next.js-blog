"use client";
import { useState } from "react";
import styles from "./FormPage.module.css";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");

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

  return (
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
  );
}
