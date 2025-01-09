import { createContext, useState } from "react";

export const TeacherDataContext = createContext(null);

export default function TeacherDataProvider({ children }) {
  const [course, setCourse] = useState(null);

  return (
    <TeacherDataContext.Provider
      value={{ course, setCourse }}
    >
      {children}
    </TeacherDataContext.Provider>
  );
}
