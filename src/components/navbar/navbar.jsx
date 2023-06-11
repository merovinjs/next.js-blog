"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { useRouter } from "next/navigation";
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
    id: 6,
    path: "/blog",
    text: "Blog",
  },
];
const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        logo
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.path}>
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
