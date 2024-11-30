import { useNavigate } from "react-router-dom";
import "./lesson.css";
const Lesson = () => {
  const navigate = useNavigate();
  return (
    <div className="py-7">
      <div
        onClick={() => navigate(-1)}
        className="btn inline-flex items-center gap-3 cursor-pointer p-[4px_20px]"
      >
        <i className="fa-solid fa-arrow-left"></i>
        <button className="text-lg">Ortga qaytish</button>
      </div>
      <div className="pb-8 pt-12">
        <div className="h-[50%] rounded-[16px]">
          <video controls className="w-full aspect-[2/1] rounded-[16px]">
            <source
              src="https://static.vecteezy.com/system/resources/previews/007/433/346/mp4/close-up-waves-on-sunset-travel-destinations-free-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
        <div>
          <h1 className="text-3xl pt-7 font-semibold pb-8 text-main_color">
            Memorable UI Design For Interactive Experiences
          </h1>
          <p className="text-[#758195] pb-6">
            Explore Auto Layout in Figma, starting with horizontal, vertical,
            and wrap layouts. Manage padding, gaps, and alignment, and use
            constraints like fixed, hug, and fill for optimal sizing. Design
            navigation bars, top bars, headings, cards, and lists for mobile,
            tablet, and desktop. This course prepares you to create scalable and
            adaptable UI designs across devices.
          </p>
          <div className="mb-6">
            <a
              href="#"
              className="text-blue_color text-xl font-normal underline"
            >
              Darsga oid fayl
            </a>
          </div>
          <hr />
          <div className="mt-6 flex justify-between">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-arrow-left-long text-xl"></i>
              <button className="text-xl">Oldingi dars</button>
            </div>
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-arrow-right-long text-xl"></i>
              <button className="text-xl">Keyingi dars</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
