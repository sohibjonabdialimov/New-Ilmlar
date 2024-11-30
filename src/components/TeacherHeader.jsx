import { Drawer, Dropdown } from "antd";

import user_card from "../assets/images/user_card.svg";
import card from "../assets/images/card.svg";
import teacherLogo from "../assets/images/teacher-logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.css";
const items = [
  {
    key: "1",
    label: (
      <Link
        to="/login"
        className="flex items-center justify-center gap-3 inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem]"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Chiqish
      </Link>
    ),
  },
];
const TeacherHeader = () => {
  const [open, setOpen] = useState(false);
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

  return (
    <>
      <div className="py-[0.8rem] h-[90px]">
        <header className="w-full px-6 py-2 flex flex-wrap items-center justify-between rounded-2xl mx-auto gap-4 bg-bg_color">
          <div className="flex gap-4 items-center">
            <img className="h-[35px]" src={teacherLogo} alt="" />
          </div>

          <nav className="flex items-center gap-6">
            <div
              onClick={showDrawer}
              className="cursor-pointer w-[44px] h-[44px] bg-[#E9F2FF] rounded-full flex items-center justify-center"
            >
              <img className="w-[24px] h-[24px]" src={card} alt="" />
            </div>
            <div
              onClick={toggleFullScreen}
              className="cursor-pointer w-[44px] h-[44px] bg-[#E9F2FF] rounded-full flex items-center justify-center"
            >
              <i className="fa-solid fa-expand text-[1.2rem]"></i>
            </div>
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <div className="cursor-pointer w-[44px] h-[44px] flex justify-center items-center bg-blue_color rounded-full">
                <p className="text-white text-xl font-semibold">S</p>
              </div>
            </Dropdown>
          </nav>
        </header>
        <Drawer title="Hamyon" onClose={onClose} open={open}>
          <img src={user_card} alt="" />
        </Drawer>
      </div>
    </>
  );
};

export default TeacherHeader;
