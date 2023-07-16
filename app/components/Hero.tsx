import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#f9f9f9] flex flex-col h-screen relative w-full"
    >
      <div className="container mx-auto  px-16">
        <div className="flex-col h-[55rem] flex items-center md:flex-row justify-center relative gap-[10px] ">
          <div className=" flex items-center justify-center relative gap-[10px]">
            <div className="flex flex-col max-w-3xl relative items-center  ">
              <h1 className="pt-[170px] md:pt-0 text-[30px] md:text-[5.4rem] text-center text-[#2d2e32] leading-[1.2] my-8 font-medium ">
                Front-End React Developer
              </h1>
              <Image
                src="/homeIcons/waving.png"
                width={60}
                height={60}
                alt="hero-waving"
                className="absolute top-[230px] right-[17px] md:top-[110px] md:right-[40px]"
              />
              <p className="text-[#555] !font-[Mulish] text-center font-medium leading-[1.6] text-[18px] ">
                Hi, I'm Gideon Odiokine. A passionate Front-end React <br />
                Developer based in Calabar, Nigeria. 📍
              </p>
              <span className="mb-16 md:mb-0 flex cursor-pointer gap-5 mt-9 mx-0">
                <Link
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/gideon-odiokine-1bb88a1a9/"
                >
                  <i className="fa-brands fa-linkedin text-[24px]" />
                </Link>
                <Link
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/gideonodiokine"
                >
                  <i className="fa-brands fa-github text-[24px]" />
                </Link>
              </span>
            </div>
            <div className="hero-img" />
          </div>
          <div className="flex-col static flex text-[#767676] md:flex-row md:absolute left-0 bottom-0 items-center text-[17px]  md:px-[95px]">
            <p className="pb-4 mb-12 md:pb-0 border-b-2 font-[Mulish] text-[#2d2e32] font-semibold md:mr-28 pr-8  md:border-r-2 border-[2px solid rgba(45,46,50,.5)] ">
              Tech Stack
            </p>
            <div className="logos">
              <ul className='justify-center md:justify-normal flex flex-wrap gap-9 list-none ' >
                <li className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                 <Image src="/homeIcons/html.svg" width={34} height={34} alt="skill-icon" />
                </li>
                <li  className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                 <Image src="/homeIcons/css3.svg" width={34} height={34} alt="skill-icon" />
                </li>
                <li  className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                  <Image src="/homeIcons/javascript.svg" width={34} height={34} alt="skill-icon" />
                </li>
                <li  className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                    <Image src="/homeIcons/react.svg" width={34} height={34} alt="skill-icon" />
                </li>
                <li  className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                    <Image src="/homeIcons/nextjs.svg" width={34} height={34} alt="skill-icon" />
                </li>
                <li  className='flex items-center justify-center h-[6.4rem] w-[6.4rem] bg-white rounded-full shadow-3xl '>
                    <Image src="/homeIcons/tailwind.svg" width={34} height={34} alt="skill-icon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
