"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

import { useRouter } from "next/navigation";

const Dashboard = () => {
  //OLD WAY TO FETCH DATA

  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const data = await res.json()

  //     setData(data);
  //     setIsLoading(false);
  //   };
  //   getData()
  // }, []);

  const router = useRouter();

  //NEW WAY TO FETCH DATA

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("https://oldbee.netlify.app/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: "admin",
        }),
      });

      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  // const handleDelete = async (id) => {
  //   try {
  //     await fetch(`/api/posts/${id}`, {
  //       method: "DELETE",
  //     });
  //     mutate();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className={styles.container}>
      <div className={styles.posts}></div>
      <form className={styles.new} onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <input type="text" placeholder="Title" className={styles.input} />
        <input type="text" placeholder="Desc" className={styles.input} />
        <input type="text" placeholder="Image" className={styles.input} />
        <textarea
          placeholder="Content"
          className={styles.textArea}
          cols="30"
          rows="10"
        ></textarea>
        <button className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default Dashboard;
