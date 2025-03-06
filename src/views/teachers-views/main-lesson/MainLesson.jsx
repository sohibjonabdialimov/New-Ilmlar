import { useNavigate, useParams } from "react-router-dom";
import "./main-lesson.css";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { GetVideoInfo } from "../../../services/api";
import Vimeo from "@vimeo/player";
import { Spin } from "antd";
import VimeoPlayer from "../../../components/VimeoPlayer";

const MainLesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [url, setUrl] = useState(null);

  const { data: lessonData, isLoading } = useQuery(
    ["GetVideoInfo", id],
    () => GetVideoInfo(id),
    {
      enabled: !!id,
      onSuccess(data) {
        console.log(data);

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
      console.error("Iframe element topilmadi!");
    }
  }, [url]);

  return (
    <div className="pt-7 sm:pb-7 pb-8 sm:mb-0 mb-16">
      <div className="flex items-center justify-between">
        <div
          onClick={() => navigate(-1)}
          className="btn inline-flex items-center sm:gap-3 gap-1 cursor-pointer sm:p-[4px_20px] p-[5px_10px]"
        >
          <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
          <button className="sm:text-lg text-sm">Ortga qaytish</button>
        </div>
        <div
          className="btn inline-flex items-center sm:gap-3 gap-1 cursor-pointer sm:p-[4px_20px] p-[5px_10px]"
        >
          <i className="fa-regular fa-pen-to-square sm:text-base text-xs"></i>
          <button className="sm:text-lg text-sm">Tahrirlash</button>
        </div>
      </div>
      <div className="sm:pb-8 pb-10 sm:pt-12 pt-5">
        <div className="h-[50%] rounded-[16px]">
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
    </div>
  );
};

export default MainLesson;
