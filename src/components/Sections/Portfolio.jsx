import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Portfolio = () => {
  return (
    <section className="flex flex-col gap  h-full px-4 py-8  md:p-20 2xl:p-40 ">
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 border-[#1C1C21] py-6">
        <div className="uppercase">
          <h2 className="text-lg text-gray-400">Portfolio</h2>
          <h1 className="text-4xl font-semibold py-2">
            Explroe my photography work
          </h1>
        </div>
        <div className="">
          <div className="hidden md:flex"></div>
          <button className="px-8 py-4 rounded-lg bg-[#1C1C21] flex items-center gap-2">
            View All works <FaArrowRightLong color="gray" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row md:justify-center py-6 px-2 ">
        <div className="flex flex-col gap-2 ">
          <Image
            src="/portfolio.png"
            alt="about section image"
            width={400}
            height={585}
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-gray-300">Faces of Resiliences </p>
              <p className="text-sm text-gray-400">March 2022</p>
            </div>
            <div className="underline text-gray-200 uppercase flex gap-2">
              View Project
              <div className="">
                <FaArrowRightLong
                  color="white"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-col gap-2 hidden md:flex ">
          <Image
            src="/portfolio1.png"
            alt="about section image"
            width={400}
            height={585}
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-gray-300">A Wedding Tale </p>
              <p className="text-sm text-gray-400">January 2020</p>
            </div>
            <div className="underline  text-gray-200 uppercase flex gap-2">
              View Project
              <div className="">
                <FaArrowRightLong
                  color="white"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex-col gap-2 hidden md:flex">
          <Image
            src="/portfolio2.png"
            alt="about section image"
            width={400}
            height={585}
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="text-gray-300">Product Elegance </p>
              <p className="text-sm text-gray-400">January 2020</p>
            </div>
            <div className="underline text-gray-200 uppercase flex gap-2">
              View Project
              <div className="">
                <FaArrowRightLong
                  color="white"
                  style={{ transform: "rotate(-45deg)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
