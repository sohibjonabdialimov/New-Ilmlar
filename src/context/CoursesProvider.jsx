import { createContext, useState } from "react";

export const CoursesContext = createContext(null);

export default function CoursesProvider({ children }) {
  const [courses, setCourses] = useState([]);

  return (
    <CoursesContext.Provider value={{ courses, setCourses }}>
      {children}
    </CoursesContext.Provider>
  );
}
