import { NavLink } from "react-router-dom";
import TeacherHeader from "../components/TeacherHeader";
import "./layout.css";
import { ProfileContext } from "../context/ProfileProvider";
import { useContext } from "react";
const TeacherLayout = ({ children }) => {
  const { userData } = useContext(ProfileContext);
  return (
    <>
      <div className="sm:px-[1.6rem] px-[1rem] bg-layout_color min-h-[100dvh] pb-6 ">
        <TeacherHeader />
        <div className="sm:px-6 px-3 bg-bg_color rounded-2xl mx-auto">
          {children}
        </div>
        {userData?.teacherMoreData?.status === 2 && (
          <nav className="sm:hidden mobile_navbar fixed bottom-1 left-0 right-0 w-full bg-white z-50 rounded-3xl py-2">
            <div className="flex justify-around items-center px-8">
              <NavLink
                to={"/my-profile"}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <i className="fa-solid fa-circle-user text-xl text-[#64748B]"></i>
                <p className="text-xs text-[#64748B]">Profil</p>
              </NavLink>
              <NavLink
                to={"/upload-course"}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <i className="fa-solid fa-arrow-up-from-bracket text-xl text-[#64748B]"></i>
                <p className="text-xs text-[#64748B]">Kurs yuklash</p>
              </NavLink>
              <NavLink
                to={"/account-balance"}
                className="flex flex-col items-center gap-1 cursor-pointer"
              >
                <i className="fa-regular fa-credit-card text-xl text-[#64748B]"></i>
                <p className="text-xs text-[#64748B]">Hisob balans</p>
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </>
  );
};

export default TeacherLayout;
