import React from "react";
import Scroll from "./scroll";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="">
      <h1 className=" flex justify-end text-[200px] font-semibold uppercase h-full px-4   md:px-20 2xl:px-40  text-[#1C1C21]">
        DAMIEN
      </h1>
      <div className=" ">
        <Scroll />
      </div>

      {/* Section */}
      <div className="flex flex-col md:flex-row justify-between border-b-2 border-[#1C1C21]">
        <div className="hidden md:flex md:w-10 lg:w-20 justify-center gap-4 flex-col">
          <span className="w-full h-6 bg-[#1C1C21]"></span>
          <span className="w-full h-6 bg-[#1C1C21]"></span>
          <span className="w-full h-6 bg-[#1C1C21]"></span>
        </div>

        {/* Main */}
        <div className=" border-x-[1px] border-[#1C1C21] md:w-full flex flex-col md:flex-row  mx-6 md:mx-0">
          <div className=" md:w-2/5 gap-8 flex flex-col p-10 border-b-2 md:border-b-0 md:border-r-2 border-[#1C1C21]">
            <p className="uppercase text-xs text-gray-400">
              {" "}
              a more meaningful home for photgrpahy
            </p>

            <div className="text-4xl tracking-wide uppercase flex flex-col gap-4 font-semibold ">
              <div className=" flex flex-row gap-2">
                Let&apos;s{" "}
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
          <div className="uppercase flex flex-col md:flex-row justify-center items-center md:w-3/5 gap-10 text-xs h-full py-10">
            <div className=" flex flex-row gap-6">
              <div className=" flex flex-col ">
                <h1 className="text-gray-400 py-4">Home</h1>
                <div className="gap-4 flex-col flex">
                  <span className="underline underline-offset-8  underline-[#1C1C21]">
                    About me
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    My works
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Testimonials
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-400 py-4">Clients</h1>
                <div className="gap-4 flex-col flex">
                  <span className="underline underline-offset-8  underline-[#1C1C21]">
                    klovesto
                  </span>

                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Nukeway
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Cloven&apos;s
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Menvol
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex flex-row gap-6">
              <div className="flex flex-col">
                <h1 className="text-gray-400 py-4">Portfolio</h1>
                <div className="gap-3 flex-col flex">
                  <span className="underline underline-offset-8  underline-[#1C1C21]">
                    Events
                  </span>

                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Portrait
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Branding
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Commericiale
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Wedding
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-gray-400 py-4">Services</h1>
                <div className="gap-4 flex-col flex">
                  <span className="underline underline-offset-8  underline-[#1C1C21]">
                    Portraits
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Events
                  </span>
                  <span className="underline underline-offset-8 underline-[#1C1C21]">
                    Commericial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:w-10 lg:w-20 justify-center gap-4 flex-col">
          <span className="w-full h-6 bg-[#1C1C21]"></span>
          <span className="w-full h-6 bg-[#1C1C21]"></span>
          <span className="w-full h-6 bg-[#1C1C21]"></span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-between py-4 gap-4 text-sm px-4   md:px-20 2xl:px-40  text-gray-400">
        <div className="divide-2">
          <span>Terms & Conditions</span>
          <span> Privacy Policy</span>
        </div>
        <div className=" flex w-fit flex-row border p-2 rounded-full gap-2 border-[#1C1C21]">
          <Image
            src="/facebook.png"
            alt="about section image"
            width={30}
            height={50}
          />
          <Image
            src="/twitter.png"
            alt="about section image"
            width={30}
            height={50}
          />
          <Image
            src="/linkedIn.png"
            alt="about section image"
            width={30}
            height={50}
          />
        </div>
        <p>© 2024 Damien Braun Photography. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
