import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utilty/getPostsMetaData";
import style from "./style.module.css";
import Code from "@/components/assets/Code";
import CodePenEmbed from "@/components/CodeEditör/CodePenEmbed";

function getPostContent(slug) {
  const folder = "next/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("next");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `${id.replaceAll("_", " ")}`,
  };
}
const markdownoptions = {
  overrides: {
    Codepen: {
      component: CodePenEmbed,
    },
    Code: {
      component: Code,
    },
  },
};
export default function RecipePage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div className={style.wrapper}>
      <Markdown className={style.postContent} options={markdownoptions}>
        {post.content}
      </Markdown>
    </div>
  );
}
