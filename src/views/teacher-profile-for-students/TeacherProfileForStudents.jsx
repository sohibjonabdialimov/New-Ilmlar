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
      <div className="flex justify-between mb-16">
        <div className="flex gap-5">
          <img className="w-[142px] h-[146px] rounded-3xl" src={teacher_profile} alt="" />
          <div className="flex justify-between flex-col py-3">
            <h1 className="text-main_color font-semibold text-xl mb-1">
              Michael Wong
            </h1>
            <p className="text-[#758195] text-base font-medium">
              Qisqa bio Lorem, ipsum dolor.
            </p>
            <p className="text-[#758195] text-base font-semibold">
              Kurslar soni: <span className="font-normal">2 ta</span>
            </p>
            <p className="text-[#758195] text-base font-semibold">
              Obunachilar soni: <span className="font-normal">159 ta</span>
            </p>
          </div>
        </div>
        <div>
          <button className="btn text-sm p-[10px_30px]">Obuna bo'ling</button>
        </div>
      </div>

      <div className="p-6 bg-[#f1f2f466] rounded-[16px] mb-16">
        <h2 className="text-3xl text-main_color font-semibold mb-6">
          O’qituvchi haqida ma’lumot
        </h2>
        <p className="text-lg leading-8">
          Explore Auto Layout in Figma, starting with horizontal, vertical, and
          wrap layouts. Manage padding, gaps, and alignment, and use constraints
          like fixed, hug, and fill for optimal sizing. Design navigation bars,
          top bars, headings, cards, and lists for mobile, tablet, and desktop.
          This course prepares you to create scalable and adaptable UI
          designs...
        </p>
      </div>

      <div className="relative mt-14 mb-5">
        <h1 className="title absolute top-0">Kurslar</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="comments_swiper"
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
