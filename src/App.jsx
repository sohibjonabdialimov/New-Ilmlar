import { Routes, Route, useNavigate } from "react-router-dom";
import { ComponentList } from "./router/ComponentList";
import LoginPage from "./views/LoginPage";
import LoginLayout from "./layout/LoginLayout";
import { useEffect } from "react";
import { verifyToken } from "./api/verifyToken";

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

      <Route path="/*" element={<ComponentList />} />
      {/* {ComponentList()} */}
    </Routes>
  );
};

export default App;
