import Image from "next/future/image";
import Link from "next/link";
import React from "react";

const Brochure = () => {
  return (
    <div className="flex flex-col md:flex-row bg-sky-500">
      <div className="w-full  flex items-center justify-center">
        <div className="ml-auto mr-8">
          <Image
            src="/brochure.svg"
            width="475"
            height="292"
            alt="Brochure about our product, services and projects"
          />
        </div>
      </div>
      <div className="bg-neutral-800 flex flex-col gap-3 w-full p-8 md:p-16">
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
