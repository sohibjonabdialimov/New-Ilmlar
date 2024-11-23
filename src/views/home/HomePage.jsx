import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "./components/NewCourseCard";
import PopularCourseNavbar from "./components/PopularCourseNavbar";
import TeachersGroupCard from "./components/TeachersGroupCard";
import "./home.css";
const HomePage = () => {
  const navData = [
    {
      id: 1,
      name: "Kurs nomi 1",
    },
    {
      id: 2,
      name: "Kurs nomi 2",
    },
    {
      id: 3,
      name: "Kurs nomi 3",
    },
    {
      id: 4,
      name: "Kurs nomi 4",
    },
    {
      id: 5,
      name: "Kurs nomi 5",
    },
    {
      id: 6,
      name: "Kurs nomi 6",
    },
    {
      id: 7,
      name: "Kurs nomi 6",
    },
    {
      id: 8,
      name: "Kurs nomi 6",
    },
    {
      id: 9,
      name: "Kurs nomi 6",
    },
  ];
  return (
    <div className="py-6">
      <div className="relative">
        <h1 className="title absolute top-0">Yangi qo’shilgan kurslar</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-16 mb-14">
        <h1 className="title absolute top-0">Obuna bo‘ling va o‘rganing</h1>
        <Swiper
          slidesPerView={6}
          spaceBetween={24}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <TeachersGroupCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <h1 className="title">Ommabop kurslarimiz</h1>
      <PopularCourseNavbar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 mb-5">
        {navData.map((item) => {
          return <NewCourseCard key={item.id} />;
        })}
      </div>
      <div className="flex justify-center">
        <button className="bg-blue_color text-white font-normal rounded-[100px] py-3 px-14 text-base">
          Hammasi ko’rish
        </button>
      </div>
      <div className="relative mt-14 mb-10">
        <h1 className="title absolute top-0">Bepul kurslar</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
