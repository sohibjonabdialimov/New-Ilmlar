import { useNavigate, useParams } from "react-router-dom";
import "./lesson.css";
import { useQuery } from "react-query";
import { GetVideoInfo } from "../../services/api";
import { useEffect, useState } from "react";
import Vimeo from "@vimeo/player";
const Lesson = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [url, setUrl] = useState(null);
  const { data: lessonData } = useQuery(["GetVideoInfo", id], () =>
    GetVideoInfo(id), {
      onSuccess(data){
        console.log(data);
        
        setUrl(data.data.data.video_link.split("/")[data.data.data.video_link.split("/").length - 1])
      }
    }
  );
  
  let lesson = lessonData?.data.data;
   useEffect(() => {
    const iframe = document.querySelector("iframe");
    const player = new Vimeo(iframe);
    // const player = new Player(iframe);

    // Play event listener
    player.on("play", () => {
      console.log("Played the video");
    });

    player.getVideoTitle().then((title) => {
      console.log("title:", title);
    });
  }, []);

  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="inline-flex items-center sm:gap-3 gap-1 cursor-pointer font-medium"
      >
        <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
        <button className="sm:text-lg text-sm">Ortga qaytish</button>
      </div>
      
      <div className="sm:pb-8 pb-10 sm:pt-12 pt-5">
        <div className="h-[50%] rounded-[16px]">
          {/* <video controls className="w-full aspect-[2/1] rounded-[16px]">
            <source
              src="https://static.vecteezy.com/system/resources/previews/007/433/346/mp4/close-up-waves-on-sunset-travel-destinations-free-video.mp4"
              type="video/mp4"
            ></source>
          </video> */}
          <iframe
          // src={lesson?.video_link}
          src={`https://player.vimeo.com/video/${url}?h=2ac395a2694246448051ee01faf135ce`}
          // width="500px"
          className="w-full aspect-[2/1] rounded-[16px]"
          // height="400px"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
        </div>
        <div>
          <h1 className="sm:text-3xl text-lg sm:pt-7 pt-4 font-semibold sm:pb-8 pb-3 text-main_color">
            {lesson?.title}
          </h1>
          <p className="text-[#758195] pb-6 sm:text-xl text-sm">
            {lesson?.description}
          </p>
          <div className="sm:mb-6 mb-4">
            <a
              href={lesson?.file}
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

export default Lesson;
