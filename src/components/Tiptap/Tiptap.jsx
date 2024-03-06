// "use client";

// import { DataGet } from "@/customHook/getCurrentUser";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";

// const gtdata = () => {
//   const { data: dataQuery, isLoading, isError, error } = DataGet();

//   if (isLoading) return "<p>loading</p>";
//   if (isError) return "<p>error</p>";

//   const content = dataQuery?.[8]?.content || "";

//   return content;
// };

// const Tiptap = () => {
//   const editorContent = gtdata();
//   console.log(editorContent);
//   const editor = useEditor({
//     extensions: [StarterKit],

//     content: editorContent,
//   });

//   return <EditorContent editor={editor} />;
// };

// export default Tiptap;
// "use client";
// import { EditorContent } from "@tiptap/react";
// import React, { useState, useEffect } from "react";

// const MyPage = () => {
//   const [data, setData] = useState("");
//   const [editor, setEditor] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("https://oldbee.netlify.app/api/posts/65e31b38fcf871651a3d11b5");
//       const jsonData = await response.json();
//       setData(jsonData);
//     };
//     fetchData();
//   }, []);

//   const handleEditorMount = (editor) => {
//     setEditor(editor);
//   };

//   const handleContentChange = () => {
//     // Editör içeriği değiştiğinde bu fonksiyon çalışır.
//   };

//   return (
//     <div>
//       <h1>Veriler</h1>

//       <ul>{data.content}</ul>
//       <h1>Editör</h1>
//       <EditorContent editor={editor} onMount={handleEditorMount} onChange={handleContentChange} content={data.content} />
//     </div>
//   );
// };

// export default MyPage;

// const fetchData = async () => {
//   const response = await fetch("https://oldbee.netlify.app/api/posts/65e31b38fcf871651a3d11b5");
//   const jsonData = await response.json();
//   return jsonData;
// };
// const MyPage = async () => {
//   const data = await fetchData();

//   console.log("data", data);

//   return (
//     <div>
//       <h1>Veriler</h1>
//       <h1>{data.title}</h1>
//       <p>{data.content}</p>
//     </div>
//   );
// };

// export default MyPage;

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
