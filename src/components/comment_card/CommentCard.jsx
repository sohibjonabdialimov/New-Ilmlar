import avatar_comment from "../../assets/images/avatar_comment.svg";
const CommentCard = ({ item }) => {
  
  return (
    <div className="bg-[#F1F2F4] rounded-[16px] sm:p-3 p-3">
      <div className="flex items-center sm:gap-2 gap-1 mb-2">
        <img
          className="sm:w-[40px] sm:h-[40px] w-[35px] h-[35px] rounded-full"
          src={item?.profile_img ? item?.profile_img : avatar_comment}
          alt=""
        />
        <h2 className="text-main_color sm:text-base text-sm font-semibold line-clamp-1">
          {
            item?.first_name + " " + item?.last_name
          }
        </h2>
      </div>
      <p className="text-[#758195] sm:text-base text-xs font-normal">
        {item?.txt}
      </p>
    </div>
  );
};

export default CommentCard;
