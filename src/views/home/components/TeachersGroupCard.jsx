import teacher from "../../../assets/images/teacher.jpeg";
import "./style.css";
const TeachersGroupCard = ({ item }) => {
  return (
    <div className="relative rounded-2xl sm:aspect-[228/320] aspect-[173/234]">
      <div className="w-full h-full teachers_group_img">
        <img
          className="w-full h-full rounded-2xl object-cover"
          src={teacher}
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
        <button className="btn w-full sm:py-[5px] py-[3px] text-xs">
          Obuna bo’lish
        </button>
      </div>
    </div>
  );
};

export default TeachersGroupCard;
