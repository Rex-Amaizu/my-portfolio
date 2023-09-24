import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "ReactJs" },
  { skill: "Nextjs" },
  { skill: "Nodejs" },
  { skill: "Expressjs" },
  { skill: "Nestjs" },
  { skill: "PHP" },
  { skill: "Laravel" },
  { skill: "React Native" },
  { skill: "Flutter" },
  { skill: "Firebase/Cloud Firestore" },
  { skill: "Heroku" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "GraphQL" },
  { skill: "Prisma" },
  { skill: "PostgreSQL" },
  { skill: "Docker" },
  { skill: "AWS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Project Management" },
  { skill: "Unit Test" },
  { skill: "UI Test" },
  { skill: "Agile development methodologies" },
  { skill: "CI/CD" },
  { skill: "Team Lead" },
  { skill: "Debugging" },
  { skill: "Time management" },
  { skill: "Communication" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Rex and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> fullstack engineer
              based in Abuja, Nigeria.
            </p>
            <br />
            <p>
              I graduated from University of Uyo, Akwaibom in 2016 with a B.Eng
              in Petroleum engineering but my love for technology directed me
              towards becoming a software developer.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing video games, traveling, I am always seeking
              new experiences and love to keep myself engaged and learning new
              things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
