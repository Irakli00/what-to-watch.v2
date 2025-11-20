"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SimpleCard from "./SimpleCard";

function Carousel({
  data,
  slidesPerView = 10,
  speed = 6000,
  autoplay = { delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true },
}) {
  return (
    // may change to server
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={true}
      modules={[Autoplay]}
      autoplay={autoplay || {}}
      loop={true}
      speed={speed}
    >
      {data.map((el, i) => (
        <SwiperSlide key={i}>
          <SimpleCard
            id={el.id}
            type="anime"
            img={el.coverImage.large}
          ></SimpleCard>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
