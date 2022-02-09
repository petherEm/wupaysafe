import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex lg:flex-row items-center sticky top-0 justify-between bg-black text-yellow-400 p-4 shadow-lg z-40">
      <div className="lg:flex ml-10">
        <Link href="/">
          <Image
            src="/img/WU.svg"
            width="200"
            height="30"
            layout="fixed"
            objectFit="cover"
            className="cursor-pointer"
          />
        </Link>
      </div>
      <ul className="lg:flex md:hidden hidden gap-x-4 cursor-pointer mr-10">
        <li className="hover:text-yellow-700">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-yellow-700">
          <Link href="/business">Business</Link>
        </li>
        <li className="hover:text-yellow-700">
          <Link href="/newuser">NewUser</Link>
        </li>
        <li className="hover:text-yellow-700">
          <Link href="/existinguser">Existing</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
