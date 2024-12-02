import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useState } from "react";
const navData = [
  "Hammasi",
  "Dasturlash",
  "Dizayn",
  "Biznes",
  "Fan va texnika",
  "Dasturlash",
  "Dizayn",
  "Biznes",
  "Fan va texnika",
  "Shaxsiy rivojlanish"
];
import "./style.css";
const PopularCourseNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Hozirgi faol element indexini saqlash

  const handleSlideClick = (index) => {
    setActiveIndex(index); // Bosilgan elementni faol deb belgilash
  };
  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={5}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 8.5,
          spaceBetween: 16,
        },
      }}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper popular_navbar"
    >
      {navData.map((item, index) => {
        return (
          <SwiperSlide
            onClick={() => handleSlideClick(index)}
            key={item}
            className={`popular_slider_item text-main_color font-normal text-base ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {item}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularCourseNavbar;
