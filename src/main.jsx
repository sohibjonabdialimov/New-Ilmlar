import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./context/AuthProvider.jsx";
import ProfileProvider from "./context/ProfileProvider.jsx";
import CoursesProvider from "./context/CoursesProvider.jsx";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <CoursesProvider>
              <App />
            </CoursesProvider>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
