import { Dropdown, message } from "antd";
import "./styles.css";
const ShareDropdown = ({ newUrl, type }) => {
  const shareOptions = [
    {
      key: "copy",
      label: <p className="text-base">Nusxalash</p>,
      icon: <i className="fa-solid fa-link text-base"></i>,
      onClick: () => {
        const url = window.location.href;
        navigator.clipboard.writeText(newUrl ? newUrl : url);
        message.success("Havola nusxalandi!");
      },
    },
    {
      key: "telegram",
      label: <p className="text-base">Telegram</p>,
      icon: <i className="fa-brands fa-telegram text-base text-[#24A1DE]"></i>,
      onClick: () => {
        const url = `https://t.me/share/url?url=${encodeURIComponent(
          newUrl ? newUrl : window.location.href
        )}`;
        window.open(url, "_blank");
      },
    },
    {
      key: "twitter",
      label: <p className="text-base">Twitter</p>,
      icon: <i className="fa-brands fa-square-twitter text-base text-[#1DA1F2]"></i>,
      onClick: () => {
        const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          newUrl ? newUrl : window.location.href
        )}`;
        window.open(url, "_blank");
      },
    },
    {
      key: "facebook",
      label: <p className="text-base">Facebook</p>,
      icon: <i className="fa-brands fa-facebook text-base text-[#1877F2]"></i>,
      onClick: () => {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          newUrl ? newUrl : window.location.href
        )}`;
        window.open(url, "_blank");
      },
    },
  ];
  return (
    <Dropdown placement="topCenter" menu={{ items: shareOptions }}>
      {
        type ? <button className="bg-[#444] hover:bg-[#5d5d5d] transition-colors w-[45px] h-[45px] flex justify-center items-center rounded-full"><i className="fa-solid fa-arrow-up-right-from-square text-base text-white"></i></button> : <button className="btn inline-flex items-center sm:gap-2 gap-1 cursor-pointer sm:p-[8px_15px] p-[5px_15px]">
        <i className="fa-solid fa-share-nodes"></i>
        <span className="sm:text-base text-sm">Ulashish</span>
      </button>
      }
   
    </Dropdown>
  );
};

export default ShareDropdown;
