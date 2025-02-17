import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const LessonsContext = createContext(null);

export default function LessonsProvider({ children }) {
   const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  const [isPurchased, setIsPurchased] = useState(false);
  const [courseId, setCourseId] = useState(id || null);
  return (
    <LessonsContext.Provider
      value={{
        setLessons, lessons,
        setCourseId, courseId,
        isPurchased, setIsPurchased
      }}
    >
      {children}
    </LessonsContext.Provider>
  );
}
