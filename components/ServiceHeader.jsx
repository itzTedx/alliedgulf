import Image from "next/future/image";
import React from "react";

const Header = () => {
  return (
    <>
      <section className="bg-neutral-800 w-screen overflow-hidden">
        <div className="container mx-auto flex flex-col-reverse md:flex-row">
          <div className="container space-y-1 md:space-y-3 flex flex-col justify-center items-center pb-6 md:pb-0">
            <h1 className="text-4xl md:text-7xl text-white font-light pt-3 md:pt-0">
              Our <span className="font-bold text-sky-600">Services</span>
            </h1>
            <p className="text-neutral-300">
              List of Services we provide in{" "}
              <span className="italic">Kingdom of Bahrain</span>
            </p>
          </div>
          <div className="container">
            <Image
              src="/service-img.jpg"
              alt="List of Services we provide"
              width={634}
              height={400}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
