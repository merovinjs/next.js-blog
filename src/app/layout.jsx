import Footer from "@/components/footer/footer";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "oldbee.dev blog",
  description:
    "kişisel blogum frontend alanıda yaptığım projeleri ve makaleleri yayınlıyorum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar></Navbar>
              <main className="main">{children}</main>
              <Footer></Footer>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
