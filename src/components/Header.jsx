import { Drawer, Dropdown, Select } from "antd";

import vector1 from "../assets/images/vector1.svg";
import vector2 from "../assets/images/vector2.svg";
import user_card from "../assets/images/user_card.svg";
import card from "../assets/images/card.svg";
import filter from "../assets/images/filter.svg";
import { Link, useNavigate } from "react-router-dom";
import uzb from "public/img/flag_uzb.png";
import eng from "public/img/flag_eng.png";
import rus from "public/img/flag_rus.png";
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
const { Option } = Select;
const Header = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [open, setOpen] = useState(false);
  const bool = true;
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

  return (
    <>
      <div className="py-[0.8rem]">
        <header className="w-full px-6 py-2 flex flex-wrap items-center justify-between rounded-2xl mx-auto gap-4 bg-bg_color">
          <div className="flex items-center gap-6">
            <div className="flex gap-4 items-center">
              <img className="w-[11px] h-[17px]" src={vector1} alt="" />
              <img className="w-[11px] h-[17px]" src={vector2} alt="" />
            </div>
            <div className="nav-search rounded-[100px] border-[2px] border-solid border-[#1E1E1E1A] w-[20rem] p-[0.5rem_1rem] bg-[#F1F2F4] flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
              <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
              <input
                type="text"
                value={searchText}
                placeholder={"Qidirish..."}
                onChange={(e) => handleSearchInput(e)}
                className="header_search bg-[#F1F2F4] w-full outline-none border-none text-[#758195] text-sm placeholder:text-[#1E1E1E99]"
              />
              <div className="header_filter relative w-[24px] h-[24px]">
                <img className="w-full h-full" src={filter} alt="" />
              </div>
            </div>
          </div>
          {bool ? (
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
              <Select
                defaultValue={"uzb"}
                style={{
                  width: 100,
                }}
                onChange={(value) => console.log(`Selected language ${value}`)}
                placeholder="Select a country"
              >
                <Option value="uzb">
                  <div className="flex items-center gap-2">
                    <img src={uzb} alt="USA" style={{ width: 16 }} />
                    UZB
                  </div>
                </Option>
                <Option value="rus">
                  <div className="flex items-center gap-2">
                    <img src={rus} alt="Canada" style={{ width: 16 }} />
                    RUS
                  </div>
                </Option>
                <Option value="eng">
                  <div className="flex items-center gap-2">
                    <img src={eng} alt="UK" style={{ width: 16 }} />
                    ENG
                  </div>
                </Option>
              </Select>
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
          <img src={user_card} alt="" />
        </Drawer>
      </div>
    </>
  );
};

export default Header;
