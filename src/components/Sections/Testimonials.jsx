import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
const Testimonials = () => {
  return (
    <section className="flex flex-col h-full px-4 py-8  md:p-20 2xl:p-40 ">
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 border-[#1C1C21] py-6">
        <div className="uppercase">
          <h2 className="text-lg text-gray-400">Testimonials</h2>
          <h1 className="text-4xl font-semibold py-2">What my clients say</h1>
          <div className=" py-4 gap-2">
            <p className="text-sm text-gray-400">Total Reviews</p>
            <span>323</span>
          </div>
        </div>
        <div className=" items-end flex py-10">
          <button className="px-8 py-4 rounded-lg bg-[#1C1C21] flex items-center gap-2">
            View All Testimonials <FaArrowRightLong color="gray" />
          </button>
        </div>
      </div>
      <div className=" py-10 flex gap-6">
        <div className="md:w-1/3 rounded-xl border-[#1C1C21] shadow-md bg-[#18181B] border h-64 px-10 py-8 justify-between flex flex-col">
          <div className=" flex flex-row justify-between items-center">
            <div className="">
              <h1>Emily johnson</h1>
              <p className="text-sm text-gray-400">USA, California</p>
            </div>
            <div className="">
              <div className=" flex w-fit flex-row border bg-black p-2 rounded-full gap-2 border-[#1C1C21]">
                <Image
                  src="/facebook.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/twitter.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/linkedIn.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="">⭐⭐⭐⭐⭐</div>
          <p className="">
            Damien&apos;s photography doesn&apos;t just capture moments; it
            captures emotions. Hes work is simply mesmerizing.
          </p>
        </div>

        <div className=" hidden md:flex md:w-1/3 rounded-xl border-[#1C1C21] shadow-md bg-[#18181B] border h-64 px-10 py-8 justify-between  flex-col">
          <div className=" flex flex-row justify-between items-center">
            <div className="">
              <h1>Emily johnson</h1>
              <p className="text-sm text-gray-400">USA, California</p>
            </div>
            <div className="">
              <div className=" flex w-fit flex-row border bg-black p-2 rounded-full gap-2 border-[#1C1C21]">
                <Image
                  src="/facebook.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/twitter.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/linkedIn.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="">⭐⭐⭐⭐⭐</div>
          <p className="">
            Damien&apos;s photography doesn&apos;t just capture moments; it
            captures emotions. Hes work is simply mesmerizing.
          </p>
        </div>
        <div className=" hidden md:flex md:w-1/3 rounded-xl border-[#1C1C21] shadow-md bg-[#18181B] border h-64 px-10 py-8 justify-between  flex-col">
          <div className=" flex flex-row justify-between items-center">
            <div className="">
              <h1>Emily johnson</h1>
              <p className="text-sm text-gray-400">USA, California</p>
            </div>
            <div className="">
              <div className=" flex w-fit flex-row border bg-black p-2 rounded-full gap-2 border-[#1C1C21]">
                <Image
                  src="/facebook.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/twitter.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
                <Image
                  src="/linkedIn.png"
                  alt="about section image"
                  width={40}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="">⭐⭐⭐⭐⭐</div>
          <p className="">
            Damien&apos;s photography doesn&apos;t just capture moments; it
            captures emotions. Hes work is simply mesmerizing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
