import Image from 'next/image';
import React from 'react'

const About = () => {
  return (
    <section className="bg-white py-60 " id="about">
      <div className="container">
        <div className="items-center grid grid-cols-2 justify-center">
          <div className="relative img-side">
            <Image
              src="/homeIcons/working-emoji.png"
              width={60}
              height={60}
              alt="skill-icon"
              className="absolute w-[60px] right-[120px]  bottom-[55px] z-10"
            />
            <Image
              src="/homeIcons/about-img.webp"
              width={390}
              height={300}
              alt="skill-icon"
              className="rounded-lg h-[35rem] w-[41rem]"
            />
            <span className="bg-white h-[19rem] absolute w-[19rem] right-[33px] bottom-[-33px] rounded-full ">
              <Image
                src="/homeIcons/text2.svg"
                width={34}
                height={34}
                alt="skill-icon"
                className="w-[19rem]"
              />
            </span>
          </div>
          <div className="text-side">
            <h3 className="text-blue-600 text-3xl font-bold mb-4 uppercase">
              About me
            </h3>
            <h4 className="text-gray-800 mb-8 text-4xl leading-[1.5] mb-8 ">
              A dedicated Front-end Developer <br /> based in Belgrade, Serbia
              📍
            </h4>
            <p className="text-gray-600 text-2xl font-medium leading-normal font-[Mulish] ">
              As a  Front-End Engineer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React,Next, Typescript, React-Native, Vue, Storybook, Tailwind, Styled-component and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About
