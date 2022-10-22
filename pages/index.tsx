import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";

import Featured from "../components/Featured";
import Questions from "../components/Questions";
import Slider from "../components/Slider";
import WebBanner from "../components/WebBanner";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/lazy";
// import required modules
import { Lazy, Autoplay } from "swiper";

import { sanityClient, urlFor } from "../sanity";
import { ServiceSliders } from "../typings";

interface Props {
  serviceSlider: [ServiceSliders];
}

export default function Home({ serviceSlider }: Props) {
  const meta = {
    title: "Allied Gulf Construction Services W.L.L - Bahrain",
    description:
      "AGCS is a Bahrain based Civil and Mechanical contracting company handling various prestigious projects and ranked as a leading General Trading company",
    keywords:
      "allied gulf, agcs, construction, service, materials, movement joints, expansion joints, interior",
    url: "https://www.alliedgulf.me/",
    image: "https://alliedgulf.vercel.app/og-img.jpg",
  };
  return (
    <div>
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

      <main className="grid lg:grid-cols-2 items-center justify-items-center">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-6xl 2xl:text-7xl text-sky-700 py-3">
            <span>
              Diversity Services, <br />
            </span>
            <span>
              Unvarying Quality, <br />
            </span>
            <span>Timely Delivery.</span>
          </h1>
          <div className="">
            <p className="font-light text-lg">
              For all Construction Services and Construction Specialty Materials
            </p>
            <div className="hidden">
              <p>
                We Allied Gulf Construction Service is a Bahrain based Civil and
                Mechanical contracting company handling various prestigious
                projects and ranked as a leading General Trading company in
                Bahrain.
              </p>
              <p>
                Our principal business is to provide Construction of Houses,
                Buildings, Shopping Centers, Restaurants, Complete Interior Fit
                out Services, Furniture, Kitchen Equipment, Structural Works,
                Coating & Insulation, Turnkey and Restaurant Projects, Shades,
                Prefab Houses / Offices, M.E.P, Floorings, Skylight, Portable
                cabins, Container Conversion, Acoustics and General Trading of
                Equipment,Machineries and Specialty Construction Materials.
              </p>
            </div>
          </div>
          <div className="font-medium text-xl lg:text-2xl space-x-1 py-6">
            <Link href="/products">
              <a className="py-2 px-3 bg-sky-700 hover:bg-sky-600 transition hover:animate-pulse text-white">
                Products
              </a>
            </Link>
            <Link href="/contact">
              <a className="py-[7px] px-3 text-sky-700 border-2 hover:bg-sky-600 transition hover:text-white hover:animate-pulse border-sky-700">
                Contact us
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:pl-12 ">
          <Slider />
        </div>
      </main>

      <div className="bg-white">
        <section className="container group mx-auto flex flex-col lg:flex-row justify-center gap-9 justify-items-center py-8 md:py-16 px-6 md:px-0">
          <div className="space-y-4 max-w-3xl text-justify md:py-8">
            <h2 className="font-light text-2xl lg:text-5xl">
              We Provide You
              <br />
              The{" "}
              <span className="font-bold lg:text-6xl text-sky-700">
                Best Experience
              </span>
            </h2>
            <div className="flex gap-2 items-center ">
              <div className="bg-sky-500 rounded-full p-2">
                <div className="h-12 w-12 p-1">
                  <Image
                    src="/Medal.svg"
                    alt="High quality services at fair prices"
                    height={48}
                    width={48}
                  />
                </div>
              </div>
              <p className="font-normal md:font-light p-2 first-letter:pl-0 md:first-letter:pl-3 text-sm md:text-lg">
                To perform for our customers the highest level of quality
                construction services at fair and market-competitive prices.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="bg-sky-500 rounded-full p-2">
                <div className="h-12 w-12 p-1">
                  <Image
                    src="/Satisfaction.svg"
                    alt="Customer Satisfaction is our priority"
                    height={48}
                    width={48}
                  />
                </div>
              </div>
              <p className="font-normal md:font-light p-2 first-letter:pl-0 md:first-letter:pl-3 text-sm md:text-lg">
                To ensure the longevity of our company through repeat and
                referral business achieved by customer satisfaction in all areas
                including timeliness, attention to detail, and service-minded
                attitudes.
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="bg-sky-500 rounded-full p-2">
                <div className="h-12 w-12 p-1">
                  <Image
                    src="/Team.svg"
                    alt="Unity in diversity "
                    height={48}
                    width={48}
                  />
                </div>
              </div>
              <p className="font-normal md:font-light p-2 first-letter:pl-0 md:first-letter:pl-3 text-sm md:text-lg">
                To maintain the highest levels of professionalism, integrity,
                honesty, and fairness in our relationships with our suppliers,
                subcontractors, professional associates, and customers.
              </p>
            </div>
          </div>
          <div className="md:h-full group-hover:scale-105 transition duration-500 ">
            <Image
              src="/exp.jpg"
              alt="Long term experience in the field of Construction and Material supply"
              height={481}
              width={352}
            />
          </div>
        </section>
      </div>

      <section className="w-full text-center bg-neutral-800 text-neutral-200">
        <div className=" p-8 md:p-20">
          <h3 className="font-light text-3xl md:text-5xl">
            Our <span className="font-medium text-sky-500">Services</span>
          </h3>
          <p className="font-light text-sm"> we do for you</p>
        </div>
        <div className="w-full lg:mx-auto lg:max-w-7xl">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            grabCursor={true}
            lazy={true}
            modules={[Lazy, Autoplay]}
            className="mySwiper"
          >
            {serviceSlider.map((serviceSlider) => (
              <div key={serviceSlider._id}>
                <SwiperSlide>
                  {serviceSlider.carouselImage && (
                    <div className="bg-white flex h-full flex-col relative object-cover">
                      <Image
                        src={urlFor(serviceSlider.carouselImage).url()!}
                        alt={serviceSlider.carouselImage.caption}
                        width={534}
                        height={400}
                      />
                      <p className="text-black py-4 md:text-xl">
                        {serviceSlider.carouselTitle}
                      </p>
                    </div>
                  )}
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        <div className="p-12">
          <Link href="/services">
            <a className=" py-2 px-3 rounded-md hover:bg-sky-600 bg-sky-700 transition ease-out duration-700 text-white">
              View More
            </a>
          </Link>
        </div>
      </section>
      <section className="products">
        <div className="bg-gray-200 max-w-7xl mx-auto shadow-xl">
          <div className="flex flex-col lg:flex-row justify-center gap-10 py-12 text-center px-3 lg:text-left lg:px-24 ">
            <div className="space-y-3 flex flex-col justify-center md:w-96">
              <h4 className="font-light text-2xl md:text-5xl ">
                Our <span className="font-bold text-sky-700">Products</span>
              </h4>
              <p className="text-xl md:text-3xl ">
                We offer a wide range of services and provide complete client
                satisfaction.
              </p>
            </div>
            <div className="">
              <ul className="pb-8 text-2xl md:text-3xl space-y-5">
                <li>Expansion Joints</li>
                <li>Movement Joints</li>
                <li>Tile Trims</li>
                <li>Channels & Gratings</li>
                <li>Manhole cover</li>
              </ul>
              <Link href="/products" passHref>
                <a
                  className="text-sky-700 hover:text-sky-600 underline underline-offset-2 transition-all link-arrow duration-300 hover:pl-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a look at our new products:
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="py-8 px-3">
          <Featured />
        </div>
        <div className="pb-16 pt-8">
          <Questions />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "servicesHome"] {
    _id,
    carouselImage{
      asset->{url},
      caption
    },
    carouselTitle,
  }`;

  const serviceSlider = await sanityClient.fetch(query);

  return {
    props: {
      serviceSlider,
    },
  };
};
