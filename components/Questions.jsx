import Link from "next/link";
import React from "react";

const Questions = () => {
  return (
    <div className="overflow-x">
      <div className="relative w-4/5 md:w-[38em] py-7 px-10 rounded-lg mx-auto text-white md:shadow-xl duration-500 ease-in-out radial-gradient question">
        <h5 className="text-4xl font-bold pb-1 max-w-[12em] md:max-w-[100%]">
          Have any Questions on Mind?
        </h5>
        <p className="mb-8 arrow font-light">
          Let{`'`}s talk about your project
        </p>
        <div className="pb-3">
          <Link href="/contact">
            <a className="bg-white text-black px-4 py-2 hover:bg-neutral-800 hover:text-white transition duration-300 uppercase font-medium text-sm">
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Questions;
