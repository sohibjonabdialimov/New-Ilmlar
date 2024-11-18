import axiosT from "./axios";

export const GetDashboardStatistic = () => {
  return axiosT.get("/structure/dashboard-statistic");
};

export const GetDashboardFaculties = () => {
  return axiosT.get("/structure/dashboard-faculties");
};

export const GetAcademicYears = () => {
  return axiosT.get("/structure/academic-years");
};

export const GetTeacherPositionsGlobal = () => {
  return axiosT.get("/structure/teacher-positions-global");
};