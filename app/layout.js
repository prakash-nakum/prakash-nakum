import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prakash Nakum | MERN Stack Developer Portfolio",
  description:
    "Portfolio of Prakash Nakum, a Software Developer specializing in Next.js, React, and modern web development.",
  keywords: [
    "Prakash Nakum",
    "Prakash Nakum MERN Developer",
    "Prakash Nakum Next.js Developer",
    "Prakash Nakum React Developer",
    "Prakash Nakum Rajkot Gujarat",
  ],
  authors: [{ name: "Prakash Nakum" }],
  openGraph: {
    title: "Prakash Nakum Portfolio",
    description: "Software Developer Portfolio of Prakash Nakum",
    url: "https://prakashnakum.vercel.app/",
    siteName: "Prakash Nakum Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="uiU-6qJAw6OXaaHtJlM3ctyDPCpNcH5AnbYodUIOWRA"
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
