import Image from "next/image";
import Link from "next/link";
import React from "react";
import brDw from "../public/brochure.svg";

const Brochure = () => {
  return (
    <div className="flex flex-col bg-neutral-800">
      <div className="w-full flex items-center justify-center bg-sky-500 py-6">
        <div className="ml-auto ">
          <Image
            src={brDw}
            alt="Brochure about our product, services and projects"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-3 w-full p-8 md:p-12">
        <h5 className="text-sky-500 uppercase text-lg">
          Download our free <span className="font-medium">brochure</span>
        </h5>
        <div className="max-w-sm">
          <p className="text-white font-light leading-7 text-justify">
            Want to know more about our Services, Products and Projects done?
            Checkout this Brochure for more details about us.
          </p>
        </div>
        <div className="pt-3">
          <Link href="/Company-profile-agcs.pdf" rel="noopener noreferrer">
            <a
              target="_blank"
              className="py-2 px-4 rounded-sm hover:bg-gray-300 transition bg-sky-500 text-neutral-800 uppercase font-medium"
            >
              Download
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
