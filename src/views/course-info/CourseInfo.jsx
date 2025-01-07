import right from "../../assets/images/right.png";
import check_green from "../../assets/images/check_green.png";
import teacher from "../../assets/images/teacher_profile.jpg";
import "./course-info.css";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import CommentCard from "../../components/comment_card/CommentCard";
import NewCourseCard from "../home/components/NewCourseCard";
import { useQuery } from "react-query";
import { GetBuyCourse, GetCourseDetail } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { message } from "antd";

function CourseInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();

  const { data: courseDetail } = useQuery(["GetCourseDetail"], () =>
    GetCourseDetail(id)
  );
  let course = courseDetail?.data.data;
console.log(course);

  function handleBuyCourse(id) {
    GetBuyCourse(id).then((res) => {
      console.log(res);
      messageApi
        .open({
          type: "info",
          content: <h1 className="text-lg">{res.message}</h1>,
        })
        .catch((err) => {
          messageApi.open({
            type: "error",
            content: <h1 className="text-lg">{err.message}</h1>,
          });
        });
    });
  }
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

  return (
    <div className="py-7">
      {contextHolder}
      <div
        onClick={() => navigate(-1)}
        className="inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium"
      >
        <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
        <button className="sm:text-lg text-sm">Ortga qaytish</button>
      </div>
      <div className="grid grid-cols-2 gap-10 sm:pb-20 pb-12 sm:pt-12 pt-4">
        <div className="sm:col-span-1 col-span-2 flex flex-col justify-between">
          <div className="">
            <h1 className="sm:text-[2.6rem] sm:leading-[3.3rem] text-xl sm:pt-7 pt-2 font-semibold sm:pb-8 pb-3">
              {course?.name}
            </h1>
            <div className="flex justify-between gap-3 items-start">
              <div
                onClick={() => navigate(`/teacher-profile/${course?.teacher_id}`)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  className="w-[70px] h-[70px] object-cover rounded-full"
                  src={teacher}
                  alt="O'qituvchi rasmi"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="sm:text-xl text-sm font-medium">
                    {"Saidjon Azamatov"}
                  </h2>
                  <p className="sm:text-base text-xs font-normal">Dasturlash</p>
                </div>
              </div>
              <button className="btn p-[5px_15px]">Obuna bo'lish</button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:gap-y-6 gap-y-3">
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-globe"></i>
              <p className="font-bold">
                Ta'lim tili:{" "}
                <span className="font-normal">
                  {course?.language == 3
                    ? "Ingliz tili"
                    : course?.language == 2
                    ? "Rus tili"
                    : "O'zbek tili"}
                </span>
              </p>
            </div>
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-regular fa-clock"></i>
              <p className="font-bold">
                Davomiyligi:{" "}
                <span className="font-normal">{course?.period} oy</span>
              </p>
            </div>
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-user-check"></i>
              <p className="font-bold">
                O'quvchilar:{" "}
                <span className="font-normal">
                  {course?.purchased_count} ta
                </span>
              </p>
            </div>
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-regular fa-star"></i>
              <p className="font-bold">
                Baho:{" "}
                <span className="font-normal">
                  {Number(course?.average_score).toFixed(1)}
                </span>
              </p>
            </div>

            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-bolt"></i>
              <p className="font-bold">
                Murakkablik: <span className="font-normal">{"Oson"}</span>
              </p>
            </div>
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-regular fa-comment"></i>
              <p className="font-bold">
                Fikrlar:{" "}
                <span className="font-normal">{course?.commits.length} ta</span>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:col-span-1 col-span-2">
          <img
            className="w-full h-full aspect-[7/6] object-fill rounded-[16px]"
            src={course?.obloshka}
            alt="Kurs obloshka image"
          />
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow flex-shrink-0 basis-0 sm:w-[72%] w-full">
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold sm:mb-6 mb-2">
              Kurs haqida qisqacha
            </h2>
            <p className="sm:text-xl sm:leading-8 text-sm">
              {course?.discription}
            </p>
          </div>
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold mb-6">
              Siz nimani o’rganasiz?
            </h2>
            <div className="flex flex-col gap-6">
              {course?.study_parties.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="border-[1px] border-[#DCDFE3] rounded-[24px] p-4 flex sm:gap-4 gap-2"
                  >
                    <div className="sm:w-[32px] sm:h-[32px] w-[20px] h-[20px]">
                      <img className="w-full h-full" src={check_green} alt="" />
                    </div>
                    <div className="course_advantage">
                      <h2 className="sm:text-lg text-sm font-medium text-main_color mb-1">
                        {item?.name}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px]">
            <h2 className="sm:text-3xl text-xl text-main_color font-semibold mb-6">
              Video darslar
            </h2>
            <div className="flex justify-between items-center sm:mb-4 mb-3">
              <div className="flex items-center sm:gap-4 gap-2">
                <i className="fa-solid fa-book"></i>
                <p className="text-[#1B1D20] font-normal sm:text-base text-sm">
                  {course?.videos.length} ta video dars
                </p>
              </div>
            </div>
            <div className="w-full">
              {modules.map((module, index) => (
                <di className="border-dotted accordion-trigger" key={index}>
                  <div className="flex items-center sm:gap-3 gap-1">
                    <img className="sm:w-[20px] w-[15px]" src={right} alt="" />
                    <p>{module.title}</p>
                  </div>
                  {module.isOpen ? (
                    <button className="text-blue_color font-medium sm:text-xl text-xs">
                      Ko'rish
                    </button>
                  ) : (
                    <button
                      disabled
                      className="text-blue_color font-medium sm:text-xl text-xs"
                    >
                      Yopiq
                    </button>
                  )}
                </di>
              ))}
            </div>
          </div>
        </div>
        <div className="sticky hidden sm:block top-4 w-[28%] h-[13rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]">
          <div className="flex justify-between mb-4">
            <p className="text-2xl font-[400]">Kurs narxi:</p>
            <p className="font-bold text-2xl">
              {formatPrice(course?.price)} so'm
            </p>
          </div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-star text-[#DF742EFF]"></i>
              <p className="font-normal">
                {Number(course?.average_score).toFixed(1)}
              </p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-solid fa-comments"></i>
              <p className="font-normal">{course?.commits.length} ta sharh</p>
            </div>
            <div className="flex items-center gap-3 text-base">
              <i className="fa-regular fa-circle-check text-blue_color"></i>
              <p className="font-normal">
                {course?.purchased_count} ta o'quvchi
              </p>
            </div>
          </div>
          <hr />

          <div
            onClick={() => handleBuyCourse(id)}
            className="flex justify-center items-center pt-5"
          >
            <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              Sotib olish
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden block mt-4 w-full h-[11rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]">
        <div className="flex justify-between mb-4">
          <p className="text-xl font-[400]">Kurs narxi:</p>
          <p className="font-bold text-xl">{formatPrice(course?.price)} so'm</p>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-sm">
            <i className="fa-solid fa-star text-[#DF742EFF]"></i>
            <p className="font-normal">
              {Number(course?.average_score).toFixed(1)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <i className="fa-solid fa-comments"></i>
            <p className="font-normal">{course?.commits.length} ta sharh</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <i className="fa-regular fa-circle-check text-blue_color"></i>
            <p className="font-normal">{course?.purchased_count} ta o'quvchi</p>
          </div>
        </div>
        <hr />

        <div className="flex justify-center items-center pt-4">
          <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-sm font-medium">
            Sotib olish
          </button>
        </div>
      </div>
      <div className="relative mt-14 mb-14">
        <h1 className="title absolute top-0">Izohlar</h1>
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
      <div className="relative mt-14 sm:mb-5 mb-10">
        <h1 className="title absolute top-0">O’xshash darslar</h1>
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
}

export default CourseInfo;
