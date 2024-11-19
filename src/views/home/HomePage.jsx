import NewCourseCard from "./components/NewCourseCard";
import PopularCourseNavbar from "./components/PopularCourseNavbar";
import TeacherGroupSwiper from "./components/TeacherGroupSwiper";
import TeachersGroupCard from "./components/TeachersGroupCard";
import "./home.css";
const HomePage = () => {
  return (
    <div className="py-6">
      <h1 className="title">Yangi qo’shilgan kurslar</h1>
      <div className="grid grid-cols-4 gap-4">
        <NewCourseCard />
        <NewCourseCard />
        <NewCourseCard />
        <NewCourseCard />
      </div>
      <div className="grid grid-cols-6 gap-6">
        <TeachersGroupCard />
        <TeachersGroupCard />
        <TeachersGroupCard />
      </div>
      <TeacherGroupSwiper />
      <PopularCourseNavbar />
    </div>
  );
};

export default HomePage;
