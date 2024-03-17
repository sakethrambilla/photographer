"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
const Accordian = ({ question, answer }) => {
  const [accordianOpen, setAccordianOpen] = useState(false);
  return (
    <div className="px-10 py-8">
      <button
        className="flex justify-between w-full"
        onClick={() => setAccordianOpen(!accordianOpen)}
      >
        <span className="uppercase text-left text-md text-gray-400 ">
          {question}
        </span>
        <div className="border rounded-full p-2 border-gray-400">
          {accordianOpen ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowUp
              style={{ transform: "rotate(180deg)", animationDuration: "300" }}
            />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 0 text-sm ${
          accordianOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        } `}
      >
        <div className="overflow-hidden text-sm text-gray-500 pr-32 py-2">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
