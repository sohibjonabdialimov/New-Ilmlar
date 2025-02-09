import { createContext, useState } from "react";

export const LessonsContext = createContext(null);

export default function LessonsProvider({ children }) {
  const [lessons, setLessons] = useState([]);
  const [courseId, setCourseId] = useState(localStorage.getItem("courseId") || null);
  return (
    <LessonsContext.Provider
      value={{
        setLessons, lessons,
        setCourseId, courseId
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
}
