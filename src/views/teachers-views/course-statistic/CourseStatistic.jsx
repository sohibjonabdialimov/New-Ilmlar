import { useContext } from "react";
import { TeacherDataContext } from "../../../context/TeacherDataProvider";

const CourseStatistic = () => {
  const { course } = useContext(TeacherDataContext);
  console.log(course);
  
  return (
    <div className="py-7">
      <h1 className="title mb-5">Kurs statistikasi</h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <h3 className="text-[#758195] sm:text-[22px] text-base font-semibold">
            Kurs nomi:{" "}
            <span className="font-normal">
             {course?.name}
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-5">
          <h3 className="text-[#758195] sm:text-[22px] text-base font-semibold">
            Jami sotilgan:{" "}
            <span className="font-normal">
             {course?.purchased_count} marta
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-5">
          <h3 className="text-[#758195] sm:text-[22px] text-base font-semibold">
            Ayni vaqtda kursni o’qiyotganlar:{" "}
            <span className="font-normal">
            {course?.active_users}
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-5">
          <h3 className="text-[#758195] sm:text-[22px] text-base font-semibold">
            Saqlanganlar soni:{" "}
            <span className="font-normal">
            {course?.saved_count} marta
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-5">
          <h3 className="text-[#758195] sm:text-[22px] text-base font-semibold">
            Kurs daromadi:{" "}
            <span className="font-normal">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ab, necessitatibus?
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CourseStatistic;
