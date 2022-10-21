import React from "react";
import Image from "next/future/image";

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

export default function ProjectSlider() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        navigation={false}
        lazy={true}
        modules={[Lazy, Autoplay]}
        className="md:h-[55vh] w-full object-cover"
      >
        <SwiperSlide>
          <div className="">
            <Image
              src="/Photo-1.jpg"
              width={1280}
              height={614}
              alt="AMPHITHEATER is the one of the leading Theater in Kingdom of Bahrain. Allied Gulf Construction Services had done some of the projects, tire screen, container conversion, bus toilets, bar counters, rubber fencing, container toilets etc."
              className="swiper-lazy w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Photo-2.jpg"
            width={1280}
            height={614}
            alt="AMPHITHEATER is the one of the leading Theater in Kingdom of Bahrain. Allied Gulf Construction Services had done some of the projects, tire screen, container conversion, bus toilets, bar counters, rubber fencing, container toilets etc."
            className="swiper-lazy w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/Photo-3.jpg"
            width={1280}
            height={614}
            alt="AMPHITHEATER is the one of the leading Theater in Kingdom of Bahrain. Allied Gulf Construction Services had done some of the projects, tire screen, container conversion, bus toilets, bar counters, rubber fencing, container toilets etc."
            className="swiper-lazy w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
