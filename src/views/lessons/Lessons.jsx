import { useNavigate, useParams } from "react-router-dom";
import "./lessons.css";
import { useQuery } from "react-query";
import { GetVideoInfo } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import { Spin, Drawer } from "antd";
import { LessonsContext } from "../../context/LessonsProvider";
import { GetCourseDetailWithoutToken } from "../../services/api";
import VimeoPlayer from "../../components/VimeoPlayer";

const Lesson = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const { id, lessonId } = useParams();
  const [open, setOpen] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const { lessons, setLessons, isPurchased } = useContext(LessonsContext);

  const { data } = useQuery(
    ["GetCourseDetailWithoutToken", id],
    () => GetCourseDetailWithoutToken(id),
    {
      enabled: Boolean(id),
    }
  );

  useEffect(() => {
    if (data?.data?.data?.videos) {
      setLessons(data.data.data.videos);
    }
  }, [data, setLessons]);

  const { data: lessonData, isLoading } = useQuery(
    ["GetVideoInfo", lessonId, id],
    () => GetVideoInfo(lessonId),
    {
      enabled: !!lessonId && !!id,
      onSuccess(data) {
        setUrl(
          data.data.data.video_link.split("/")[
            data.data.data.video_link.split("/").length - 1
          ]
        );
      },
    }
  );

  function changeVideo(id, is_free) {
    if (is_free || isPurchased) {
      navigate(`/course/${id}/lesson/${id}`);
      setOpen(false);
    }
  }
  useEffect(() => {
    const currentIndex = lessons.findIndex((item) => item.id === +lessonId);
    const nextLessonId = isPurchased
      ? !!lessons[currentIndex + 1]?.id
      : !!lessons[currentIndex + 1]?.id && lessons[currentIndex + 1]?.is_free;

    if (currentIndex === -1) {
      return;
    }
    if (!currentIndex) {
      setIsPrev(true);
    } else {
      setIsPrev(false);
    }

    if (!nextLessonId) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
  }, [lessons, lessonId, isPurchased]);

  function nextLesson(lesson_id) {
    const currentIndex = lessons.findIndex((item) => item.id === lesson_id);
    const nextLessonId = lessons[currentIndex + 1]?.id;
    const isNext = isPurchased
      ? !!lessons[currentIndex + 1]?.id
      : !!lessons[currentIndex + 1]?.id && lessons[currentIndex + 1]?.is_free;

    if (!isNext) {
      return;
    }
    navigate(`/course/${id}/lesson/${nextLessonId}`);
  }

  function prevLesson(id) {
    const currentIndex = lessons.findIndex((item) => item.id === id);
    const prevLessonId = lessons[currentIndex - 1]?.id;

    if (isPrev || !prevLessonId) {
      return;
    }
    navigate(`/course/${id}/lesson/${prevLessonId}`);
  }
  function onBack() {
    if (isPurchased) {
      navigate(`/my-course/${id}`);
    } else {
      navigate(`/course/${id}`);
    }
  }

  return (
    <>
      <div className="sm:py-7 py-4">
        <div className="flex justify-between items-center">
          <div
            onClick={onBack}
            className="inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium"
          >
            <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
            <button className="sm:text-lg text-sm">Ortga qaytish</button>
          </div>
          <div
            className="cursor-pointer mobile_lessons_menu"
            onClick={() => setOpen(true)}
          >
            <i className="fa-solid fa-list-ul text-xl"></i>
          </div>
        </div>

        <div className="sm:pt-5 pt-3">
          <div className="h-[50%] rounded-[16px]">
            {isLoading ? (
              <div className="flex justify-center h-[10rem] items-center">
                <Spin size="large" />
              </div>
            ) : url ? (
              <VimeoPlayer videoId={url} />
            ) : (
              <p>Video topilmadi yoki noto'g'ri ID.</p>
            )}
          </div>
          <div>
            <h1 className="sm:text-2xl text-lg sm:pt-7 pt-4 font-semibold sm:pb-3 pb-2 text-main_color">
              {lessonData?.data.data?.title}
            </h1>
            <p className="text-[#758195] pb-6 sm:text-lg text-sm">
              {lessonData?.data.data?.description}
            </p>
            {lessonData?.data.data?.file && (
              <div className="sm:mb-6 mb-4">
                <a
                  target="_blank"
                  href={lessonData?.data.data?.file}
                  className="text-blue_color sm:text-xl text-base font-normal underline"
                >
                  Darsga oid fayl
                </a>
              </div>
            )}

            <hr />
            <div className="sm:mt-6 mt-4 flex justify-between">
              <button
                onClick={() => prevLesson(lessonData?.data.data.id)}
                className={`flex items-center gap-3 ${
                  isPrev
                    ? "cursor-not-allowed opacity-35"
                    : "cursor-pointer opacity-100"
                }`}
              >
                <i className="fa-solid fa-arrow-left-long sm:text-xl text-base"></i>
                <span className="sm:text-xl text-base">Oldingi dars</span>
              </button>
              <button
                onClick={() => nextLesson(lessonData?.data.data.id)}
                className={`flex items-center gap-3 ${
                  isNext
                    ? "cursor-not-allowed opacity-35"
                    : "cursor-pointer opacity-100"
                }`}
              >
                <span className="sm:text-xl text-base">Keyingi dars</span>
                <i className="fa-solid fa-arrow-right-long sm:text-xl text-base"></i>
              </button>
            </div>
          </div>
        </div>

        <Drawer
          className="lesson_drawer"
          title={
            <h3 className="text-[20px] font-semibold">Mavzular ro'yxati</h3>
          }
          onClose={() => setOpen(false)}
          open={open}
        >
          <div className="fixed bg-[#fff] text-[#09090BFF] h-[100dvh] overflow-y-scroll py-5">
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
            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Lesson;
