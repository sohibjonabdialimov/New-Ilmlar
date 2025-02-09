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

  // Tokenni tekshirish uchun callback yaratish
  const checkAuth = useCallback(() => {
    verifyToken(navigate);
  }, [navigate]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <Routes>
      {/* Login sahifasi */}
      <Route
        path="/login"
        element={
          <LoginLayout>
            <LoginPage />
          </LoginLayout>
        }
      />

      {/* Kurslar bo‘limi */}
      {/* <Route path="/courses" element={<CourseWrapPage />}>
        <Route
          path=":id"
          element={
            <Suspense fallback={<Loading />}>
              <DesktopLayout>
                <CourseInfo />
              </DesktopLayout>
            </Suspense>
          }
        >
          <Route
            path="lesson/:lessonId"
            element={
              <Suspense fallback={<Loading />}>
                <LessonLayout>
                  <Lessons />
                </LessonLayout>
              </Suspense>
            }
          />
        </Route>
      </Route> */}
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

      {/* O'qituvchi profili */}
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

      {/* Mening kurslarim */}
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

      {/* O'qituvchining kurs ma’lumotlari */}
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

      {/* Dars bosh sahifasi */}
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

      {/* Kurs statistikasi */}
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

      {/* Qo‘shimcha routelar */}
      {ComponentList()}
    </Routes>
  );
};

export default App;
