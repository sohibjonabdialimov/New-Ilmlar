import axiosT from "./axios";

export const PostUsers = (data) => {
  return axiosT.post("/api/users", data);
};
export const PostUsersVerify = (data) => {
  return axiosT.post("/api/users/verify", data);
};
