import React from "react";

const AboutCommitment = () => {
  return (
    <div>
      <section className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl my-9 font-light">
          Our <span className="font-medium text-sky-700">Commitment</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 md:gap-12 px-3">
          <div className="rounded-lg bg-white py-4 px-6 h-44 hover:scale-105 transition side-commit">
            <h5 className="text-2xl font-medium py-2">We Believe</h5>
            <p className="text-sm font-light">
              The key element behind our success is a continuous commitment to
              fulfill the client{`'`}s needs.
            </p>
          </div>
          <div className="rounded-lg main-commit bg-sky-500 text-white py-4 px-6 hover:scale-105 transition hover:animate-pulse">
            <h5 className="text-2xl font-medium py-2 leading-6">
              REMAIN COMMITTED
            </h5>
            <p className="text-sm font-light pb-6">
              To our designs and construction quality while respecting time and
              budgetary constraints enables us to provide high quality design
              and construction services to our clients.
            </p>
          </div>
          <div className="rounded-lg bg-white py-4 px-6 h-44 hover:scale-105 transition side-commit">
            <h5 className="text-2xl font-medium py-2">Our Commitment</h5>
            <p className="text-sm font-light">
              To excellence in client service is confirmed by this high
              percentage of repeat business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutCommitment;
