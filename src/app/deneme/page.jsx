"use client";

import { DataGet, GetCurrentUser } from "@/customHook/getCurrentUser";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Deneme = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { data: dataQuery, isLoading, isError, error } = DataGet();
  const { data: currentUserQuery, isLoading: currentUserLoading, isError: currentUserError, error: currentUserError2 } = GetCurrentUser();
  const role = currentUserQuery?.role;
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return (
      <button type="button" onClick={() => router.push("/dashboard/login")}>
        Giriş yapınız
      </button>
    );
  }
  if (status === "authenticated" && role === "admin") {
    return (
      <div>
        <div>{role}</div>
      </div>
    );
  }
  if (status === "authenticated" && role === "user") {
    return (
      <div>
        <div>{role}</div>
      </div>
    );
  }
};

export default Deneme;
