import * as Accordion from "@radix-ui/react-accordion";
import right from "../../../assets/images/right.png";
import time from "../../../assets/images/time.png";
import check_green from "../../../assets/images/check_green.png";
import "./teacher-course-info.css";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import CommentCard from "../../../components/comment_card/CommentCard";

function TeacherCourseInfo() {
  const navigate = useNavigate();
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
  const modules = [
    {
      title: "1-Modul. JavaScript asoslari",
      duration: "7.21 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "2-Modul. JavaScript loyiha",
      duration: "3.23 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: true,
    },
    {
      title: "3-Modul. Murakkab terminlar",
      duration: "4.53 soat",
      lecture: "12 ta darslik",
      lessons: [
        { title: "JSON va AJAX", time: "28:53" },
        { title: "Promise", time: "17:51" },
        { title: "Amaliyot. JSON Placeholder", time: "30:58" },
        { title: "Amaliyot. Fetch Telegram BOT", time: "29:49" },
        { title: "Array metodlar", time: "13:51" },
        { title: "NPM, ESLint, JSON-Server", time: "29:09" },
        { title: "Amaliyot. Slider Carousel", time: "32:20" },
        { title: "Amaliyot. LocalStorage", time: "19:44" },
        { title: "Regular Expression", time: "18:58" },
        { title: "Webpack", time: "24:44" },
        { title: "Amaliyot. Webpack", time: "31:19" },
        { title: "Async await. Try catch", time: "15:07" },
      ],
      isOpen: true,
    },
    {
      title: "4-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
    {
      title: "5-Modul. Paint loyihasi",
      duration: "1.40 soat",
      lecture: "12 ta darslik",
      lessons: [],
      isOpen: false,
    },
  ];
  const handeEditFunction = (e) => {
    e.stopPropagation();

    console.log("Hello");
    
  }

  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="btn back_btn inline-flex items-center gap-3 cursor-pointer p-[4px_20px]"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <button className="text-lg">Ortga qaytish</button>
      </div>
      <div className="grid grid-cols-2 gap-10 pb-20 pt-12">
        <div className="col-span-1 flex flex-col justify-between">
          <div className="">
            <h1 className="text-6xl pt-7 font-semibold pb-8">
              Memorable UI Design For Interactive Experiences
            </h1>
            <h4 className="text-xl">
              Kurs muallifi:{" "}
              <Link className="text-2xl font-semibold border-b-2 border-black">
                {"Saidjon Azamatov"}
              </Link>
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-y-6">
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-solid fa-globe"></i>
              <p className="font-bold">
                Ta'lim tili: <span className="font-normal">{"English"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-regular fa-clock"></i>
              <p className="font-bold">
                Davomiyligi: <span className="font-normal">{"5 oy"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-solid fa-bolt"></i>
              <p className="font-bold">
                Murakkablik: <span className="font-normal">{"Oson"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-solid fa-user-check"></i>
              <p className="font-bold">
                Sotib olgan:{" "}
                <span className="font-normal">{"5 ta o'quvchi"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-regular fa-star"></i>
              <p className="font-bold">
                Baho: <span className="font-normal">{"4"}</span>
              </p>
            </div>
            <div className="flex items-center gap-3 text-lg">
              <i className="fa-regular fa-comment"></i>
              <p className="font-bold">
                Fikrlar: <span className="font-normal">{"5 ta sharh"}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img
            className="w-full h-full aspect-[8/7] rounded-[16px]"
            src="https://assets.awwwards.com/assets/redesign/images/pages/masterclass/courses/louis/poster.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow flex-shrink-0 basis-0 w-[65%]">
          <div className="p-6 bg-[#f1f2f466] rounded-[16px] mb-16">
            <h2 className="text-3xl text-main_color font-semibold mb-6">
              Kurs haqida qisqacha
            </h2>
            <p className="text-xl leading-8">
              Explore Auto Layout in Figma, starting with horizontal, vertical,
              and wrap layouts. Manage padding, gaps, and alignment, and use
              constraints like fixed, hug, and fill for optimal sizing. Design
              navigation bars, top bars, headings, cards, and lists for mobile,
              tablet, and desktop. This course prepares you to create scalable
              and adaptable UI designs. Explore Auto Layout in Figma, starting
              with horizontal, vertical, and wrap layouts. Manage padding, gaps,
              and alignment, and use constraints like fixed, hug, and fill for
              optimal sizing. Design navigation bars, top bars, headings, cards,
              and lists for mobile, tablet, and desktop. This course prepares
              you to create scalable and adaptable UI designs...
            </p>
          </div>
          <div className="p-6 bg-[#f1f2f466] rounded-[16px] mb-16">
            <h2 className="text-3xl text-main_color font-semibold mb-6">
              Siz nimani o’rganasiz?
            </h2>
            <div className="flex flex-col gap-6">
              <div className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex gap-4">
                <div className="w-[32px] h-[32px]">
                  <img className="w-full h-full" src={check_green} alt="" />
                </div>
                <div className="course_advantage">
                  <h2 className="text-xl font-semibold text-main_color mb-1">
                    Mijozlarga loyihani taqdim etish
                  </h2>
                  <p className="text-[#758195] text-base font-normal">
                    UX/UI kursida siz figmada noldan ishlashni va turli xil
                    murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
                    Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri
                    portfelni shakllantirish.
                  </p>
                </div>
              </div>
              <div className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex gap-4">
                <div className="w-[32px] h-[32px]">
                  <img className="w-full h-full" src={check_green} alt="" />
                </div>
                <div className="course_advantage">
                  <h2 className="text-xl font-semibold text-main_color mb-1">
                    Mijozlarga loyihani taqdim etish
                  </h2>
                  <p className="text-[#758195] text-base font-normal">
                    UX/UI kursida siz figmada noldan ishlashni va turli xil
                    murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
                    Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri
                    portfelni shakllantirish.
                  </p>
                </div>
              </div>
              <div className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex gap-4">
                <div className="w-[32px] h-[32px]">
                  <img className="w-full h-full" src={check_green} alt="" />
                </div>
                <div className="course_advantage">
                  <h2 className="text-xl font-semibold text-main_color mb-1">
                    Mijozlarga loyihani taqdim etish
                  </h2>
                  <p className="text-[#758195] text-base font-normal">
                    UX/UI kursida siz figmada noldan ishlashni va turli xil
                    murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz.
                    Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri
                    portfelni shakllantirish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-[#f1f2f466] rounded-[16px]">
            <h2 className="text-3xl text-main_color font-semibold mb-6">
              Video darslar
            </h2>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-book"></i>
                <p className="text-[#1B1D20] font-normal text-base">
                  12 ta darslik
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img className="w-[18px] h-[18px]" src={time} alt="" />
                <p className="text-[#1B1D20] font-normal text-base">
                  1.40 soat
                </p>
              </div>
            </div>
            <Accordion.Root type="multiple" className="accordion-root w-full">
              {modules.map((module, index) => (
                <Accordion.Item
                  value={`module-${index}`}
                  key={index}
                  className="accordion-item"
                >
                  <Accordion.Header className="accordion-header">
                    <Accordion.Trigger className="accordion-trigger">
                      <div className="flex items-center gap-3">
                        <img className="w-[20px]" src={right} alt="" />
                        <p>{module.title}</p>
                      </div>
                      <div className="flex items-center gap-2">
                      <button className="btn text-base text-blue_color font-normal p-[4px_15px]">
                        Ko'rish
                      </button>
                      <button onClick={handeEditFunction} className="btn text-base text-blue_color font-normal p-[4px_15px]">
                        Tahrirlash
                      </button>

                      </div>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="accordion-content">
                    <ul>
                      {module.lessons.length > 0 ? (
                        module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex}>
                            {lesson.title} - {lesson.time}
                          </li>
                        ))
                      ) : (
                        <li>Hech qanday dars yo'q</li>
                      )}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
        <div className="course_prise_sticky sticky top-4 w-[35%] h-[13rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]">
          <div className="flex justify-between mb-4">
            <p className="text-2xl font-[400]">Kurs narxi:</p>
            <p className="font-bold text-2xl">299 000 so'm</p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-star text-[#DF742EFF]"></i>
              <p className="font-normal">4.0</p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-comments"></i>
              <p className="font-normal">10 ta sharh</p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-regular fa-circle-check text-blue_color"></i>
              <p className="font-normal">125 ta o'quvchi</p>
            </div>
          </div>
          <hr />

          <div className="flex justify-center items-center pt-5 gap-2">
            <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              Tahrirlash
            </button>
            <button onClick={() => navigate("/course-statistic")} className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              Statistika
            </button>
            <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              O'chirish
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-14 mb-5">
        <h1 className="title absolute top-0">Izohlar</h1>
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
                <CommentCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default TeacherCourseInfo;
