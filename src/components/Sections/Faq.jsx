import React from "react";
import Accordian from "../Accordian";
import { FaArrowRightLong } from "react-icons/fa6";

const Faq = () => {
  return (
    <section className="flex flex-col h-full px-4 py-8  md:p-20 2xl:p-40  ">
      <div className="flex flex-col md:flex-row md:justify-between border-b-2 border-[#1C1C21] py-6">
        <div className="uppercase">
          <h2 className="text-lg text-gray-400">Faq&apos;s</h2>
          <h1 className="text-4xl font-semibold py-2">
            Frequently Asked questions
          </h1>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col md:border-r-[1px] border-[#1C1C21]">
          <Accordian
            question={"What type of phototgraphy do you specialise in"}
            answer={
              "I specialize in [Portrait, Landscape, Event, etc.] photography, capturing moments that tell unique stories."
            }
          />
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={"How can I book a photography session with you?"}
              answer={
                "Booking is easy! Contact me via my website or email to discuss your needs, schedule, and secure your session date."
              }
            />
          </div>
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={"What equipment do you use for your photography?"}
              answer={
                "I use professional-grade DSLR cameras, a variety of lenses, lighting equipment, and editing software for top-notch results."
              }
            />
          </div>
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={"Can I request a specific location for a "}
              answer={
                "Absolutely, I'm flexible with location requests to capture your vision and create meaningful memories."
              }
            />
          </div>
        </div>
        <div className="hidden flex-col md:flex">
          <Accordian
            question={"What is your editing process like?"}
            answer={
              "My editing involves enhancing colors, adjusting exposure, and refining details to create captivating and timeless imagery."
            }
          />
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={
                "Are digital files included in your photography packages?"
              }
              answer={
                "Yes, digital files are included for clients to cherish and share their memories conveniently."
              }
            />
          </div>
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={"Do you offer prints of your photographs?"}
              answer={
                "Yes, prints are available in various sizes and formats, professionally crafted for lasting quality."
              }
            />
          </div>
          <div className="border-t-[1px] border-[#1C1C21]">
            <Accordian
              question={
                "How long does it take to receive the edited photos after a session?"
              }
              answer={
                "Editing time varies based on workload, typically 1-3 weeks for portraits, 4-6 weeks for weddings."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
