import avatar from "../../../assets/images/profile.webp";
import star from "../../../assets/images/star.svg";
// import ProgressBar from "@ramonak/react-progress-bar";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { GetSaveCourse, GetTeacherAccount, GetPercentage } from "../../../services/api";
import { useContext, useEffect, useState } from "react";
import { Button, message, notification } from "antd";
import { useQuery } from "react-query";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useInView } from "react-intersection-observer";
import { CoursesContext } from "../../../context/CoursesProvider";
import { ProfileContext } from "../../../context/ProfileProvider";
const NewCourseCard = ({ type, role, item, buy, save }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const [isSave, setIsSave] = useState(save || false);
  const [isBuy, setIsBuy] = useState(buy || false);
  const { savedCourses, purchasedCourses } = useContext(CoursesContext);
  const { userData } = useContext(ProfileContext);
  useEffect(() => {
    if (savedCourses.some((element) => element.id === item?.id)) {
      setIsSave(true);
    }
  }, [item?.id, savedCourses]);

  useEffect(() => {
    if (purchasedCourses.some((element) => element.id === item?.id)) {
      setIsBuy(true);
    }
  }, [item?.id, purchasedCourses]);

  const handleSaveCourse = (id) => {
    if (userData?.id) {
      GetSaveCourse(id)
        .then((res) => {
          if (res.data.data.action === "saved") {
            setIsSave(true);
          }
          if (res.data.data.action === "not-saved") {
            setIsSave(false);
          }
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
        message: "Avval ro'yxatdan o'ting!",
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
  const { data: teacherAccountId } = useQuery(
    ["GetTeacherAccount", item?.teacher_id],
    () => GetTeacherAccount(item?.teacher_id),
    {
      enabled: !!item?.teacher_id,
    }
  );
  const { data: percentage } = useQuery(
    ["GetPercentage"], GetPercentage
  );
  
  return (
    <div
      ref={ref}
      onClick={() =>
        isBuy
          ? navigate(`/my-course/${item?.id}`)
          : role === "teacher"
          ? navigate(`/teacher-course-info/${item?.id}`)
          : navigate(`/courses/${item?.id}`)
      }
      className={`pb-8 transition-all duration-700 ease-out transform cursor-pointer lazy_img ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <LazyLoadImage
        className="w-full object-cover rounded-2xl h-[220px]"
        effect="blur"
        src={item?.obloshka}
        alt=""
      />
      {contextHolder}
      <div className="flex items-center justify-between mt-3 mb-2">
        <div className="flex items-center gap-1">
          <img
            className="w-[13px] h-[12.4px] object-cover"
            src={star}
            alt="Ilmlar yulduz"
          />
          <p className="font-normal text-[11px] leading-5 text-secondary_color">
            {Number(item?.average_score).toFixed(1)} ({item?.comments_count}{" "}
            sharhlar)
          </p>
        </div>
        <p className="font-normal text-[11px] leading-5 text-secondary_color">
          {item?.purchased_count} o'quvchi
        </p>
      </div>
      <h1 className="text-lg font-semibold text-main_color mb-2 line-clamp-2">
        {item?.name}
      </h1>
      {role !== "teacher" ? (
        <div className="flex items-center gap-1 mb-2">
          {teacherAccountId?.data.data.profile_img ? (
            <img
              className="w-6 h-6 object-cover rounded-full"
              src={teacherAccountId?.data.data.profile_img}
              alt="Avatar ilmlar"
            />
          ) : (
            <img
              className="w-6 h-6 object-cover rounded-full"
              src={avatar}
              alt="Avatar ilmlar"
            />
          )}

          <p className="text-secondary_color text-sm font-normal line-clamp-1">
            {teacherAccountId?.data.data.first_name}{" "}
            {teacherAccountId?.data.data.last_name}
          </p>
        </div>
      ) : (
        <div>
          <p className="text-base font-medium">
            Active foydalanuvchilar:{" "}
            <span className="font-normal">{item?.active_users} ta</span>
          </p>
          <p className="text-base font-medium">
            Sotib olganlar:{" "}
            <span className="font-normal">{item?.purchased_count} ta</span>
          </p>
        </div>
      )}
      {type ? (
        // <ProgressBar height="18px" className="bar_container" completed={70} />
        <div></div>
      ) : role === "teacher" ? (
        <div className="flex items-center justify-between">
          <p className="text-blue_color text-base font-semibold">
            {formatPrice(+(item?.price))} so'm
          </p>
          <p className="text-[#00FF84] text-base font-semibold">Ommaviy</p>
        </div>
      ) : (
        <div className="absolute bottom-0 flex justify-between w-full">
          {isBuy ? (
            <p className="text-blue_color text-lg font-semibold">
              Sotib olingan
            </p>
          ) : (
            <p className="text-blue_color text-lg font-semibold">
              {formatPrice(+(item?.price) * (1 + percentage?.data.data.percent / 100))} so'm
            </p>
          )}
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleSaveCourse(item?.id);
            }}
            className="flex items-center gap-2 mr-3"
          >
            {isSave ? (
              <i className="fa-solid fa-bookmark text-2xl"></i>
            ) : (
              <i className="fa-regular fa-bookmark text-2xl"></i>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCourseCard;
