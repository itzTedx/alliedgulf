import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import { sanityClient, urlFor } from "../sanity";
import { ServiceSliders } from "../typings";

import slideImage from "../public/factory-design.jpg";
import shades from "../public/shades.png";

interface Props {
  serviceSlider: [ServiceSliders];
}

export default function ServiceSlider({ serviceSlider }: Props) {
  console.log(serviceSlider);
  const settings = {
    arrows: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto p-8">
      <Slider {...settings}>
        <div className="max-w-screen-sm rounded-sm overflow-hidden bg-white text-neutral-800 h-72 lg:h-full">
          <div className="">
            <Image layout="fill" src={shades} alt="Sunset in the mountains" />
            <div className="py-3">
              <div className="font-bold text-sm lg:text-xl mb-2">
                The Coldest Sunset
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "servicesHome"] {
    _id,
    carouselImage,
    carouselTitle,
  }`;

  const serviceSlider = await sanityClient.fetch(query);

  return {
    props: {
      serviceSlider,
    },
  };
};
