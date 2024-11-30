import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views//auth/LoginPage";
import LoginLayout from "./layout/AuthLayout";
import React, { useEffect } from "react";
import { verifyToken } from "./services/verifyToken";
import DesktopLayout from "./layout/DesktopLayout";
import Lessons from "./views/lessons/Lessons";
const CourseInfo = React.lazy(() => import("./views/course-info/CourseInfo"));

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
          <DesktopLayout>
            <CourseInfo />
          </DesktopLayout>
        }
      />
      <Route
        key={"lessons/:id"}
        path={"/lessons/:id"}
        element={
          <DesktopLayout>
            <Lessons />
          </DesktopLayout>
        }
      />
      {ComponentList()}
    </Routes>
  );
};

export default App;
