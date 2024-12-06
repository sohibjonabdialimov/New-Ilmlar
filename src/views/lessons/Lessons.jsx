import { useNavigate } from "react-router-dom";
import "./lesson.css";
const Lesson = () => {
  const navigate = useNavigate();
  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="btn back_btn inline-flex items-center sm:gap-3 gap-1 cursor-pointer sm:p-[4px_20px] p-[2px_10px]"
      >
        <i className="fa-solid fa-arrow-left sm:text-base text-xs"></i>
        <button className="sm:text-lg text-sm">Ortga qaytish</button>
      </div>
      <div className="sm:pb-8 pb-10 sm:pt-12 pt-5">
        <div className="h-[50%] rounded-[16px]">
          <video controls className="w-full aspect-[2/1] rounded-[16px]">
            <source
              src="https://static.vecteezy.com/system/resources/previews/007/433/346/mp4/close-up-waves-on-sunset-travel-destinations-free-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div>
          <h1 className="sm:text-3xl text-lg sm:pt-7 pt-4 font-semibold sm:pb-8 pb-3 text-main_color">
            Memorable UI Design For Interactive Experiences
          </h1>
          <p className="text-[#758195] pb-6 sm:text-xl text-sm">
            Explore Auto Layout in Figma, starting with horizontal, vertical,
            and wrap layouts. Manage padding, gaps, and alignment, and use
            constraints like fixed, hug, and fill for optimal sizing. Design
            navigation bars, top bars, headings, cards, and lists for mobile,
            tablet, and desktop. This course prepares you to create scalable and
            adaptable UI designs across devices.
          </p>
          <div className="sm:mb-6 mb-4">
            <a
              href="#"
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
