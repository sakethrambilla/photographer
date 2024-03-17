import React from "react";
import Scroll from "../scroll";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="uppercase h-full w-full ">
      <div className="px-4  md:px-20 2xl:px-40 py-14 flex flex-col justify-between md:flex-row">
        <div className="">
          <p className=" text-gray-400 text-xl ">Stunning Photography by</p>
          <h1 className="pb-4 pt-2 text-4xl font-regular font-semibold  text-white">
            Damien Braun
          </h1>
        </div>
        <div className="text-3xl flex flex-col gap-4 font-semibold ">
          <div className="flex gap-4 items-center ">
            Let's{" "}
            <div className="bg-indigo-600 px-10  py-4 rounded-full">
              <Image
                src="/stroke.png"
                alt="directions"
                width={15}
                height={20}
              />
            </div>
          </div>
          <p className="">Work Together</p>
        </div>
      </div>
      <Scroll />
      <div className="py-24 md:py-24">
        <div className="sm:hidden">
          <Image
            src="/mobileHeroImage.png"
            alt="Example Image"
            width={600} // Desired width of the image
            height={400} // Desired height of the image
            layout="responsive" // This makes the image responsive
            className="px-4  md:px-20 2xl:px-40  "
          />
        </div>
        <Image
          src="/heroImage.png"
          alt="Example Image"
          width={600} // Desired width of the image
          height={400} // Desired height of the image
          layout="responsive" // This makes the image responsive
          className="px-4 hidden sm:flex md:px-20 2xl:px-40"
        />
      </div>
    </div>
  );
};

export default Hero;
