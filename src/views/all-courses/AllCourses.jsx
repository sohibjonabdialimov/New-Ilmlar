import { Drawer, Pagination } from "antd";
import NewCourseCard from "../home/components/NewCourseCard";
import AllCourseAccordion from "./components/AllCourseAccordion";
import { useState } from "react";
import "./all-courses.css";
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 9,
  },
  {
    id: 10,
  },
];
const AllCourses = () => {
  const [current, setCurrent] = useState(3);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="py-7 ">
      {/* <h1 className="text-3xl font-semibold pb-5">
        Barcha kurslar
      </h1> */}
      <div className="grid items-center grid-cols-6 gap-2 sm:hidden mb-4">
        <div
          onClick={showDrawer}
          className="col-span-2 border cursor-pointer bg-blue_color transition hover:bg-white hover:border-blue_color hover:text-blue_color text-white border-[#DCDFE3] flex items-center justify-center py-[5px] gap-2 rounded-[16px]"
        >
          <i className="fa-solid fa-sort text-base"></i>
          <button className="text-sm">Filterlar</button>
        </div>
        <div className="col-span-4 nav-search rounded-[16px] border-[2px] border-solid border-[#1E1E1E1A] p-[0.5rem_1rem] bg-[#F1F2F4] flex items-center justify-between gap-2 text-[#1E1E1E99] font-[500] focus:drop-shadow-[0_15px_15px_rgba(0,0,0,0.2)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.15)]">
          <i className="fa-solid fa-magnifying-glass w-[1.125rem] h-[1.125rem]"></i>
          <input
            type="text"
            value={searchText}
            placeholder={"Qidirish..."}
            onChange={(e) => handleSearchInput(e)}
            className="header_search bg-[#F1F2F4] w-full outline-none border-none text-[#64748BFF] text-sm placeholder:text-[#1E1E1E99]"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-[20%] sm:block hidden">
          <AllCourseAccordion />
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 place-content-between sm:w-[80%] w-full gap-5">
          {data.map((item) => {
            return <NewCourseCard key={item.id} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center sm:mt-8 mt-5 sm:mb-0 mb-10">
        <Pagination
          className="custom-pagination"
          current={current}
          onChange={onChange}
          total={250}
        />
      </div>

      <Drawer title="Filterlar" onClose={onClose} open={open}>
        <AllCourseAccordion />
      </Drawer>
    </div>
  );
};

export default AllCourses;
