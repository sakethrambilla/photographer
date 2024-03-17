import React from "react";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex text-gray-400 flex-col h-full px-4 py-8  md:p-20 2xl:p-40 ">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-b-2 border-[#1C1C21] py-4 md:py-8     ">
        <div className="flex flex-col uppercase ">
          <p className="text-gray-500 text-md">About</p>
          <h1 className="text-4xl font-semibold text-white">I am Damien</h1>
        </div>
        <Link
          href="/"
          className="px-4 justify-center items-center py-3 w-40 rounded-lg gap-2 bg-[#1C1C21] flex"
        >
          Know more
          <Image
            src="/rightArrow.png"
            alt="about section image"
            width={15}
            height={20}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center md:flex-row py-10 gap-4">
        <div className="md:w-1/2">
          <Image
            src="/aboutImage.png"
            alt="about section image"
            width={630}
            height={585}
          />
        </div>
        <div className="flex flex-col text-gray-400 md:w-1/2 border-2 rounded-2xl  border-[#1C1C21] divide-[#1C1C21] divide-y-2">
          <div className="px-6 py-4">
            <h1 className="flex text-xl gap-2 py-2">
              <Image
                src="/star2.png"
                alt="about section image"
                width={30}
                height={30}
              />
              Introduction
            </h1>
            <p className="text-left px-4 text-gray-500 ">
              My journey as a photographer has been a lifelong quest to capture
              the extraordinary in the ordinary, to freeze fleeting moments in
              time, and to share the world&apos;s beauty as I see it. Based in
              the enchanting landscapes of the USA, I find inspiration in every
              corner of this diverse and vibrant country. Join me as we embark
              on a visual odyssey, where each photograph tells a story, and
              every frame is a piece of my heart.
            </p>
          </div>
          <div className="flex flex-col text-gray-500 px-6 py-4">
            <h1 className="flex flex-row gap-2">
              <Image
                src="/star2.png"
                alt="about section image"
                width={30}
                height={30}
              />
              Contact Information
            </h1>
            <div className="flex flex-col md:flex-row gap-6 px-4 md:gap-20 py-8">
              <div className="flex gap-1 md:gap-2 flex-col">
                <h3 className="text-gray-400">Email</h3>
                <p>damienBraun@gmail.com</p>
              </div>
              <div className="flex gap-1 md:gap-2 flex-col">
                <h3 className="text-gray-400">Phone Number</h3>
                <p>+00 00000</p>
              </div>
            </div>
            <div className="flex flex-col gap-6  md:flex-row md:justify-between">
              <div className=" flex w-fit flex-row border p-2 rounded-full gap-2 border-[#1C1C21]">
                <Image
                  src="/facebook.png"
                  alt="about section image"
                  width={50}
                  height={50}
                />
                <Image
                  src="/twitter.png"
                  alt="about section image"
                  width={50}
                  height={50}
                />
                <Image
                  src="/linkedIn.png"
                  alt="about section image"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col items-center justify-center md:flex-row gap-2">
                <div className="px-4 py-3 bg-[#1C1C21] text-gray-200  w-72 md:w-fit  flex items-center justify-center rounded-lg">
                  Let&apos;s Work
                </div>
                <div className="px-4 py-3 bg-[#1C1C21] text-gray-200  w-72 md:w-fit flex items-center justify-center rounded-lg">
                  Download CV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
