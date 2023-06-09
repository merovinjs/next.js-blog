"use client";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <div>
      <button onClick={() => signIn("github")}>Login with github</button>
    </div>
  );
};

export default Login;
