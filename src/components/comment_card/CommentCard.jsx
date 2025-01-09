import avatar_comment from "../../assets/images/avatar_comment.svg";
const CommentCard = ({ item }) => {
  return (
    <div className="bg-[#F1F2F4] rounded-[16px] sm:p-5 p-3">
      <div className="flex items-center sm:gap-4 gap-2 mb-2">
        <img
          className="sm:w-[44px] sm:h-[44px] w-[35px] h-[35px] rounded-full"
          src={avatar_comment}
          alt=""
        />
        <h2 className="text-main_color sm:text-lg text-sm font-semibold">
          Michael Qahhorxo'jayev
        </h2>
      </div>
      <p className="text-[#758195] sm:text-base text-xs font-normal">
        {item?.txt}
      </p>
    </div>
  );
};

export default CommentCard;
