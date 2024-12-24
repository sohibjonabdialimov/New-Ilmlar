import axiosT from "./axios";

export const PostUsers = (data) => {
  return axiosT.post("/api/users", data);
};
export const PostUsersVerify = (data) => {
  return axiosT.post("/api/users/verify", data);
};
export const PostUsersLogin = (data) => {
  return axiosT.post("/api/users/login", data);
};
export const GetCourses = () => {
  return axiosT.get("/api/courses/donthavetoken");
};
export const GetUsersUserme = (token) => {

  return axiosT.get("/api/users/userme", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const PostCourses = (data) => {

  return axiosT.post("/api/courses", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const PostCoursesVideos = (data) => {

  return axiosT.post("/api/courses/videos", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};