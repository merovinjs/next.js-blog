"use client";

import { useQuery } from "@tanstack/react-query";

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
export function GetCurrentUser() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["currentuser"],
    queryFn: async () => await fetch("https://oldbee.netlify.app/api/auth/getCurrentUser").then((res) => res.json()),
  });
  return { data, isLoading, isError, error };
}
