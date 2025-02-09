import { createContext, useState } from "react";

export const LessonsContext = createContext(null);

export default function LessonsProvider({ children }) {
  const [lessons, setLessons] = useState([]);
  return (
    <LessonsContext.Provider
      value={{
        setLessons, lessons
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
}
