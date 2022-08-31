import React from "react";
import { useState } from "react";

const Accordion = ({ acc }) => {
  const [show, setShow] = useState(false);

  return (
    <div className=" w-full my-4 lg:w-[500px] lg:mx-auto">
      <div
        onClick={() => setShow(!show)}
        className={` cursor-pointer flex justify-between items-center w-full px-2 border-b-[1px] border-gray-400 hover:border-green-700 ${
          show && " text-green-700"
        } hover:text-green-700`}
      >
        <h1 className="text-lg font-semibold">
          <i class="fa-solid fa-hand-point-right"></i> {acc.question}
        </h1>
        <button
          className={`text-lg mx-3 font-bold ${
            show ? " rotate-0 border-sky-800" : " rotate-90 border-gray-400"
          } ease-in-out duration-300  m-1 hover:border-green-700 `}
        >
          {!show ? (
            <i class="fa-solid fa-angle-right"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </button>
      </div>
      <div className={`overflow-hidden `}>
        <div>
          <p
            className={`text-base font-semibold py-1 px-1 ${
              show
                ? "translate-y-0 height-100"
                : "height-0 translate-y-[-80px] "
            }  ease-in-out duration-500`}
          >
            {acc.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
