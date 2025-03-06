import right from "../../../assets/images/right.png";
// import time from "../../../assets/images/time.png";
import { useQuery } from "react-query";
import check_green from "../../../assets/images/check_green.png";
import "./teacher-course-info.css";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import CommentCard from "../../../components/comment_card/CommentCard";
import { GetCourseDetail } from "../../../services/api";
import { useContext, useState } from "react";
import { formatPrice } from "../../../utils/formatPrice";
import { TeacherDataContext } from "../../../context/TeacherDataProvider";
import VimeoPlayer from "../../../components/VimeoPlayer";
function TeacherCourseInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const { setCourse, course } = useContext(TeacherDataContext);
  const [url, setUrl] = useState(null);
  useQuery(["GetCourseDetail"], () => GetCourseDetail(id), {
    onSuccess(data) {
      console.log(data.data.data);
      setCourse(data.data.data);
      setComments(data.data.data.commits);
      setUrl(
        data.data.data.trieler?.split("/")[
          data.data.data.trieler?.split("/").length - 1
        ]
      );
    },
  });
  const handeEditFunction = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="py-7 sm:mb-0 mb-16">
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
            <h1 className="sm:text-6xl text-xl sm:pt-7 pt-2 font-semibold sm:pb-8 pb-3">
              {course?.name}
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:gap-y-6 gap-y-3">
            <div className="flex items-center sm:gap-3 gap-1 sm:text-lg text-sm">
              <i className="fa-solid fa-globe"></i>
              <p className="font-bold">
                Ta'lim tili:{" "}
                <span className="font-normal">
                  {" "}
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
        {course?.trieler ? (
            <VimeoPlayer videoId={url} />
          ) : (
            <img
              className="w-full h-full aspect-[7/6] object-fill rounded-[16px]"
              src={course?.obloshka}
              alt="Kurs obloshka image"
            />
          )}
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex-grow flex-shrink-0 basis-0 sm:w-[65%] w-full">
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
              {course?.videos.map((module, index) => (
                <di className="border-dotted accordion-trigger" key={index}>
                  <div className="flex items-center sm:gap-3 gap-1">
                    <img className="sm:w-[20px] w-[15px]" src={right} alt="" />
                    <p>{module.title}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => navigate(`/main-lesson/${module?.id}`)} className="text-blue_color font-medium sm:text-xl text-xs">
                      Ko'rish
                    </button>
                    <button
                      onClick={handeEditFunction}
                      className="text-gray-700 font-medium sm:text-xl text-xs"
                    >
                      Tahrirlash
                    </button>
                  </div>
                </di>
              ))}
            </div>
          </div>
        </div>
        <div className="hidden sm:block sticky top-4 w-[35%] h-[13rem] shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]">
          <div className="flex justify-between mb-4">
            <p className="text-2xl font-[400]">Kurs narxi:</p>
            <p className="font-bold text-2xl">
              {" "}
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

          <div className="flex justify-center items-center pt-5 gap-2">
            <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              Tahrirlash
            </button>
            <button
              onClick={() => navigate(`/course-statistic/${id}`)}
              className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium"
            >
              Statistika
            </button>
            <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-base font-medium">
              O'chirish
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden block mt-4 w-full h-[11rem]  shadow-[inset_0px_0px_5px_3px_#1D7AFCFF] p-5 rounded-[16px]">
        <div className="flex justify-between mb-4">
          <p className="text-xl font-[400]">Kurs narxi:</p>
          <p className="font-bold text-xl">{formatPrice(course?.price)} so'm</p>
        </div>
        <div className="flex items-center justify-between mb-4">
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

        <div className="flex justify-center items-center pt-4 gap-2">
          <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-sm font-medium">
            Tahrirlash
          </button>
          <button
            onClick={() => navigate(`/course-statistic/${id}`)}
            className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-sm font-medium"
          >
            Statistika
          </button>
          <button className="w-full py-[10px] rounded-[100px] text-white bg-blue_color text-sm font-medium">
            O'chirish
          </button>
        </div>
      </div>

      <div className="relative mt-14 mb-5">
        <h1 className="title absolute top-0">Izohlar</h1>
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
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
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="comments_swiper"
        >
          {comments?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CommentCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default TeacherCourseInfo;
