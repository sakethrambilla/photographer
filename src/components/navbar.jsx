import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-full flex-row justify-between items-end">
      <div className=" px-4 py-4 text-xl font-semibold ">DAMIEN</div>

      <div className="hidden md:flex  flex-row divide-x-2 gap-2 divide-[#1C1C21] border-x-2 rounded-tl-xl rounded-tr-xl  border-t-2 border-[#1C1C21]">
        <div className="px-6 py-4  text-sm">Home</div>
        <div className="px-6 py-4 text-sm">About Me</div>
        <div className="px-6 py-4 text-sm">Portfolio</div>
        <div className="px-6 py-4 text-sm">Services</div>
      </div>
      <div className="px-6 py-6">
        <button className="hidden md:flex px-4 py-2 bg-[#1C1C21] rounded-lg ">
          Contact Me
        </button>
      </div>
      <div class="md:hidden space-y-2 h-full p-4 justify-center  border-t-4 rounded-tl-lg border-l-4 flex flex-col items-end border-[#1C1C21]">
        <span class="block w-7 h-0.5 bg-gray-200"></span>
        <span class="block w-7 h-0.5 bg-gray-200"></span>
        <span class="block w-5 h-0.5 bg-gray-200"></span>
      </div>
    </div>
  );
};

export default Navbar;
