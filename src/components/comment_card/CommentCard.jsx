import avatar_comment from "../../assets/images/avatar_comment.svg";
const CommentCard = () => {
  return (
    <div className="bg-[#F1F2F4] rounded-[16px] p-5">
      <div className="flex items-center gap-4 mb-2">
        <img className="w-[44px] h-[44px] rounded-full" src={avatar_comment} alt="" />
        <h2 className="text-main_color text-lg font-semibold">Michael Wong</h2>
      </div>
      <p className="text-[#758195] text-base font-normal">UX/UI kursida siz figmada noldan ishlashni va turli xil murakkablikdagi dizayn sxemalarini yaratishni o'rganasiz. Loyiha oxirida mijozga ishni to’g’ri taqdim etish. To’g’ri portfelni shakllantirish.</p>
    </div>
  )
}

export default CommentCard