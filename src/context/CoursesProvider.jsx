import { createContext, useState } from "react";

export const CoursesContext = createContext(null);

export default function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([]);
  const [newCourses, setNewCourses] = useState([]);
  const [priceCourses, setPriceCourses] = useState([]);
  const [teacherCourse, setTeacherCourse] = useState([]);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        newCourses,
        priceCourses,
        setPriceCourses,
        setNewCourses,
        setTeacherCourse,
        teacherCourse
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
}
