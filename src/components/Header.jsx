import { Drawer, Popover, Select } from "antd";

import teacherLogo from "../assets/images/teacher-logo.svg";
import mycard from "../assets/images/my_card.svg";
import card from "../assets/images/card.svg";
import { useNavigate } from "react-router-dom";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
import { useState } from "react";
import "./styles.css";

const { Option } = Select;
const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const bool = true;
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
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  const content = (
    <div className="">
      <div className="flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3">
        <div className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] flex justify-center items-center bg-blue_color rounded-full">
          <p className="text-white sm:text-xl text-sm sm:font-semibold font-medium">
            S
          </p>
        </div>
        <div>
          <h2 className="text-base font-medium">Sohibjon Abdialimov</h2>
          <p className="text-base">info@gmail.com</p>
        </div>
      </div>
      <div onClick={() => navigate("/student-profile")} className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base">
        <i className="fa-solid fa-circle-user text-xl text-blue_color"></i>
        <p className="text-main_color">Profil</p>
      </div>
      <div onClick={() => navigate("/courses")} className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base">
        <i className="fa-solid fa-layer-group text-xl text-blue_color"></i>
        <p className="text-main_color">Kurslar</p>
      </div>
      <div className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 px-4 py-3 text-base">
        <i className="fa-solid fa-arrow-right-from-bracket text-blue_color"></i>
        <p className="text-main_color">Chiqish</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="py-[0.8rem]">
        <header className="w-full sm:px-6 px-3 py-2 flex flex-wrap items-center justify-between rounded-2xl mx-auto gap-4 bg-bg_color">
          <div className="flex items-center lg:gap-6 gap-3">
            <div onClick={() => navigate("/")} className="cursor-pointer">
              <img className="sm:h-[35px] h-[24px]" src={teacherLogo} alt="" />
            </div>
            <div className="rounded-[100px] border-[2px] border-solid border-[#1E1E1E1A] w-[10rem] lg:w-[20rem] p-[0.5rem_1rem] bg-[#F1F2F4] hidden sm:flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
              <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
              <input
                type="text"
                value={searchText}
                placeholder={"Qidirish..."}
                onChange={(e) => handleSearchInput(e)}
                className="bg-[#F1F2F4] w-full outline-none border-none text-[#758195] text-sm placeholder:text-[#1E1E1E99]"
              />
            </div>
          </div>
          {bool ? (
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
                className="cursor-pointer w-[44px] h-[44px] bg-[#E9F2FF] rounded-full hidden sm:flex items-center justify-center"
              >
                <i className="fa-solid fa-expand text-[1.2rem]"></i>
              </div>
              <Select
                defaultValue={"uzb"}
                className="sm:w-[100px] w-[70px]"
                onChange={(value) => console.log(`Selected language ${value}`)}
                placeholder="Select a country"
              >
                <Option value="uzb">
                  <div className="flex items-center sm:gap-2 gap-[2px] sm:text-base text-xs">
                    <img src={uzb} alt="USA" className="sm:w-[16px] w-[12px]" />
                    UZB
                  </div>
                </Option>
                <Option value="rus">
                  <div className="flex items-center sm:gap-2 gap-[2px] sm:text-base text-xs">
                    <img
                      src={rus}
                      alt="Canada"
                      className="sm:w-[16px] w-[12px]"
                    />
                    RUS
                  </div>
                </Option>
                <Option value="eng">
                  <div className="flex items-center sm:gap-2 gap-[2px] sm:text-base text-xs">
                    <img src={eng} alt="UK" className="sm:w-[16px] w-[12px]" />
                    ENG
                  </div>
                </Option>
              </Select>
              <Popover overlayClassName="custom-popover" content={content} placement="bottomRight">
                <div className="cursor-pointer sm:w-[44px] sm:h-[44px] w-[30px] h-[30px] flex justify-center items-center bg-blue_color rounded-full">
                  <p className="text-white sm:text-xl text-sm sm:font-semibold font-medium">
                    S
                  </p>
                </div>
              </Popover>
            </nav>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn p-[8px_25px]"
            >
              Kirish
            </button>
          )}
        </header>
        <Drawer title="Hamyon" onClose={onClose} open={open}>
          <div className="relative">
            <img
              className="aspect-[25/16] h-full w-full"
              src={mycard}
              alt="Student's Plastic card"
            />
            <p className="absolute bottom-20 left-5 font-medium text-xl text-white">
              120 000 000 UZS
            </p>
            <p className="absolute bottom-3 left-3 text-base text-white">
              3827 4637 3103 7389
            </p>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
