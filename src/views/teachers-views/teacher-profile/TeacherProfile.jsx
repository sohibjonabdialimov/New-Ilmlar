import { Form, Input, Select } from "antd";
import teacher_profile from "../../../assets/images/teacher_avatar.jpg";
import NewCourseCard from "../../home/components/NewCourseCard";
import { Controller, useForm } from "react-hook-form";
import { ProfileContext } from "../../../context/ProfileProvider";
import { useContext } from "react";
import axiosT from "../../../services/axios";
import { useQueries, useQuery } from "react-query";
import { GetTeacherAccount } from "../../../services/api";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const TeacherProfile = () => {
  const { control, getValues } = useForm();
  const { userData } = useContext(ProfileContext);
  const navigate = useNavigate();
  const submitHandler = async () => {
    const editTeacher = getValues().EDITTEACHERPROFILE;
    console.log(editTeacher);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { data: teacherAccountData } = useQuery(
    ["GetTeacherAccount"],
    () => GetTeacherAccount(userData?.id),
    {
      onSuccess: (data) => {
        console.log(data.data.data);
      },
    },
    {
      enabled: !!userData?.id,
    }
  );
  const teacherAccount = teacherAccountData?.data.data;
  const fetchResource = async (id) => {
    const { data } = await axiosT.get(`/api/courses/course/${id}/withouttoken`);
    return data;
  };
  const queries = useQueries(
    (teacherAccount?.courses || []).map(({ id }) => ({
      queryKey: ["resource", id],
      queryFn: () => fetchResource(id),
      enabled: !!id,
    }))
  );

  const allData = queries
    ?.map((query) => query?.data?.data)
    .filter((item) => item !== undefined);


  return (
    <div className="py-7">
      <div className="flex sm:flex-row flex-col justify-between sm:mb-16 mb-10 gap-4">
        <div className="flex sm:gap-5 gap-3">
          <img
            className="sm:w-[142px] sm:h-[146px] w-[80px] h-[80px] rounded-full"
            src={
              userData?.profile_img ? userData?.profile_img : teacher_profile
            }
            alt="Ilmlar o'qituvchisi rasmi"
          />
          <div className="flex flex-col justify-center sm:gap-1 gap-0.5 py-0">
            <h1 className="text-main_color font-semibold sm:text-xl text-base mb-0">
              {userData?.first_name} {userData?.last_name}
            </h1>
            <p className="text-[#758195] sm:text-base text-xs font-medium">
              {userData?.email}
            </p>
            {/* <p className="text-[#758195] sm:text-base text-xs font-medium">
              Biznes yo'nalishi
            </p> */}
            <p className="text-[#758195] sm:text-base text-xs font-semibold">
              Username:{" "}
              <span className="font-normal">{userData?.user_name}</span>
            </p>
          </div>
        </div>
        <div className="sm:w-auto w-full">
          <button onClick={() => navigate("/upload-course")} className="btn text-sm sm:p-[10px_30px] p-[8px_20px] w-full">
            Kurs yuklash
          </button>
        </div>
      </div>

      <div className="sm:p-6 p-4 bg-[#f1f2f466] rounded-[16px] sm:mb-16">
        <Form
          layout="vertical"
          className="sm:px-24 px-0 sm:pt-4 pt-2 pb-2 sm:pb-8 w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-2 gap-5">
            <div className="sm:col-span-1 col-span-2 grid grid-cols-2 gap-x-5">
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Ism
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.firstname"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Ismingizni kiriting..."
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Familiya
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.lastname"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Familiyangizni kiriting..."
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Foydalanuvchi nomi
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Foydalanuvchi nomi"
                          className="w-full py-2.5 px-4 rounded-[10px]"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Email
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.email"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="email"
                        placeholder="user@gmail.com"
                        className="w-full py-2.5 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Mutaxassislik
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.password"
                  render={({ field }) => {
                    return (
                      <Select
                        defaultValue="lucy"
                        {...field}
                        className="w-full h-[40px] rounded-[10px]"
                        onChange={handleChange}
                        options={[
                          {
                            value: "Dasturlash",
                            label: "Dasturlash",
                          },
                          {
                            value: "Dizayn",
                            label: "Dizayn",
                          },
                          {
                            value: "Biznes",
                            label: "Biznes",
                          },
                          {
                            value: "Fan va texnika",
                            label: "Fan va texnika",
                          },
                          {
                            value: "Shaxsiy rivojlanish",
                            label: "Shaxsiy rivojlanish",
                          },
                        ]}
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Havola
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.link"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Havola"
                        className="w-full py-2.5 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <Form.Item
                className="sm:col-span-1 col-span-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    O’zingiz haqingizda ma’lumot
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="EDITTEACHERPROFILE.firstname"
                  render={({ field }) => {
                    return (
                      <>
                        <TextArea
                          {...field}
                          placeholder="O’zingiz haqingizda ma’lumot yozing..."
                          className="text-base"
                          style={{
                            height: 150,
                            resize: "none",
                          }}
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <div>
                <button className="btn text-sm p-[5px_25px]">
                  Profilni tahrirlash
                </button>
              </div>
            </div>
          </div>
        </Form>
      </div>

      <div className="relative mt-14 sm:mb-5 mb-10">
        <h1 className="title mb-8">Kurslar</h1>
        <div className="grid sm:grid-cols-4 grid-cols-1 justify-between w-full gap-5 gap-y-7">
          {allData?.map((item) => {
            return <NewCourseCard item={item} role={"teacher"} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
