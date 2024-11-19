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
      slidesPerView={6.5}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      {navData.map((item, index) => {
        return (
          <SwiperSlide
            onClick={() => handleSlideClick(index)}
            key={item}
            className={`slider-item text-main_color font-normal text-base ${
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
