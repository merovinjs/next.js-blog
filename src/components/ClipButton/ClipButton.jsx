"use client";
import React, { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
const ClipButton = ({ text }) => {
  const [copy, setCopy] = useState(false);
  return (
    <>
      {copy ? (
        <button
          style={{ textAlign: "center" }}
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
