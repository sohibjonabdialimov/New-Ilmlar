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
export const GetCourseDetail = (id) => {
  return axiosT.get(`/api/courses/course/${id}/withouttoken`);
};
export const GetTeachers = () => {
  return axiosT.get("/api/users/teacheraccouts");
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
export const GetSaveCourse = (id) => {
  return axiosT.get(`/api/actioncourses/save-courses/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const GetBuyCourse = (id) => {
  return axiosT.get(`/api/actioncourses/buy-course/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const GetTeacherAccount = (id) => {
  return axiosT.get(`/api/users/teacheraccout/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const GetCourseDetailWithToken = (id) => {
  return axiosT.get(`/api/courses/course/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

