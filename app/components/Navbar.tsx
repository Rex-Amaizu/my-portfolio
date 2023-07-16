import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex shadow-3xl text-lg bg-white justify-between items-center pt-[25px] pl-[40px] pb-[25px] pr-[50px] h-auto fixed left-0 top-0 w-full z-50 ">
      <h3 className="text-[#2d2e32] cursor-pointer text-[19.89px] font-medium">Gideon.dev</h3>
      <ul className="hidden md:flex list-none gap-5 ">
        <li>
          <Link
            className="text-[#2d2e32] text-[17px] transition-all"
            href="#home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d2e32] text-[17px] transition-all"
            href="#about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d2e32] text-[17px] transition-all"
            href="#projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d2e32] text-[17px] transition-all"
            href="#contact"
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <i class="fa-solid fa-bars-staggered mobile-menu"></i>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar
