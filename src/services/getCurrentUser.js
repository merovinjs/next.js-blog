// "use client";
// import connectDB from "@/utilty/db";
// import { useEffect, useState } from "react";
// import Bloguser from "@/blogModels/Bloguser";

// export default function useUserRole(session) {
//   const [role, setRole] = useState(null);

//   useEffect(() => {
//     if (session && session.status === "authenticated") {
//       const email = session.user.email;

//       const user = Bloguser.findOne({ email });

//       setRole(user.role);
//     }
//   }, [session]);

//   return role;
// }
