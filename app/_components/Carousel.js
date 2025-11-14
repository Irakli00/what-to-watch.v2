"use client";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel({ data }) {
  return (
    <Swiper>
      {data.map((el, i) => (
        <SwiperSlide key={i}>
          <h1>{el.title.romaji}</h1>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
