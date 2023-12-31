import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Ebuka Rex Amaizu is a Fullstack Developer based in Abuja, Nigeria. Welcome to my developer portfolio! Explore a collection of my projects and web applications showcasing my expertise in building dynamic and interactive web application. With a passion for clean code and innovative solutions, I strive to create seamless user experiences that blend functionality with stunning designs."
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </>
  );
}
