"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
  {
    id: 4,
    path: "/dashboard",
    text: "Dashboard",
  },
  {
    id: 5,
    path: "/portfolio",
    text: "Portfolio",
  },
  {
    id: 5,
    path: "/blog",
    text: "Blog",
  },
];
const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        logo
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.path}>
            {link.text}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log("logout")}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
