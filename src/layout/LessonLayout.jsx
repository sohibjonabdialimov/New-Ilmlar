import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { CoursesContext } from "../context/CoursesProvider";
import { useQuery } from "react-query";
import { GetPurchasedCourses, GetSavedCourses } from "../services/api";
import { ProfileContext } from "../context/ProfileProvider";
import "./layout.css";
import { LessonsContext } from "../context/LessonsProvider";
const LessonLayout = ({ children }) => {
  const { setSavedCourses, setPurchasedCourses } = useContext(CoursesContext);
  const { userData } = useContext(ProfileContext);
  const { lessons } = useContext(LessonsContext);
  useQuery(["GetSavedCourses"], GetSavedCourses, {
    enabled: !!userData?.id,
    onSuccess(data) {
      setSavedCourses(data.data.data);
    },
  });
  useQuery(["GetPurchasedCourses"], GetPurchasedCourses, {
    enabled: !!userData?.id,
    onSuccess(data) {
      setPurchasedCourses(data.data.data);
    },
  });
  console.log(lessons);
  

  return (
    <>
      <div className=" bg-layout_color min-h-[100dvh] ">
        <div className="fixed w-[22rem] bg-[#fff] text-[#09090BFF] h-[100dvh] text-2xl overflow-y-scroll px-5 py-10">
            <h3 className="text-center border-b-[#888] border-b-[2px] pb-4 mb-4">Mavzular ro'yxati</h3>
            <ul>
              {

              }
              <li>
                <button></button>
              </li>
            </ul>
        </div>
        <div className="sm:px-[1.6rem] px-[1rem] pb-6 lesson_layout_wrap">
        <Header />
        <div className="sm:px-6 px-3 bg-bg_color rounded-2xl mx-auto">
          {children}
        </div>

        <nav className="sm:hidden mobile_navbar fixed bottom-1 left-0 right-0 w-full bg-white z-50 rounded-3xl py-2">
          <div className="flex justify-around items-center px-8">
            <NavLink
              to={"/"}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-house text-xl text-[#64748B]"></i>
              <p className="text-xs text-[#64748B]">Bosh sahifa</p>
            </NavLink>
            <NavLink
              to={"/courses"}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-layer-group text-xl text-[#64748B]"></i>
              <p className="text-xs text-[#64748B]">Kurslar</p>
            </NavLink>
            {/* <NavLink
              to={"/"}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-book-open-reader text-xl text-[#64748B]"></i>
              <p className="text-xs text-[#64748B]">Darslaringiz</p>
            </NavLink> */}
            <NavLink
              to={"/student-profile"}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-circle-user text-xl text-[#64748B]"></i>
              <p className="text-xs text-[#64748B]">Siz</p>
            </NavLink>
          </div>
        </nav>
        </div>
      </div>
    </>
  );
};

export default LessonLayout;
