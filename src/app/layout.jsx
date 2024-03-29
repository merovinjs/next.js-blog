import Footer from "@/components/footer/footer";
import "@/styles/reset.css";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import ReactQueryProvider from "@/components/ReactQueryProvider/ReactQueryProvider";
const inter = Inter({ subsets: ["latin"] });
import { GoogleTagManager } from "@next/third-parties/google";
export const metadata = {
  title: "oldbee.dev blog",
  description: "kişisel blogum frontend alanıda yaptığım projeleri ve makaleleri yayınlıyorum",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ThemeProvider>
            <AuthProvider>
              <div className="container">
                <Navbar></Navbar>
                <main className="main">{children}</main>
                <Footer></Footer>
              </div>
            </AuthProvider>
          </ThemeProvider>
        </ReactQueryProvider>
        <GoogleTagManager gtmId="GTM-TZQJHCTR" />
      </body>
    </html>
  );
}
