import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "The Business Hub",
    description:
      "The Business Hub is a platform for start-ups and growing businesses, we will help you scale and provide solutions to the challenges you may face on this journey.",
    image: "/hub.png",
    github: "https://github.com/gideonodiokine",
    link: "https://thebusinesshub.ng/",
  },

  {
    name: "Sedher Health",
    description:
      "Sedher Health is an hospital management system  set out to revolutionize and improve everything about the way we provide medical care in  london.",
    image: "/sedher.png",
    github: "https://github.com/GideonOdiokine/sedher-admin",
    link: "https://sedher.vercel.app/auth/signin",
  },
  {
    name: "Creditwave",
    description:
      "Creditwave is a digital financial services firm established with the aim of providing quick and easy access to financial services in the retail sector of Nigeria, Africa and other emerging markets.",
    image: "/creditwave.png",
    github: "https://github.com/richardingwe/creditwave",
    link: "https://creditwave-website.vercel.app/",
  },

  {
    name: "Crowdfunding Platform",
    description:
      "Blockchain, metamask pairing, interaction with smart contracts, sending Ethereum through the blockchain network, and writing solidity code.",
    image: "/kadavra.png",
    github: "https://github.com/gideonodiokine",
    link: "https://www.kadavra.co/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default ProjectsSection
