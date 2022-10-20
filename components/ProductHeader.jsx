import Image from "next/future/image";
import React from "react";

const ProductBanner = () => {
  return (
    <>
      <section className="bg-neutral-800 w-screen">
        <div className="container mx-auto flex flex-col-reverse md:flex-row">
          <div className="container space-y-1 md:space-y-3 flex flex-col justify-center p-4 md:p-0 items-center">
            <h1 className="text-4xl md:text-7xl text-sky-600 font-bold">
              Our Products
            </h1>
            <p className="text-neutral-300">Looking for specialty materials?</p>
          </div>
          <div className="container">
            <Image
              src="/products-img.jpg"
              alt="List of Services we provide"
              height={400}
              width={633}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductBanner;
