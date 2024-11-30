import TeacherHeader from "../components/TeacherHeader";
import "./layout.css";
const TeacherLayout = ({ children }) => {
  return (
    <>
      <div className="px-[1.6rem] bg-layout_color pb-6 ">
        <TeacherHeader />
        <div className="px-6 bg-bg_color rounded-2xl mx-auto teacher_layout">
          {children}
        </div>
      </div>
    </>
  );
};

export default TeacherLayout;
