"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { DataGet, GetCrntUser, UserGet } from "@/customHook/getCurrentUser";

export default function FormPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [id, setId] = useState(null);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const router = useRouter();

  const { data: session, status } = useSession();
  const { data: dataQuery, isLoading, isError, error } = DataGet();
  const { data: userQuery, isLoading: userLoading, isError: userError, error: userError2 } = UserGet();
  const { data: currentUserQuery, isLoading: currentUserLoading, isError: currentUserError, error: currentUserError2 } = GetCrntUser();
  const role = currentUserQuery?.role;
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

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    return (
      <div className={styles.yetkisiz}>
        Lütfen giriş yapınız
        <span>
          <Link href="/dashboard/login">Login</Link>
        </span>
      </div>
    );
  }
  if (status === "authenticated" && role === "admin") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {dataQuery &&
            dataQuery?.map((post) => (
              <div className={styles.postContainer} key={post._id}>
                <div className={styles.imgContainer}>
                  <Image alt={post.title} src={post.img} fill={true} priority></Image>
                </div>
                <div className={styles.postBody}>
                  <h3 className={styles.postTitle}>{post.title.length > 45 ? post.title.slice(0, 45) + "..." : post.title}</h3>

                  <div className={styles.spanContainer}>
                    <span className={`${styles.span} ${styles.spanDelete}`} onClick={() => handleDelete(post._id)}>
                      Sil <RiDeleteBin5Fill />
                    </span>
                    <span className={`${styles.span} ${styles.spanEdit}`} onClick={() => handleEditClick(post)}>
                      Düzenle <BiEditAlt />
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <form onSubmit={isEditing ? handleEdit : handleSubmit} className={styles.new}>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className={styles.input} />
          <br />
          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} className={styles.input} />
          <br />
          <label htmlFor="img">Image:</label>
          <input type="text" id="img" value={img} onChange={(e) => setImg(e.target.value)} className={styles.input} />
          <br />
          <label htmlFor="content">Content:</label>
          <textarea type="text" id="content" value={content} onChange={(e) => setContent(e.target.value)} className={styles.input} />
          <br />
          <br />
          <br />
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
          <br />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
  if (status === "authenticated" && role === "user") {
    return (
      <div className={styles.yetkisiz}>
        Yetkiniz bulunmuyor.Blogumuza katkı sağlamak için yetki isteyiniz.
        <span>
          <Link href="/">Home</Link>
        </span>
      </div>
    );
  }
}
