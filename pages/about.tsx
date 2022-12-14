import Head from "next/head";
import Image from "next/future/image";
import React from "react";

import Featured from "../components/Featured";
import AboutCommitment from "../components/AboutCommitment";
import Questions from "../components/Questions";

const about = () => {
  const meta = {
    title: "About Allied Gulf Construction Services",
    description:
      "We provide you the best experience to perform for our customers the highest level of quality construction services at fair and market-competitive prices",
    keywords:
      "allied gulf, agcs, construction, service, materials, movement joints, expansion joints, interior, info, sales, marketing",
    url: "https://www.alliedgulf.me/about",
    image: "https://alliedgulf.vercel.app/og-img.jpg",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.url} />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.description} />
      </Head>

      <section className="overflow-hidden">
        <div className="text-white bg-neutral-800">
          <section className="relative pointer-events-none">
            <div className="absolute bottom-0 left-0 w-screen z-10  object-cover">
              <Image
                src="/about-wave.svg"
                alt="Wave to better materials in bahrain"
                width="1920"
                height="936"
              />
            </div>
            <div className="container mx-auto relative z-[3] p-0">
              <div className="flex flex-col md:pt-24">
                <div className="flex md:items-center flex-col md:py-2 font-light mb-14 text-center px-3 md:px-0">
                  <h1 className="md:text-4xl text-2xl py-3">
                    We Are{" "}
                    <span className="text-sky-600 font-medium">
                      Allied Gulf Construction Services
                    </span>
                  </h1>
                  <h3 className="font-light text-sm md:text-base">
                    Providing you the most top selling products in one place.
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 md:px-72 pb-20">
                  <div className="pointer-events-none">
                    <div className="img-box scale-95 md:scale-125 pb-4">
                      <Image
                        alt="We agcs always in top of the mountain of construction materials"
                        src="/about-mount.svg"
                        height={554}
                        width={816}
                      />
                    </div>
                  </div>
                  <div className="">
                    <div className="font-light text-sm text-justify px-4 md:px-0 flex flex-col gap-6">
                      <p>
                        We Allied Gulf Construction Service is a Bahrain based
                        Civil and Mechanical contracting company handling
                        various prestigious projects and ranked as a leading
                        General Trading company in Bahrain.
                      </p>
                      <p>
                        Our principal business is to provide Construction of
                        Houses, Buildings, Shopping Centers, Restaurants,
                        Complete Interior Fit out Services, Furniture, Kitchen
                        Equipment, Structural Works, Coating & Insulation,
                        Turnkey and Restaurant Projects, Shades, Prefab Houses /
                        Offices, M.E.P, Floorings, Skylight, Portable cabins,
                        Container Conversion, Acoustics and General Trading of
                        Equipment, Machineries and Specialty Construction
                        Materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <AboutCommitment />
      <section className="flex max-w-6xl flex-col md:flex-row mx-auto py-6 px-3 md:py-24">
        <div className="pointer-events-none">
          <Image src="/about-mount.svg" alt="mount" height={554} width={816} />
        </div>
        <div className="max-w-2xl text-justify flex flex-col gap-3">
          <h5 className="text-3xl font-light py-3">
            Work <span className="font-medium text-sky-700">Experience</span>
          </h5>
          <p>
            Markets serviced by our firm include Corporate offices, Public
            facilities, Hospitality, Retail, Health care, Call centers, Research
            and Development Centers, Hotels, Schools, Restaurants, Salon, Spa,
            Fitness centers, Industrial, Oil Field and Marine Projects,
            Maintenance and Tenant development for our clients.
          </p>
          <p>
            Allied Gulf has Provided Design, Construction, Interior Fit out
            services, M.E.P. Services, Expansion joint solutions, Structural
            Works, Paintings, Marine support services, Shades, Sky lights &
            Domes, Coating & Insulations, Acoustics, Water proofing, Flooring,
            supply of equipment, Machineries, Construction materials, which
            include the most famous developers. Private clients, Malls,
            Factories, Retail chains, Food service outlets, Corporate.
          </p>
          <p>
            AGCS represents various reputed products and brands in Bahrain. We
            import, supply and install equipment ever since our beginning, we
            have proudly developed a well-structured and organized team which is
            behind our success.
          </p>
        </div>
      </section>

      <section className="max-w-7xl px-3 py-6 md:py-0 mx-auto">
        <Featured />
      </section>
      <section className="py-12 ">
        <Questions />
      </section>
    </>
  );
};

export default about;
