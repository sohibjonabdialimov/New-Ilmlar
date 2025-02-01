import { Drawer } from "antd";
import NewCourseCard from "../home/components/NewCourseCard";
import AllCourseAccordion from "./components/AllCourseAccordion";
import { useContext, useState } from "react";
import "./all-courses.css";
import { useQuery } from "react-query";
import { GetCourses } from "../../services/api";
import { CoursesContext } from "../../context/CoursesProvider";
import CardSkeleton from "../../components/skeleton/CardSkeleton";
import { debounce } from "../../utils/debounce";

const AllCourses = () => {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const { courses, setCourses, text, categoryF, prise, language, teacher } = useContext(CoursesContext);
  const handleSearchInput = (e) => {
    setSearchText(e.target.value);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const { isLoading } = useQuery(
    ["GetCourses", prise, text, categoryF, language, teacher],
    () => GetCourses(text, language?.join(","), prise, null, categoryF?.join(","), teacher?.join(",")),
    {
      onSuccess(data) {
        setCourses(
          data.data.data.filter((item) => item.status === 2 && item.is_verified)
        );
      },
    }
  );

  return (
    <div className="pt-7 sm:pb-7 pb-2 sm:mb-0 mb-16">
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
            onChange={(e) => debounce(handleSearchInput(e))}
            className="header_search bg-[#F1F2F4] w-full outline-none border-none text-[#64748BFF] text-sm placeholder:text-[#1E1E1E99]"
          />
        </div>
      </div>
      <div className="flex gap-10">
        <div className="w-[20%] sm:block hidden">
          <AllCourseAccordion />
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 place-content-between sm:w-[80%] w-full gap-x-5 gap-y-8">
          {isLoading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                return <CardSkeleton key={item} />;
              })
            : courses.map((item) => {
                return <NewCourseCard item={item} key={item.id} />;
              })}
        </div>
      </div>
      {/* <div className="flex justify-center items-center sm:mt-8 mt-5 sm:mb-0 mb-10">
        <Pagination
          className="custom-pagination"
          current={current}
          onChange={onChange}
          total={courses?.length}
        />
      </div> */}

      <Drawer title="Filterlar" onClose={onClose} open={open}>
        <AllCourseAccordion />
      </Drawer>
    </div>
  );
};

export default AllCourses;
