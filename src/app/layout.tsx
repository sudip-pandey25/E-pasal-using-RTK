import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./reduxtoolKit/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Pasal",
  description: "Internship Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} transition-all duration-300 ease-in-out `}
      >
        <Providers>
          <Navbar />
        </Providers>
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
