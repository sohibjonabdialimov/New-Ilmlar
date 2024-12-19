import { Drawer, Dropdown } from "antd";

import user_card from "../assets/images/user_card.svg";
import card from "../assets/images/card.svg";
import teacherLogo from "../assets/images/teacher-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./styles.css";

const TeacherHeader = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
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
    navigate("/login");
  }

  const items = [
    {
      key: "1",
      label: (
        <Link
          to="/login"
          className="flex items-center justify-center gap-3 inter text-[0.857rem] text-[#1E1E1EB2] font-[500] leading-[1.1rem]"
        >
          <i
            onClick={exitHandle}
            className="fa-solid fa-arrow-right-from-bracket"
          ></i>
          Chiqish
        </Link>
      ),
    },
  ];
  return (
    <>
      <div className="py-[0.8rem]">
        <header className="w-full sm:px-6 px-3 py-2 flex flex-wrap items-center justify-between rounded-2xl mx-auto gap-4 bg-bg_color">
          <div className="flex gap-4 items-center">
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
            <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
            >
              <div className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] flex justify-center items-center bg-blue_color rounded-full">
                <p className="text-white sm:text-xl text-sm sm:font-semibold font-medium">
                  S
                </p>
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
