"use client"
import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"




export const metadata = {
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
