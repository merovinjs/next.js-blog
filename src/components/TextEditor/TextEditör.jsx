"use client";
import React, { Suspense, useMemo } from "react";
import "quill/dist/quill.snow.css";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
export const TextEditör = ({ data }) => {
  const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false }), []);

  const modules = {
    toolbar: false,
  };

  return (
    <div>
      <Suspense fallback={<div>...</div>}>
        <ReactQuill value={data} readOnly={true} modules={modules} />
      </Suspense>
    </div>
  );
};
