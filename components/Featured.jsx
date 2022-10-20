import Image from "next/image";
import React from "react";
import featured1 from "../public/featured-brand-1.png";
import featured2 from "../public/featured-brand-2.png";
import featured3 from "../public/featured-brand-3.png";

const Featured = () => {
  return (
    <div>
      <section className="text-center md:py-6 space-y-3">
        <h5 className="text-4xl font-light">
          Meet Our <span className="font-medium text-sky-700">Brands</span>
        </h5>
        <p className="font-light text-sm">
          We’re collaborating with these top brands to fulfils you with best
          quality products distributed in kingdom of bahrain.
        </p>
        <div className="py-5 flex flex-col items-center">
          <Image src={featured1} alt="" />
          <Image src={featured2} alt="" />
          <Image src={featured3} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Featured;
