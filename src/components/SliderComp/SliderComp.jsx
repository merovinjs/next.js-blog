"use client";
import React from "react";
import Script from "next/script";
import "./slider.css";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const SliderComp = () => {
  return (
    <div>
      <div className="card">
        <div>
          <Image className="card-image" src="/1.png" alt="card-image" />
        </div>
        <div className="card-body">
          <h5 className="card-title">bmw</h5>
          <p className="card-text"></p>
          <a className="card-link" href="#">
            Read More
          </a>
        </div>
        <div className="footer">
          <FaArrowLeft className="arrow arrow-left" />
          <FaArrowRight className="arrow arrow-right" />
        </div>
      </div>
      <Script src="/js/script.js" />
    </div>
  );
};

export default SliderComp;
