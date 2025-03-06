import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views/auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import React, { Suspense, useEffect, useCallback } from "react";
import { verifyToken } from "./services/verifyToken";
import DesktopLayout from "./layout/DesktopLayout";
import Loading from "./utils/Loading";
import TeacherLayout from "./layout/TeacherLayout";
import LessonLayout from "./layout/LessonLayout";
import CourseWrapPage from "./views/all-courses/components/CourseWrapPage";

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
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  const navigate = useNavigate();

  const checkAuth = useCallback(() => {
    verifyToken(navigate);
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

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
      <Route path="/course" element={<CourseWrapPage />}>
        <Route
          path=":id"
          element={
            <Suspense fallback={<Loading />}>
              <DesktopLayout>
                <CourseInfo />
              </DesktopLayout>
            </Suspense>
          }
        />
        <Route
          path=":id/lesson/:lessonId"
          element={
            <Suspense fallback={<Loading />}>
              <LessonLayout>
                <Lessons />
              </LessonLayout>
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/teacher-profile/:id"
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <TeacherProfileForStudents />
            </DesktopLayout>
          </Suspense>
        }
      />
      <Route
        path="/my-course/:id"
        element={
          <Suspense fallback={<Loading />}>
            <DesktopLayout>
              <MyCourse />
            </DesktopLayout>
          </Suspense>
        }
      />

      <Route
        path="/teacher-course-info/:id"
        element={
          <Suspense fallback={<Loading />}>
            <TeacherLayout>
              <TeacherCourseInfo />
            </TeacherLayout>
          </Suspense>
        }
      />

      <Route
        path="/main-lesson/:id"
        element={
          <Suspense fallback={<Loading />}>
            <TeacherLayout>
              <MainLesson />
            </TeacherLayout>
          </Suspense>
        }
      />

      <Route
        path="/course-statistic/:id"
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
