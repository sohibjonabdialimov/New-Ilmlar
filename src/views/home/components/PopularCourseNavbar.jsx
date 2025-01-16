import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useState } from "react";

import "./style.css";
import { useQuery } from "react-query";
import { GetCategories } from "../../../services/api";
import { capitalizeFirstLetter } from "../../../utils/formatText";
const PopularCourseNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: category } = useQuery(["GetCategories"], GetCategories);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <Swiper
      slidesPerView={3.5}
      spaceBetween={5}
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 4.5,
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
      {category?.data.data.map((item, index) => {
        return (
          <SwiperSlide
            onClick={() => handleSlideClick(index)}
            key={item.id}
            className={`popular_slider_item text-main_color text-center font-normal text-base ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {capitalizeFirstLetter(item?.name)}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularCourseNavbar;
