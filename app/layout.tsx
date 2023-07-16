import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from './components/Navbar';

const poppins = Poppins({
  weight: ["200", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gideon Odiokine",
  description:
    "Gideon Odiokine is a Frontend engineer based in Lagos, Nigeria. Welcome to my developer portfolio! Explore a collection of my projects and web applications showcasing my expertise in building dynamic and interactive web application. With a passion for clean code and innovative solutions, I strive to create seamless user experiences that blend functionality with stunning designs.",
  keywords: [
    "Gideon",
    "Odiokine",
    "Gideon Odiokine",
    "University of Science and Technology",
    "Frontend Engineer",
    "Software Engineer",
    "Lagos",
    "Nigeria",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
