import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import { useContext } from "react";
import { CoursesContext } from "../context/CoursesProvider";
import { useQuery } from "react-query";
import { GetPurchasedCourses, GetSavedCourses } from "../services/api";

const DesktopLayout = ({ children }) => {
  const { setSavedCourses, setPurchasedCourses } = useContext(CoursesContext);

  useQuery(["GetSavedCourses"], GetSavedCourses, {
    onSuccess(data) {
      setSavedCourses(data.data.data);
    },
  });
  useQuery(["GetPurchasedCourses"], GetPurchasedCourses, {
    onSuccess(data) {
      setPurchasedCourses(data.data.data);
    },
  });
   

  return (
    <>
      <div className="sm:px-[1.6rem] px-[1rem] bg-layout_color min-h-[100dvh] pb-6">
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
            <NavLink
              to={"/"}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-book-open-reader text-xl text-[#64748B]"></i>
              <p className="text-xs text-[#64748B]">Darslaringiz</p>
            </NavLink>
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
    </>
  );
};

export default DesktopLayout;
