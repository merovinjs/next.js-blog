import { notFound } from "next/navigation";
import React from "react";
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    return notFound();
  }
  const data = await res.json();
  return data;
}

const Page = async ({ params }) => {
  const data = await getData(params.id);
  return <div>{data.title}</div>;
};

export default Page;
