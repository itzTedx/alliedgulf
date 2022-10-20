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
import { Lazy, Autoplay, Pagination, EffectCreative } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, 0, -200],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        navigation={false}
        lazy={true}
        modules={[Lazy, Autoplay, Pagination, EffectCreative]}
        className="w-[40vh]  h-[40vh] xl:w-[92vh] xl:h-[86vh]"
      >
        <SwiperSlide>
          <Image src="/1.jpg" width={930} height={862} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/2.jpg" width={930} height={862} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/3.jpg" width={930} height={862} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/4.jpg" width={930} height={862} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/5.jpg" width={930} height={862} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
