import { useNavigate } from "react-router-dom";
import default_teacher from "../../../assets/images/default_teacher.webp";
import "./style.css";
import { GetSubscription, PutSubscription } from "../../../services/api";
import { useQuery } from "react-query";
import { Button, message, notification } from "antd";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
import { ProfileContext } from "../../../context/ProfileProvider";
const TeachersGroupCard = ({ item, type }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { userData } = useContext(ProfileContext);
  const [messageApi, contextHolder] = message.useMessage();
  const { data: subsciptionData, refetch } = useQuery(
    ["GetSubscription", item?.id],
    () => GetSubscription(item?.id),
    {
      enabled: !!item?.id && !!userData.length,
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

  return (
    <div
      ref={ref}
      onClick={() => navigate(`/teacher-profile/${item?.id}`)}
      className={`transition-all duration-700 ease-out transform relative rounded-2xl sm:aspect-[228/320] aspect-[173/234] cursor-pointer ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {contextHolder}
      <div className="w-full h-full teachers_group_img">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={item?.profile_img ? item?.profile_img : default_teacher}
          alt=""
        />
      </div>
      <div className="teachers_group_content w-full sm:px-3 px-1 sm:py-4 py-1">
        <h2 className="sm:text-base text-sm sm:font-semibold font-medium line-clamp-1">
          {item?.first_name} {item?.last_name}
        </h2>
        <h3 className="sm:text-sm text-xs sm:font-normal mb-1 line-clamp-1">
          {item?.spiceal ? item?.spiceal : "O'qituvchi"}
        </h3>

        {subsciptionData?.data.data.subscribed && !type ? (
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleSubs(item.id);
            }}
            className="unbtn w-full sm:py-[5px] py-[3px] text-sm"
          >
            Obuna bo'lgansiz
          </button>
        ) : type ? (
          ""
        ) : (
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleSubs(item.id);
            }}
            className="btn w-full sm:py-[5px] py-[3px] text-sm"
          >
            Obuna bo’lish
          </button>
        )}
      </div>
    </div>
  );
};

export default TeachersGroupCard;
