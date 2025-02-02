import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useContext, useState } from "react";

import "./style.css";
import { useQuery } from "react-query";
import { GetCategories } from "../../../services/api";
import { capitalizeFirstLetter } from "../../../utils/formatText";
import Skeleton from "react-loading-skeleton";
import { CoursesContext } from "../../../context/CoursesProvider";
const PopularCourseNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
   const {
      setCategoryF,
    } = useContext(CoursesContext);
  const { data: category, isLoading } = useQuery(
    ["GetCategories"],
    GetCategories
  );

  const handleSlideClick = (id, index) => {
    setCategoryF(id);
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
      {isLoading ? (
        <div className="flex items-center sm:gap-5 gap-1">
          <Skeleton className="popular_slider_item" width={100} />
          <Skeleton className="popular_slider_item" width={100} />
          <Skeleton className="popular_slider_item" width={100} />
        </div>
      ) : (
        category?.data.data.map((item, index) => {
          return (
            <SwiperSlide
              onClick={() => handleSlideClick(item?.id, index)}
              key={item.id}
              className={`popular_slider_item text-main_color text-center font-normal text-base ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {capitalizeFirstLetter(item?.name)}
            </SwiperSlide>
          );
        })
      )}
    </Swiper>
  );
};

export default PopularCourseNavbar;
