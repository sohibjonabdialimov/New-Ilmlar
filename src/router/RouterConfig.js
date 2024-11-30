import React from "react";
import DesktopLayout from "../layout/DesktopLayout";
import AuthLayout from "../layout/AuthLayout";
import Select from "../views/auth/Select";
import NotFoundPage from "../views/not-found-page/NotFoundPage";
import TeacherLayout from "../layout/TeacherLayout";

const LoginPage = React.lazy(() => import("../views/auth/LoginPage"));
const RegisterPage = React.lazy(() => import("../views/auth/RegisterPage"));
const EmailCode = React.lazy(() => import("../views/auth/EmailCode"));
const HomePage = React.lazy(() => import("../views/home/HomePage"));
const TeacherProfileForStudents = React.lazy(() => import("../views/teacher-profile-for-students/TeacherProfileForStudents"));
const StudentProfile = React.lazy(() => import("../views/student-profile/StudentProfile"));
const MyCourse = React.lazy(() => import("../views/my-course/MyCourse"));
const AllCourses = React.lazy(() => import("../views/all-courses/AllCourses"));
const TeacherProfile = React.lazy(() => import("../views/teachers-views/teacher-profile/TeacherProfile"));
const AccountBalance = React.lazy(() => import("../views/teachers-views/account-balance/AccountBalance"));
const CourseInfo = React.lazy(() => import("../views/teachers-views/course-info/CourseInfo"));
const CourseStatistic = React.lazy(() => import("../views/teachers-views/course-statistic/CourseStatistic"));
const UploadCourse = React.lazy(() => import("../views/teachers-views/upload-course/UploadCourse"));
const UploadLesson = React.lazy(() => import("../views/teachers-views/upload-lesson/UploadLesson"));

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
    title: "teacher-profile",
    path: "/teacher-profile",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: TeacherProfileForStudents,
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
    title: "my-course",
    path: "/my-course",
    Layout: DesktopLayout,
    roles: [],
    subOptions: [],
    Component: MyCourse,
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
    title: "upload-course",
    path: "/upload-course",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: UploadCourse,
  },
  {
    title: "course-statistic",
    path: "/course-statistic",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: CourseStatistic,
  },
  {
    title: "course-info",
    path: "/course-info",
    Layout: TeacherLayout,
    roles: [],
    subOptions: [],
    Component: CourseInfo,
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

];