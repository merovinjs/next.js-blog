"use client";
import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

SyntaxHighlighter.registerLanguage("jsx", jsx);
import ClipButton from "../ClipButton/ClipButton";
import style from "./style.module.css";

const Code = ({ children, language }) => {
  console.log(children);
  const stringifyChildren = (children) => {
    if (typeof children === "string") {
      return children;
    }
    return React.Children.map(children, (child) => (typeof child === "string" ? child : child.props.children)).join("");
  };
  const stringifiedChildren = stringifyChildren(children);
  return (
    <div className={style.Wrapper}>
      <div className={style.CopyButton}>
        <ClipButton text={stringifiedChildren} />
      </div>
      <div className={style.SyntaxHighlighterWrapper}>
        <SyntaxHighlighter language={language} style={tomorrow}>
          {stringifiedChildren}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
export default Code;
