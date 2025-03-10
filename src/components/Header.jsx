import { Drawer, Popover, Select } from "antd";

import teacherLogo from "../assets/images/teacher-logo.svg";
import mycard from "../assets/images/my_card.svg";
import card from "../assets/images/card.svg";
import { useNavigate } from "react-router-dom";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
import { useCallback, useContext, useState } from "react";
import "./styles.css";
import { ProfileContext } from "../context/ProfileProvider";
import { useQuery } from "react-query";
import { GetUsersUsermeWithoutStorage } from "../services/api";
import { CoursesContext } from "../context/CoursesProvider";
import { debounce } from "../utils/debounce";

const { Option } = Select;
const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { userData, setUserData } = useContext(ProfileContext);
  const { setText } = useContext(CoursesContext);
  const [text_1, setText_1] = useState("");

  useQuery(
    ["GetUsersUsermeWithoutStorage"], GetUsersUsermeWithoutStorage,
    {
      enabled: !!localStorage.getItem("token"),
      onSuccess: (response) => {
        setUserData(response.data.data);
      },
    }
  );

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  function exitHandle() {
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    localStorage.clear();
    navigate("/login");
  }

  const content = (
    <div className="">
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
        onClick={() => navigate("/student-profile")}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base"
      >
        <i className="fa-solid fa-circle-user text-xl text-blue_color"></i>
        <p className="text-main_color">Profil</p>
      </div>
      <div
        onClick={() => navigate("/courses")}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 border-b-[1px] border-[#e4e4e4] px-4 py-3 text-base"
      >
        <i className="fa-solid fa-layer-group text-xl text-blue_color"></i>
        <p className="text-main_color">Kurslar</p>
      </div>
      <div
        onClick={exitHandle}
        className="cursor-pointer hover:bg-gray-100 flex items-center gap-3 px-4 py-3 text-base"
      >
        <i className="fa-solid fa-arrow-right-from-bracket text-blue_color"></i>
        <p className="text-main_color">Chiqish</p>
      </div>
    </div>
  );

  const debouncedSearch = useCallback(
    debounce((value) => {
      setText(value);
      navigate("/courses");
    }, 700),
    []
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
                value={text_1}
                placeholder={"Qidirish..."}
                // onChange={(e) => debounce(handleSearchInput(e))}
                onChange={(e) => {
                  debouncedSearch(e.target.value);
                  setText_1(e.target.value);
                }}
                className="bg-[#F1F2F4] w-full outline-none border-none text-[#758195] text-sm placeholder:text-[#1E1E1E99]"
              />
            </div>
          </div>

          <nav className="flex items-center sm:gap-6 gap-2">
            {userData?.is_verified && (
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
            )}
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
            {!userData?.is_verified ? (
              <button
                onClick={() => navigate("/login")}
                className="btn sm:text-base text-xs sm:p-[8px_25px] p-[6px_15px]"
              >
                Kirish
              </button>
            ) : (
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
            )}
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
            <p className="text-[#444] text-lg mt-5">
              Hisob balansingizni to‘ldirish uchun Click ilovasining “To‘lov”
              bo‘limiga o‘ting, u yerdan ilmlar.com xizmatini tanlang. Shundan
              so‘ng, o‘z hisob raqamingizni va pul miqdorini kiriting hamda
              jarayonni tasdiqlang.
            </p>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Header;
