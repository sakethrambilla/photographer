import React from "react";
import Image from "next/image";
const Scroll = () => {
  return (
    <div className="flex px-4 py-2 uppercase text-xs justify-between gap-4  flex-row  overflow-hidden md:text-sm  bg-[#1C1C21] border-t-2 border-gray-700 text-[#AEA1F7]">
      <div className="flex flex-row  justify-center items-center ">
        <Image src="/star.png" alt="start" width={30} height={30} />
        <p>Event Photography</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Image src="/star.png" alt="start" width={30} height={30} />
        Comercial Photography
      </div>
      <div className="flex justify-center  items-center gap-2">
        <Image src="/star.png" alt="start" width={30} height={30} />
        Wedding Photography
      </div>
      <div className="hidden md:flex justify-center  items-center gap-2">
        <Image src="/star.png" alt="start" width={30} height={30} />
        Landscape Photography
      </div>
      <div className="hidden md:flex justify-center items-center gap-2">
        <Image src="/star.png" alt="start" width={30} height={30} />
        Branding Photography
      </div>
      <div className="hidden md:flexjustify-center items-center gap-2">
        <Image src="/star.png" alt="start" width={30} height={30} />
        Portrait Photography
      </div>
    </div>
  );
};

export default Scroll;
