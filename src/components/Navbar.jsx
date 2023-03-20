import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="text-white flex items-center justify-between py-8 px-5 container mx-auto">
      <div>
        <h1 className="text-parrotGreen text-4xl font-bold">REACT.</h1>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Company</li>
          <li className="cursor-pointer">Resources</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div
        className="md:hidden block cursor-pointer"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        {isNavOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
      </div>
      <div className={isNavOpen ? 'p-8 fixed top-0 left-0 h-full w-2/3 bg-[#000300] border-r-2 border-r-gray-500 ease-in-out duration-500' : "fixed top-0 left-[-200%]"}>
        <h1 className="text-parrotGreen text-4xl font-bold">REACT.</h1>
        <ul className="flex text-2xl flex-col gap-10 mt-10">
          <li className="border-b-2 cursor-pointer border-b-gray-500 p-3">Home</li>
          <li className="border-b-2 cursor-pointer border-b-gray-500 p-3">Company</li>
          <li className="border-b-2 cursor-pointer border-b-gray-500 p-3">Resources</li>
          <li className="border-b-2 cursor-pointer border-b-gray-500 p-3">About</li>
          <li className="border-b-2 cursor-pointer border-b-gray-500 p-3">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
