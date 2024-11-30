import { Pagination } from "antd";
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
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  return (
    <div className="py-7 ">
      {/* <h1 className="text-3xl font-semibold pb-5">
        Barcha kurslar
      </h1> */}
      <div className="flex gap-10">
        <div className="w-[20%]">
          <AllCourseAccordion />
        </div>
        <div className="grid grid-cols-3 place-content-between w-[80%] gap-5">
          {data.map((item) => {
            return <NewCourseCard key={item.id} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <Pagination className="custom-pagination" current={current} onChange={onChange} total={250} />
      </div>
    </div>
  );
};

export default AllCourses;
