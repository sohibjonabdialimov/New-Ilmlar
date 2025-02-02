import { createContext, useState } from "react";

export const CoursesContext = createContext(null);

export default function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [priceCourses, setPriceCourses] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [teacherCourse, setTeacherCourse] = useState([]);
  const [text, setText] = useState("");
  const [level, setLevel] = useState(null);
  const [language, setLanguage] = useState(null);
  const [teacher, setTeacher] = useState(null);
  const [categoryF, setCategoryF] = useState(null);
  const [prise, setPrise] = useState(null);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        newCourses,
        setPopularCourses,
        popularCourses,
        priceCourses,
        setPriceCourses,
        setNewCourses,
        setTeacherCourse,
        teacherCourse,
        setText,
        text,
        level, setLevel,
        language, setLanguage,
        teacher, setTeacher,
        categoryF, setCategoryF,
        prise, setPrise
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}
