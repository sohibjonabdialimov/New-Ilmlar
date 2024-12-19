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
export const GetUsersUserme = (token) => {
  return axiosT.get("/api/users/userme", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};