import teacher_profile from "../../assets/images/teacher_profile.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "../home/components/NewCourseCard";
const TeacherProfileForStudents = () => {
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
    <div className="py-7">
      <div className="flex justify-between sm:flex-row flex-col gap-5 mb-16">
        <div className="flex items-center sm:gap-5 gap-3">
          <img className="sm:w-[142px] sm:h-[146px] w-[84px] h-[102px] sm:rounded-3xl rounded-[8px] object-cover" src={teacher_profile} alt="" />
          <div className="flex gap-1.5 justify-between flex-col">
            <h1 className="text-main_color font-semibold sm:text-xl text-base mb-1">
              Michael Wong
            </h1>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              Qisqa bio Lorem, ipsum dolor.
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Kurslar soni: <span className="font-normal">2 ta</span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Obunachilar soni: <span className="font-normal">159 ta</span>
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full">
          <button className="btn text-sm sm:p-[10px_30px] p-[8px_20px] w-full">Obuna bo'ling</button>
        </div>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
        <h2 className="sm:text-3xl text-lg text-main_color font-semibold sm:mb-6 mb-2">
          O’qituvchi haqida ma’lumot
        </h2>
        <p className="sm:text-xl sm:leading-8 text-sm">
          Explore Auto Layout in Figma, starting with horizontal, vertical, and
          wrap layouts. Manage padding, gaps, and alignment, and use constraints
          like fixed, hug, and fill for optimal sizing. Design navigation bars,
          top bars, headings, cards, and lists for mobile, tablet, and desktop.
          This course prepares you to create scalable and adaptable UI
          designs...
        </p>
      </div>

      <div className="relative mt-14 sm:mb-5 mb-10">
        <h1 className="title absolute top-0">Kurslar</h1>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
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

export default TeacherProfileForStudents;
