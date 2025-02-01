import { Drawer, Popover } from "antd";

import card from "../assets/images/card.svg";
import teacherLogo from "../assets/images/teacher-logo.svg";
import mycard from "../assets/images/my_card.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import "./styles.css";
import { ProfileContext } from "../context/ProfileProvider";

const TeacherHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { userData } = useContext(ProfileContext);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
  function exitHandle() {
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    localStorage.clear();
    navigate("/login");
  }

  const content = (
    <>
      <div className="flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3">
        <div className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] flex justify-center items-center bg-blue_color rounded-full">
          <p className="text-white sm:text-xl text-sm sm:font-semibold font-medium">
            {userData?.first_name?.charAt(0)}
          </p>
        </div>
        <div>
          <h2 className="text-base font-medium">
            {userData?.first_name} {userData?.last_name}
          </h2>
          <p className="text-base">{userData?.email}</p>
        </div>
      </div>
      <div
        onClick={() => navigate("/my-profile")}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base"
      >
        <i className="fa-solid fa-circle-user text-xl text-blue_color"></i>
        <p className="text-main_color">Profil</p>
      </div>
      <div
        onClick={() => navigate("/account-balance")}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base"
      >
        <i className="fa-regular fa-credit-card text-xl text-blue_color"></i>
        <p className="text-main_color">Hisob balans</p>
      </div>
      <div
        onClick={() => navigate("/upload-course")}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base"
      >
        <i className="fa-solid fa-layer-group text-xl text-blue_color"></i>
        <p className="text-main_color">Kurs yuklash</p>
      </div>
      <div
        onClick={exitHandle}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 px-4 py-3 text-base"
      >
        <i className="fa-solid fa-arrow-right-from-bracket text-blue_color"></i>
        <p className="text-main_color">Chiqish</p>
      </div>
    </>
  );
  return (
    <>
      <div className="py-[0.8rem]">
        <header className="w-full sm:px-6 px-3 py-2 flex flex-wrap items-center justify-between rounded-2xl mx-auto gap-4 bg-bg_color">
          <div onClick={() => navigate("/my-profile")} className="flex gap-4 items-center cursor-pointer">
            <img className="sm:h-[35px] h-[24px]" src={teacherLogo} alt="" />
          </div>

          <nav className="flex items-center sm:gap-6 gap-2">
            <div
              onClick={showDrawer}
              className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] bg-[#E9F2FF] rounded-full flex items-center justify-center"
            >
              <img
                className="sm:w-[24px] sm:h-[24px] w-[15px] h-[15px]"
                src={card}
                alt=""
              />
            </div>
            <div
              onClick={toggleFullScreen}
              className="cursor-pointer hidden sm:flex w-[44px] h-[44px] bg-[#E9F2FF] rounded-full items-center justify-center"
            >
              <i className="fa-solid fa-expand text-[1.2rem]"></i>
            </div>
            <Popover
              overlayClassName="custom-popover"
              content={content}
              placement="bottomRight"
            >
              <div className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] flex justify-center items-center bg-blue_color rounded-full">
                <p className="text-white sm:text-xl text-sm sm:font-semibold font-medium">
                  {userData?.first_name?.charAt(0)}
                </p>
              </div>
            </Popover>
          </nav>
        </header>
        <Drawer title="Hamyon" onClose={onClose} open={open}>
          <div>
            <div className="relative">
              <img
                className="aspect-[25/16] h-full w-full"
                src={mycard}
                alt="Student's Plastic card"
              />
              <p className="absolute bottom-20 left-5 font-medium text-xl text-white">
                {userData?.amount?.balance ? userData?.amount?.balance : "0"}{" "}
                UZS
              </p>
              <p className="absolute bottom-3 left-3 text-base text-white">
                Hisob raqam:{" "}
                <span className="font-medium">{userData?.payment_id}</span>
              </p>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default TeacherHeader;
