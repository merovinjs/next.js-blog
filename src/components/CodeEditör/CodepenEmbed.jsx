"use client";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { FaArrowDown } from "react-icons/fa";
const CodepenEmbed = () => {
  const data = [{ src: "GRwmWbG" }, { src: "dyQWvXX" }];
  return (
    <div>
      <div className={styles.container}>
        {data.map((item) => (
          <div key={item.src}>
            <div>
              <Link
                className={styles.visitMe}
                target="_blank"
                href={`https://codepen.io/oldbeedev/pen/${item.src}?editors=1010`}
              >
                {" "}
                <p>
                  visit ME
                  <FaArrowDown />
                </p>
              </Link>
            </div>
            <iframe
              className={styles.iframe}
              title="React Calculator"
              src={`//codepen.io/oldbeedev/embed/${item.src}?editors=1010?height=265&theme-id=dark&default-tab=result`}
              frameborder="no"
              allowtransparency="false"
              allowfullscreen="false"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodepenEmbed;
