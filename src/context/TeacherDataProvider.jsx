import { createContext, useState } from "react";

export const TeacherDataContext = createContext(null);

export default function TeacherDataProvider({ children }) {
  const [course, setCourse] = useState(null);
  const [myCourse, setMyCourse] = useState([]);

  return (
    <TeacherDataContext.Provider
      value={{ course, setCourse, setMyCourse, myCourse }}
    >
      {children}
    </TeacherDataContext.Provider>
  );
}
