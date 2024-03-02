"use client";
import Link from "next/link";
import React, { useRef } from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { LuLogOut } from "react-icons/lu";
import { signOut } from "next-auth/react";

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
    path: "/blog",
    text: "Blog",
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
  ,
  {
    id: 6,
    path: "/editor",
    text: "Examples",
  },
];
const Navbar = () => {
  const { data: session, status } = useSession();
  const name = session?.user?.name;
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };
  const router = useRouter();
  const handleLogout = () => {
    signOut();
    router.push("/");
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          OLD BEE
        </Link>

        <nav ref={navRef} className={styles.links}>
          {links.map((link) => (
            <Link onClick={showNavbar} className={styles.link} key={link.id} href={link.path}>
              {link.text}
            </Link>
          ))}

          <button className={styles.close_btn + " " + styles.nav_btn} onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className={styles.nav_btn} onClick={showNavbar}>
          <FaBars />
        </button>
        <div className={styles.toggle}>
          <DarkModeToggle />
        </div>
      </div>
      <div className={styles.user}>
        {<div>&nbsp;</div>}
        {status === "authenticated" && <span className={styles.name}>Hoşgeldin &nbsp;{name}</span>}
        {status === "authenticated" && (
          <span className={styles.logout}>
            <button className={styles.logbtn} onClick={() => handleLogout()}>
              Çıkış yap
              <LuLogOut size={12} color="blue" />
            </button>
          </span>
        )}
        {status === "unauthenticated" && <Link href={"/dashboard/login"}>Giriş yapınız...</Link>}
      </div>
    </div>
  );
};

export default Navbar;
