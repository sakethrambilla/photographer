import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Services = () => {
  return (
    <section className="flex flex-col h-full px-4 py-8  md:p-20 2xl:p-40 ">
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 border-[#1C1C21] py-6">
        <div className="uppercase">
          <h2 className="text-lg text-gray-400">services</h2>
          <h1 className="text-4xl font-semibold py-2">
            {" "}
            My photography services
          </h1>
        </div>
        <div className="">
          <div className="hidden md:flex"></div>
          <button className="px-8 py-4 rounded-lg bg-[#1C1C21] flex items-center gap-2">
            View All services <FaArrowRightLong color="gray" />
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6   ">
        <div className="flex flex-col md:w-1/2 gap-6">
          <div className="text-gray-400 py-6 ">
            <div className=" flex items-center gap-2 py-4">
              <h1 className="uppercase text-3xl">Events</h1>
              <div className="bg-indigo-600 px-10  py-4 rounded-full">
                <Image
                  src="/stroke.png"
                  alt="directions"
                  width={15}
                  height={20}
                />
              </div>
            </div>
            <p className="">
              {" "}
              Our event photography service is dedicated to capturing the magic
              of your special occasions. Wether it&apos;s a wedding, corporate
              event, or milestone celebration, we&apos;re there to document
              every heartfelt moment. We blend into the background, ensuring
              natural and candid shots that reflect the emotions of the day.
            </p>
          </div>

          <div className="gap-4 flex flex-col">
            <h1 className="text-lg font-semibold text-gray-500">
              Services Highlights{" "}
            </h1>
            <div className="uppercase text-gray-400 border-2 border-[#1C1C21] text-sm ustify-center items-center flex  flex p-3 rounded-xl gap-2 ">
              <div className=" ">
                <Image src="/star.png" alt="start" width={30} height={50} />
              </div>
              <p>
                coverage for weddings, parties, corporate functions, and more.
              </p>
            </div>
            <div className="uppercase text-gray-400 border-2 border-[#1C1C21] text-sm items-center flex p-3 rounded-xl gap-2">
              <div className=" justify-center items-center flex">
                <Image src="/star.png" alt="start" width={30} height={50} />
              </div>
              <p>Skilled photogbrahers who know how to seize the moment</p>
            </div>
            <div className="uppercase text-gray-400 border-2 border-[#1C1C21] text-sm items-center  flex p-3 rounded-xl gap-2">
              <div className=" justify-center items-center flex">
                <Image src="/star.png" alt="start" width={30} height={50} />
              </div>
              <p>A mix of candid and posed shots for a comprehensive story</p>
            </div>
            <div className="uppercase text-gray-400 border-2 border-[#1C1C21] text-sm items-center  flex p-3 rounded-xl gap-2">
              <div className=" justify-center items-center flex">
                <Image src="/star.png" alt="start" width={30} height={50} />
              </div>
              <p>
                {" "}
                quick turnaround for you to relive the day&apos;s highlights
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center ">
          <Image
            src="/services.png"
            alt="about section image"
            width={700}
            height={585}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
