import Markdown from "markdown-to-jsx";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utilty/getPostsMetaData";
import style from "./style.module.css";
import Code from "@/components/assets/Code";
function getPostContent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("recipes");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `The Bubbly Baker ${id.replaceAll("_", " ")}`,
  };
}

export default function RecipePage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log("post", post);
  return (
    <Markdown
      className={style.postContent}
      options={{
        overrides: {
          Code: {
            component: Code,
          },
        },
      }}>
      {post.content}
    </Markdown>
  );
}
