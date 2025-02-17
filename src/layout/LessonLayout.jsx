import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import "./layout.css";

import { LessonsContext } from "../context/LessonsProvider";
import { GetCourseDetail, GetCourseDetailWithoutToken } from "../services/api";

const LessonLayout = ({ children }) => {
  const { lessons, setLessons, courseId, setIsPurchased, isPurchased } =
    useContext(LessonsContext);
  const { id, lessonId } = useParams();
  const navigate = useNavigate();

  const { data } = useQuery(
    ["GetCourseDetailWithoutToken", id],
    () => GetCourseDetailWithoutToken(id),
    {
      enabled: Boolean(id),
    }
  );

  useQuery(["GetCourseDetail"], () => GetCourseDetail(id), {
    enabled: !!id,
    onSuccess(data) {
      setIsPurchased(data.data.data.is_purchased);
    },
  });
  useEffect(() => {
    if (data?.data?.data?.videos) {
      setLessons(data.data.data.videos);
    }
  }, [data, setLessons]);

  function changeVideo(id, is_free) {
    if (is_free || isPurchased) {
      navigate(`/course/${courseId}/lesson/${id}`);
    }
  }

  return (
    <>
      <div className="bg-layout_color min-h-[100dvh]">
        <div className="menu_wrap fixed w-[25rem] bg-[#fff] text-[#09090BFF] h-[100dvh] overflow-y-scroll py-10">
          <h3 className="px-2 text-center border-b-[#888] border-b-[2px] pb-4 mb-4 text-[24px] font-semibold">
            Mavzular ro'yxati
          </h3>
          <ul>
            {lessons?.map((item, index) => {
              return (
                <li
                  onClick={() => changeVideo(item.id, item.is_free)}
                  className={`px-4 flex transition-colors py-5 items-center border-b-2 gap-2 hover:bg-[#eee] ${
                    item?.is_free || isPurchased
                      ? "opacity-100 cursor-pointer select-auto"
                      : "opacity-40 cursor-not-allowed select-none"
                  } ${
                    item?.id == lessonId ? "bg-[#dfdfdf]" : "bg-transparent"
                  }`}
                  key={item.id}
                >
                  {item?.is_free || isPurchased ? (
                    <i className="fa-regular fa-circle-play inline-block text-base"></i>
                  ) : (
                    <i className="fa-solid fa-lock inline-block text-base"></i>
                  )}

                  <div className="flex items-center gap-1">
                    <p className="text-base font-normal">#{index + 1}.</p>
                    <h1 className="line-clamp-1 text-base font-normal">
                      {item.title}
                    </h1>
                  </div>
                </li>
              );
            })}
            <li>
              <button></button>
            </li>
          </ul>
        </div>
        <div className="sm:px-[1.6rem] px-[1rem] py-6 lesson_layout_wrap">
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
