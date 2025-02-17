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

export const GetCourses = (search,
  languages,
  isFree,
  periods,
  categories,
  teacher_ids) => {
  return axiosT.get("/api/courses/donthavetoken", {
    params: {
      search,
      languages,
      is_free: isFree,
      periods,
      categories,
      teacher_ids
    },
  });
};
export const GetCategories = () => {
  return axiosT.get("/api/category");
};
export const GetPercentage = () => {
  return axiosT.get("/api/actioncourses/percentage");
};
export const GetCourseDetailWithoutToken = (id) => {
  return axiosT.get(`/api/courses/course/${id}/withouttoken`);
};
export const GetCourseDetail = (id) => {
  return axiosT.get(`/api/courses/course/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};


export const GetPurchasedCourses = () => {
  return axiosT.get("/api/courses/purchased-courses", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const GetSavedCourses = () => {
  return axiosT.get("/api/courses/saved-courses", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
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
export const GetUsersUsermeWithoutStorage = () => {
  return axiosT.get("/api/users/userme", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const PostCourses = (data, ) => {
  return axiosT.post("/api/courses", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
// All Queries
// export const GetCoursesWithSearch = (query) => {
//   return axiosT.get(`/api/courses?search=${query}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
export const PostCommit = (id, data) => {
  return axiosT.post(`/api/courses/course/${id}/commit`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const PostScore = (id, data) => {
  return axiosT.post(`/api/courses/course/${id}/score`, data, {
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
export const PostEditProfileImage = (data) => {
  return axiosT.post("/api/users/editprofileimage", data, {
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
export const GetVideoInfo = (id) => {
  return axiosT.get(`/api/courses/lesson/${id}`, {
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


export const GetSaveCourse = (id) => {
  return axiosT.get(`/api/actioncourses/save-courses/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const PatchCoursesComplete = (data) => {
  return axiosT.patch("/api/courses/complete", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const PutSubscription = (id) => {
  return axiosT.put(`/api/users/subscription/${id}`, null, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const PutUsers = (data) => {
  return axiosT.put("/api/users", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const GetSubscription = (id) => {
  return axiosT.get(`/api/users/subscription/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};
export const CardWithDrawal = (data) => {
  return axiosT.post("/api/outApis/payoutteacher", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
};