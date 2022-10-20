import Image from "next/future/image";
import React from "react";

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
          <Image src="/featured-brand-1.png" alt="" height={61} width={1077} />
          <Image src="/featured-brand-2.png" alt="" height={61} width={1077} />
          <Image src="/featured-brand-3.png" alt="" height={61} width={1077} />
        </div>
      </section>
    </div>
  );
};

export default Featured;
