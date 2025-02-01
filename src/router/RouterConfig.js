import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import AuthLayout from "../layout/AuthLayout";
import Select from "../views/auth/Select";
import NotFoundPage from "../views/not-found-page/NotFoundPage";
import TeacherLayout from "../layout/TeacherLayout";

const LoginPage = React.lazy(() => import("../views/auth/LoginPage"));
const ForgetPassword = React.lazy(() => import("../views/auth/ForgetPassword"));
const RegisterPage = React.lazy(() => import("../views/auth/RegisterPage"));
const EmailCode = React.lazy(() => import("../views/auth/EmailCode"));
const TeacherRegisterPage = React.lazy(() => import("../views/auth/TeacherRegisterPage"));
const HomePage = React.lazy(() => import("../views/home/HomePage"));
const StudentProfile = React.lazy(() => import("../views/student-profile/StudentProfile"));

const AllCourses = React.lazy(() => import("../views/all-courses/AllCourses"));
const TeacherProfile = React.lazy(() => import("../views/teachers-views/teacher-profile/TeacherProfile"));
const AccountBalance = React.lazy(() => import("../views/teachers-views/account-balance/AccountBalance"));
const TeacherCourseInfo = React.lazy(() => import("../views/teachers-views/teacher-course-info/TeacherCourseInfo"));
const UploadCourse = React.lazy(() => import("../views/teachers-views/upload-course/UploadCourse"));
const UploadLesson = React.lazy(() => import("../views/teachers-views/upload-lesson/UploadLesson"));
const MainLesson = React.lazy(() => import("../views/teachers-views/main-lesson/MainLesson"));
const NonActiveProfile = React.lazy(() => import("../views/teachers-views/non-active-profile/NonActiveProfile"));

export const RoutesConfig = [{
    title: "",
    path: "/",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: HomePage,
  },
  {
    title: "register",
    path: "/register",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: RegisterPage,
  },
  {
    title: "teacher-register",
    path: "/teacher-register",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: TeacherRegisterPage,
  },
  {
    title: "verify-code",
    path: "/verify-code",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: EmailCode,
  },
  {
    title: "login",
    path: "/login",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: LoginPage,
  },
  {
    title: "forget-password",
    path: "/forget-password",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: ForgetPassword,
  },
  {
    title: "select",
    path: "/select",
    Layout: AuthLayout,
    roles: [],
    subOptions: [],
    Component: Select,
  },
  {
    title: "title",
    path: "/*",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: NotFoundPage,
  },

  {
    title: "student-profile",
    path: "/student-profile",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: StudentProfile,
  },
  {
    title: "courses",
    path: "/courses",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: AllCourses,
  },
  {
    title: "my-profile",
    path: "/my-profile",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: TeacherProfile,
  },
  {
    title: "non-active-profile",
    path: "/non-active-profile",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: NonActiveProfile,
  },
  {
    title: "upload-course",
    path: "/upload-course",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: UploadCourse,
  },
  {
    title: "course-info",
    path: "/teacher-course-info",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: TeacherCourseInfo,
  },
  {
    title: "account-balance",
    path: "/account-balance",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: AccountBalance,
  },
  {
    title: "upload-lesson",
    path: "/upload-lesson",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: UploadLesson,
  },
  {
    title: "main-lesson",
    path: "/main-lesson",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: MainLesson,
  },

];