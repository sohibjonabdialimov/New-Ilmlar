import { useNavigate } from "react-router-dom";
import default_teacher from "../../../assets/images/default_teacher.webp";
import "./style.css";
const TeachersGroupCard = ({ item }) => {
  const navigate = useNavigate();
  function handleSubs(event, id) {
    event.stopPropagation();
    console.log(id);
  }
  return (
    <div
      onClick={() => navigate(`teacher-profile/${item?.id}`)}
      className="relative rounded-2xl sm:aspect-[228/320] aspect-[173/234]"
    >
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
        <button
          onClick={() => handleSubs(event, item?.id)}
          className="btn w-full sm:py-[5px] py-[3px] text-xs"
        >
          Obuna bo’lish
        </button>
      </div>
    </div>
  );
};

export default TeachersGroupCard;
