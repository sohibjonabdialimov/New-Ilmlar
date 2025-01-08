import avatar from "../../../assets/images/avatar.png";
import star from "../../../assets/images/star.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { formatPrice } from "../../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { GetSaveCourse } from "../../../services/api";
import { useState } from "react";
import { message } from "antd";
const NewCourseCard = ({ type, role, item }) => {
  const navigate = useNavigate();
  const [isSave, setIsSave] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleSaveCourse = (id) => {
    GetSaveCourse(id)
      .then((res) => {
        console.log(res);
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
              Kursni saqlash uchun avval ro'yxatdan o'ting!
            </h1>
          ),
        });
      });
  };

  return (
    <div
      onClick={() => navigate(`/courses/${item?.id}`)}
      className="cursor-pointer"
    >
      {contextHolder}
      <img
        className="w-full object-cover rounded-2xl h-[220px]"
        src={item?.obloshka}
        alt="ilmlar image of course"
      />
      <div className="flex items-center justify-between mt-3 mb-2">
        <div className="flex items-center gap-1">
          <img
            className="w-[13px] h-[12.4px] object-cover"
            src={star}
            alt="Ilmlar yulduz"
          />
          <p className="font-normal text-[11px] leading-5 text-secondary_color">
            {Number(item?.average_score).toFixed(1)} (30 sharhlar)
          </p>
        </div>
        <p className="font-normal text-[11px] leading-5 text-secondary_color">
          120 o’quvchi
        </p>
      </div>
      <h1 className="text-lg font-semibold text-main_color mb-2 line-clamp-2">
        {item?.name}
      </h1>
      <div className="flex items-center gap-1 mb-2">
        <img
          className="w-6 h-6 object-cover rounded-full"
          src={avatar}
          alt="Avatar ilmlar"
        />
        <p className="text-secondary_color text-sm font-normal">
          O’qituvchi full name
        </p>
      </div>
      {type ? (
        <ProgressBar height="18px" className="bar_container" completed={70} />
      ) : role === "teacher" ? (
        <div className="flex items-center justify-between">
          <p className="text-blue_color text-base font-semibold">
            {formatPrice(item?.price)} so'm
          </p>
          <p className="text-[#00FF84] text-base font-semibold">Ommaviy</p>
        </div>
      ) : (
        <div className="flex items-center justify-between mr-4">
          <p className="text-blue_color text-base font-semibold">
            {formatPrice(item?.price)} so'm
          </p>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleSaveCourse(item?.id);
            }}
            className="flex items-center gap-2"
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
