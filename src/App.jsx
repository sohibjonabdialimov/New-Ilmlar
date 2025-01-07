import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views//auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import React, { Suspense, useEffect } from "react";
import { verifyToken } from "./services/verifyToken";
import DesktopLayout from "./layout/DesktopLayout";
import Loading from "./utils/Loading";
const CourseInfo = React.lazy(() => import("./views/course-info/CourseInfo"));
const Lessons = React.lazy(() => import("./views/lessons/Lessons"));
const TeacherProfileForStudents = React.lazy(() => import("./views/teacher-profile-for-students/TeacherProfileForStudents"));
const App = () => {
  const navigate = useNavigate();
  // console.log(import.meta.env.VITE_API_KEY);
  useEffect(() => {
    verifyToken(navigate);
  }, [navigate]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />
      <Route
        key={"courses/:id"}
        path={"/courses/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <CourseInfo />
            </DesktopLayout>
          </Suspense>
        }
      />
      <Route
        key={"lessons/:id"}
        path={"/lessons/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <Lessons />
            </DesktopLayout>
          </Suspense>
        }
      />
        
      <Route
        key={"teacher-profile/:id"}
        path={"/teacher-profile/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <TeacherProfileForStudents />
            </DesktopLayout>
          </Suspense>
        }
      />
      {ComponentList()}
    </Routes>
  );
};

export default App;
