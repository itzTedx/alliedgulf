import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="text-center max-w-4xl mx-auto bg-sky-700 p-3 md:p-8 mb-6 mt-14">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-8 text-white">
          Looking for specialty materials for your project?
        </h2>
        <div className="mb-3">
          <Link href="/products">
            <a className="text-white bg-neutral-800 py-3 px-4 uppercase">
              Visit us
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
