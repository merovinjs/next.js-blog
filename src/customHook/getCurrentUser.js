"use client";

import { useQuery } from "@tanstack/react-query";
const isDevelopment = process.env.NODE_ENV === "development";

export function DataGet() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["todos"],
    queryFn: async () => await fetch("https://oldbee.netlify.app/api/posts").then((res) => res.json()),
  });
  return { data, isLoading, isError, error };
}
export function UserGet() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => await fetch("https://oldbee.netlify.app/api/auth/register").then((res) => res.json()),
  });
  return { data, isLoading, isError, error };
}
export function GetCrntUser() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["currentuser"],
    queryFn: async () => {
      const apiUrl = isDevelopment ? "http://localhost:3000/api/auth/getCurrentUser" : "https://oldbee.netlify.app/api/auth/getCurrentUser";
      const response = await fetch(apiUrl);
      return response.json();
    },
  });
  return { data, isLoading, isError, error };
}
