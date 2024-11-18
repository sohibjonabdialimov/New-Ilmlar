import { useNavigate } from "react-router-dom";
import studentSrc from "public/icons/student-icon.png";
import teachersSrc from "public/icons/teachers-icon.png";
import residenceSrc from "public/icons/residence-icon.png";
import locationSrc from "public/icons/location-icon.png";

const DashboardStatsCard = ({ dashboardStatistic }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => navigate("/students")}
        className={`dashboard__statistics-card cursor-pointer w-[25%] rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
        style={{ backgroundColor: "#ECECFF" }}
      >
        <div className="flex items-center gap-4">
          <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
            <img src={studentSrc} alt="Statistic icon" />
          </div>
          <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
            Talabalar
          </p>
        </div>
        <div
          className={`numbers mt-8 text-[3rem] font-[600]`}
          style={{ color: "#6461E1" }}
          dangerouslySetInnerHTML={{ __html: dashboardStatistic?.students }}
        ></div>
      </div>
      <div
        onClick={() => navigate("/teachers")}
        className={`dashboard__statistics-card cursor-pointer w-[25%] rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
        style={{ backgroundColor: "#F8E9FB" }}
      >
        <div className="flex items-center gap-4">
          <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
            <img src={teachersSrc} alt="Statistic icon" />
          </div>
          <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
            Professor o&apos;qituvchilar
          </p>
        </div>
        <div
          className={`numbers mt-8 text-[3rem] font-[600]`}
          style={{ color: "#E462CD" }}
          dangerouslySetInnerHTML={{ __html: dashboardStatistic?.teachers }}
        ></div>
      </div>
      <div
        onClick={() => navigate("/students-residence")}
        className={`dashboard__statistics-card cursor-pointer w-[25%] rounded-[1.25rem] p-[2rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] transition-transform hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
        style={{ backgroundColor: "#FBF8E9" }}
      >
        <div className="flex items-center gap-4">
          <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
            <img src={residenceSrc} alt="Statistic icon" />
          </div>
          <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
            Talabalar yashash joyi
          </p>
        </div>
        <div
          className={`numbers mt-8 text-[3rem] font-[600]`}
          style={{ color: "#D4BC20" }}
          dangerouslySetInnerHTML={{ __html: dashboardStatistic?.ttj_students }}
        ></div>
      </div>
      <div
        className={`dashboard__statistics-card w-[25%] rounded-[1.25rem] shadow-[2px_4px_8px_0px_#1E1E1E14] hover:translate-y-[-0.5rem] cursor-pointer transition-transform duration-800 hover:ease-out hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] duration-100`}
        style={{ backgroundColor: "#66C62B1F" }}
      >
        <a
          target="_blank"
          href={"http://360.tuit.uz/"}
          className="inline-block w-full h-full p-[2rem]"
        >
          <div className="flex items-center gap-4">
            <div className="icon rounded-full h-[4.5rem] w-[4.5rem] bg-white flex items-center justify-center gap-4">
              <img src={locationSrc} alt="Statistic icon" />
            </div>
            <p className="inter font-[500] text-[1.5rem] leading-[2rem]">
              Umumiy maydoni
            </p>
          </div>
          <div
            className={`numbers mt-8 text-[3rem] font-[600]`}
            style={{ color: "#66C62B" }}
            dangerouslySetInnerHTML={{
              __html: `${dashboardStatistic?.arena} km<sup>2</sup>`,
            }}
          ></div>
        </a>
      </div>
    </>
  );
};

export default DashboardStatsCard;
