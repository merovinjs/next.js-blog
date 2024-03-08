"use client";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import style from "./style.module.css";
const ClipButton = ({ text }) => {
  const [copy, setCopy] = useState(false);
  return (
    <>
      {copy ? (
        <button
          className={style.clicked}
          onClick={() => {
            navigator.clipboard.writeText(text);
          }}>
          Copied
          <span>
            <CiCircleCheck color="black" />
          </span>
        </button>
      ) : (
        <button
          className={style.unClicked}
          onClick={() => {
            navigator.clipboard.writeText(text);
            setCopy(true);
            setTimeout(() => {
              setCopy(false);
            }, 3000);
          }}>
          Copy
        </button>
      )}
    </>
  );
};

export default ClipButton;
