import { useNavigate, useParams } from "react-router-dom";
import "./lessons.css";
import { useQuery } from "react-query";
import { GetVideoInfo } from "../../services/api";
import { useEffect, useState, useContext } from "react";
import Vimeo from "@vimeo/player";
import { Spin, Drawer } from "antd";
import { LessonsContext } from "../../context/LessonsProvider";
import { GetCourseDetailWithoutToken } from "../../services/api";

const Lesson = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const { id, lessonId } = useParams();
  const [open, setOpen] = useState(false);
  const { lessons, setLessons, courseId } = useContext(LessonsContext);

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

  useEffect(() => {
    const iframe = document.querySelector("iframe");

    if (iframe) {
      const player = new Vimeo(iframe);

      player.on("play", () => {
        console.log("Played the video");
      });

      player.getVideoTitle().then((title) => {
        console.log("title:", title);
      });
    } else {
      // console.error("Iframe element topilmadi!");
    }
  }, [url]);

  function changeVideo(id, is_free) {
    if (is_free) {
      navigate(`/courses/${courseId}/lesson/${id}`);
      setOpen(false);
    }
  }

  return (
    <div className="py-7">
      <div className="flex justify-between items-center">
        <div
          onClick={() => navigate(-1)}
          className="inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium"
        >
          <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
          <button className="sm:text-lg text-sm">Ortga qaytish</button>
        </div>
        <div className="cursor-pointer mobile_lessons_menu" onClick={() => setOpen(true)}>
          <i className="fa-solid fa-list-ul text-2xl"></i>
        </div>
      </div>

      <div className="sm:pb-8 pb-10 sm:pt-12 pt-5">
        <div className="h-[50%] rounded-[16px]">
          {/* <video controls className="w-full aspect-[2/1] rounded-[16px]">
            <source
              src="https://static.vecteezy.com/system/resources/previews/007/433/346/mp4/close-up-waves-on-sunset-travel-destinations-free-video.mp4"
              type="video/mp4"
            ></source>
          </video> */}
          {isLoading ? (
            <div className="flex justify-center h-[10rem] items-center">
              <Spin size="large" />
            </div>
          ) : url ? (
            <iframe
              src={`https://player.vimeo.com/video/${url}?h=2ac395a2694246448051ee01faf135ce&title=0&byline=0&portrait=0`}
              className="w-full aspect-[7/4] rounded-[16px]"
              frameBorder={0}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p>Video topilmadi yoki noto'g'ri ID.</p>
          )}
        </div>
        <div>
          <h1 className="sm:text-3xl text-lg sm:pt-7 pt-4 font-semibold sm:pb-8 pb-3 text-main_color">
            {lessonData?.data.data?.title}
          </h1>
          <p className="text-[#758195] pb-6 sm:text-xl text-sm">
            {lessonData?.data.data?.description}
          </p>
          <div className="sm:mb-6 mb-4">
            <a
              href={lessonData?.data.data?.file}
              className="text-blue_color sm:text-xl text-base font-normal underline"
            >
              Darsga oid fayl
            </a>
          </div>
          <hr />
          <div className="sm:mt-6 mt-4 flex justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-arrow-left-long sm:text-xl text-base"></i>
              <button className="sm:text-xl text-base">Oldingi dars</button>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-arrow-right-long sm:text-xl text-base"></i>
              <button className="sm:text-xl text-base">Keyingi dars</button>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        className="lesson_drawer"
        title={<h3 className="text-[20px] font-semibold">Mavzular ro'yxati</h3>}
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
                    item?.is_free
                      ? "opacity-100 cursor-pointer select-auto"
                      : "opacity-40 cursor-not-allowed select-none"
                  } ${
                    item?.id == lessonId ? "bg-[#dfdfdf]" : "bg-transparent"
                  }`}
                  key={item.id}
                >
                  {item?.is_free ? (
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
      </Drawer>
    </div>
  );
};

export default Lesson;
