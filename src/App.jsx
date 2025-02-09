import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views//auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import React, { Suspense, useEffect } from "react";
import { verifyToken } from "./services/verifyToken";
import DesktopLayout from "./layout/DesktopLayout";
import Loading from "./utils/Loading";
import TeacherLayout from "./layout/TeacherLayout";
import "react-lazy-load-image-component/src/effects/blur.css";
import LessonLayout from "./layout/LessonLayout";
const MainLesson = React.lazy(() =>
  import("./views/teachers-views/main-lesson/MainLesson")
);
const CourseStatistic = React.lazy(() =>
  import("./views/teachers-views/course-statistic/CourseStatistic")
);
const TeacherCourseInfo = React.lazy(() =>
  import("./views/teachers-views/teacher-course-info/TeacherCourseInfo")
);
const CourseInfo = React.lazy(() => import("./views/course-info/CourseInfo"));
const Lessons = React.lazy(() => import("./views/lessons/Lessons"));
const MyCourse = React.lazy(() => import("./views/my-course/MyCourse"));
const TeacherProfileForStudents = React.lazy(() =>
  import("./views/teacher-profile-for-students/TeacherProfileForStudents")
);
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
            <LessonLayout>
              <Lessons />
            </LessonLayout>
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
      <Route
        key={"my-course/:id"}
        path={"/my-course/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <MyCourse />
            </DesktopLayout>
          </Suspense>
        }
      />
      <Route
        key={"teacher-course-info/:id"}
        path={"/teacher-course-info/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <TeacherLayout>
              <TeacherCourseInfo />
            </TeacherLayout>
          </Suspense>
        }
      />
      <Route
        key={"main-lesson/:id"}
        path={"/main-lesson/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <TeacherLayout>
              <MainLesson />
            </TeacherLayout>
          </Suspense>
        }
      />
      <Route
        key={"course-statistic/:id"}
        path={"/course-statistic/:id"}
        element={
          <Suspense fallback={<Loading />}>
            <TeacherLayout>
              <CourseStatistic />
            </TeacherLayout>
          </Suspense>
        }
      />
      {ComponentList()}
    </Routes>
  );
};

export default App;
