"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState(null);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/dashboard/login");
    }
    async function getData() {
      if (status === "authenticated") {
        const res = await fetch("https://oldbee.netlify.app/api/posts", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        setData(await res.json());
      }
    }
    getData();
  }, [session, status]);

  const handleSubmit = async (e) => {
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
    if (res.ok) {
      setDesc("");
      setImg("");
      setTitle("");
      setContent("");
      setUsername("");
    } else {
      console.log("hata");
    }
  };
  const handleEdit = async () => {
    //console.log("handleEdit called with id:", id);
    const data = {
      id,
      title,
      desc,
      img,
      content,
      username,
    };
    console.log("Sending data to API:", data);
    const res = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setDesc("");
      setImg("");
      setTitle("");
      setContent("");
      setUsername("");
      router.refresh();
    } else {
      console.log("Update failed with status:", res.status);
      // handle error
    }
  };

  const handleEditClick = (post) => {
    // set form values to post data
    setId(post._id);
    setTitle(post.title);
    setDesc(post.desc);
    setImg(post.img);
    setContent(post.content);
    setUsername(post.username);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    try {
      if (response.ok) {
        setData((prevData) => prevData.filter((post) => post._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {data?.map((post) => (
            <div className={styles.post} key={post._id}>
              <div className={styles.imgContainer}>
                <Image
                  alt={post.title}
                  src={post.img}
                  width={200}
                  height={100}
                  priority
                ></Image>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span
                className={styles.delete}
                onClick={() => handleDelete(post._id)}
              >
                X
              </span>
              <span
                className={styles.delete}
                onClick={() => handleEditClick(post)}
              >
                O
              </span>
            </div>
          ))}
        </div>

        <form
          onSubmit={isEditing ? handleEdit : handleSubmit}
          className={styles.new}
        >
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
  } else {
    return null;
  }
}
