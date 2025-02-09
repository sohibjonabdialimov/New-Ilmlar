import teacher_profile from "../../assets/images/teacher_avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "../home/components/NewCourseCard";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetSubscription,
  GetTeacherAccount,
  PutSubscription,
} from "../../services/api";
import { useQueries, useQuery } from "react-query";
import axiosT from "../../services/axios";
import "./style.css";
import Skeleton from "react-loading-skeleton";
import { Button, message, notification } from "antd";
import CardSkeleton from "../../components/skeleton/CardSkeleton";
import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileProvider";

const TeacherProfileForStudents = () => {
  const { id } = useParams();
  const { userData } = useContext(ProfileContext);
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const {
    data: subsciptionData,
    isLoading: loading,
    refetch,
  } = useQuery(["GetSubscription", id], () => GetSubscription(id), {
    enabled: !!id && !!userData?.id,
  });
  const { data: teacherAccountData } = useQuery(
    ["GetTeacherAccount"],
    () => GetTeacherAccount(id),
    {
      enabled: !!id,
    }
  );

  const handleSubs = (id) => {
    if (userData?.id) {
      PutSubscription(id)
        .then(() => {
          refetch();
        })
        .catch(() => {
          messageApi.open({
            type: "error",
            content: (
              <h1 className="text-lg">
                Xatolik yuz berdi. Saytni yangilab, boshidan urinib ko'ring
              </h1>
            ),
          });
        });
    } else {
      notification.open({
        message: <h2 className="font-medium">Avval ro'yxatdan o'ting!</h2>,
        description: "Siz ro'yxatdan o'tgandan keyin obuna bo'la olasiz",
        placement: "top",
        duration: 3,
        btn: (
          <Button type="primary" onClick={() => navigate("/register")}>
            Ro'yxatdan o'tish
          </Button>
        ),
      });
    }
  };
  const teacherAccount = teacherAccountData?.data.data;
  console.log(teacherAccount);
  
  const fetchResource = async (id) => {
    const { data } = await axiosT.get(`/api/courses/course/${id}/withouttoken`);
    return data;
  };
  const queries = useQueries(
    (teacherAccount?.courses || []).map(({ id }) => ({
      queryKey: ["resource", id],
      queryFn: () => fetchResource(id),
      enabled: !!id,
    }))
  );

  const isLoading = queries.some((query) => query.isLoading);

  const allData = queries
    ?.map((query) => query?.data?.data)
    .filter((item) => item !== undefined);

  return (
    <div className="py-7">
      {contextHolder}
      <div className="flex justify-between sm:flex-row flex-col gap-5 mb-16">
        <div className="flex items-center sm:gap-5 gap-3">
          <img
            className="sm:w-[142px] sm:h-[146px] w-[84px] h-[102px] sm:rounded-lg rounded-[5px] object-cover"
            src={teacherAccount?.profile_img ? teacherAccount?.profile_img : teacher_profile}
            alt=""
          />
          <div className="flex gap-1.5 justify-between flex-col">
            <h1 className="text-main_color font-semibold sm:text-xl text-base mb-1">
              {teacherAccount?.first_name} {teacherAccount?.last_name}
            </h1>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              {teacherAccount?.spiceal}
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Kurslar soni:{" "}
              <span className="font-normal">
                {teacherAccount?.courses.length} ta
              </span>
            </p>
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Obunachilar soni:{" "}
              <span className="font-normal">
                {teacherAccount?.subscribedStudentsCount} ta
              </span>
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full">
          {loading ? (
            <Skeleton className="p-1 rounded-2xl" width={120} />
          ) : subsciptionData?.data.data.subscribed ? (
            <button
              onClick={(event) => {
                event.stopPropagation();
                handleSubs(id);
              }}
              className="unbtn text-sm sm:p-[10px_30px] p-[8px_20px] w-full"
            >
              Obuna bo'lgansiz
            </button>
          ) : (
            <button
              onClick={(event) => {
                event.stopPropagation();
                handleSubs(id);
              }}
              className="btn text-sm sm:p-[10px_30px] p-[8px_20px] w-full"
            >
              Obuna bo’lish
            </button>
          )}
        </div>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16 mb-6">
        <h2 className="sm:text-3xl text-lg text-main_color font-semibold sm:mb-6 mb-2">
          O'qituvchi haqida ma’lumot
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
         slidesPerView={1.2}
         spaceBetween={10}
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
          {isLoading
            ? [1, 2, 3, 4].map((item) => {
                return (
                  <SwiperSlide key={item}>
                    <CardSkeleton />
                  </SwiperSlide>
                );
              })
            : allData?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <NewCourseCard item={item} />
                  </SwiperSlide>
                );
              })}
        </Swiper>
      </div>
    </div>
  );
};

export default TeacherProfileForStudents;
