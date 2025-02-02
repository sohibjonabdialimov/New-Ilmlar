import teacher_profile from "../../assets/images/teacher_avatar.jpg";
import mycard from "../../assets/images/my_card.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "../home/components/NewCourseCard";
import { Drawer, Form, Input, message } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TeachersGroupCard from "../home/components/TeachersGroupCard";
import { ProfileContext } from "../../context/ProfileProvider";
import { useQueries, useQuery } from "react-query";
import {
  GetPurchasedCourses,
  GetSavedCourses,
  GetUsersUserme,
  PostEditProfileImage,
  PutUsers,
} from "../../services/api";
import axiosT from "../../services/axios";

const StudentProfile = () => {
  const [open, setOpen] = useState(false);
  const { control, getValues, setValue, reset } = useForm();
  const { userData, setUserData } = useContext(ProfileContext);
  const fileInputRef = useRef(null);
  const [messageApi, contextHolder] = message.useMessage();
  const { refetch } = useQuery(
    ["GetUsersUserme"],
    () => GetUsersUserme(localStorage.getItem("token")),
    {
      onSuccess: (response) => {
        setUserData(response.data.data);
        localStorage.setItem("user-data", JSON.stringify(response.data.data));
      },
    },
    {
      enable: !!localStorage.getItem("token"),
    }
  );
  useEffect(() => {
    setValue("EDITPROFILE.user_name", userData.user_name);
    setValue("EDITPROFILE.first_name", userData.first_name);
    setValue("EDITPROFILE.last_name", userData.last_name);
    setValue("EDITPROFILE.email", userData.email);
  }, [userData, setValue]);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      PostEditProfileImage({ file: file })
        .then(() => {
          refetch();
          messageApi.open({
            type: "info",
            content: "Rasm o'zgartirildi",
          });
        })
        .catch((error) => {
          console.log(error);

          messageApi.open({
            type: "error",
            content: "Rasm yuklashda xatolik bor",
          });
        });
    }
  };

  const submitHandler = async () => {
    const edit_data = getValues().EDITPROFILE;
    console.log(edit_data);

    PutUsers(edit_data)
      .then(() => {
        refetch();
        reset();
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { data: myCourses } = useQuery(
    ["GetPurchasedCourses"],
    GetPurchasedCourses
  );
  const { data: mySavedCourses } = useQuery(
    ["GetSavedCourses"],
    GetSavedCourses
  );

  const GetTeacherAccountId = async (id) => {
    const { data } = await axiosT.get(`/api/users/teacheraccout/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  };

  const queries = useQueries(
    userData?.subscribedTeachers.map((id) => ({
      queryKey: ["data", id],
      queryFn: () => GetTeacherAccountId(id),
      enabled: !!userData?.subscribedTeachers.length,
    }))
  );

  return (
    <div className="py-7">
      {contextHolder}
      <div className="flex sm:flex-row flex-col justify-between sm:mb-16 mb-0">
        <div className="sm:w-[78%] w-full">
          <div className="flex sm:flex-row flex-col items-center sm:gap-5 gap-2">
            <div className="relative">
              <img
                className="sm:w-[142px] sm:h-[142px] object-cover w-[90px] h-[90px] rounded-full"
                src={
                  userData?.profile_img
                    ? userData?.profile_img
                    : teacher_profile
                }
                alt="Ilmlar o'qituvchisining rasmi"
              />
              <div
                onClick={handleButtonClick}
                className="border rounded-3xl translate-x-1/2 right-1/2 p-[4px_5px] inline-block absolute -bottom-3 text-xs text-white bg-[#262C36FF] cursor-pointer"
              >
                O'zgartirish
              </div>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <div className="flex justify-between flex-col items-center sm:items-start py-1">
              <h1 className="text-main_color font-semibold text-xl mb-1">
                {userData?.first_name}{" "}
                {userData?.last_name ? userData?.last_name : ""}{" "}
                {userData?.middle_name ? userData?.middle_name : ""}
              </h1>
              <p className="text-base font-semibold">
                Foydalanuvchi nomi:{" "}
                <span className="font-normal">{userData?.user_name}</span>
              </p>
              <p className="text-base font-semibold">
                Email: <span className="font-normal">{userData?.email}</span>
              </p>
              <p className="text-base font-semibold">
                Sotib olgan kurslaringiz soni:{" "}
                <span className="font-normal">2 ta</span>
              </p>
            </div>
          </div>
          <div className="sm:mt-5 mt-2 flex sm:justify-start justify-center items-center">
            <button
              onClick={() => setOpen(true)}
              className="btn text-sm sm:p-[10px_30px] p-[8px_20px]"
            >
              Profilni tahrirlash
            </button>
          </div>
        </div>
        <div className="relative h-full sm:w-[22%] w-full sm:block hidden">
          <img
            className="aspect-[25/16] h-full w-full"
            src={mycard}
            alt="Student's Plastic card"
          />
          <p className="absolute bottom-20 left-5 font-medium text-xl text-white">
            {userData?.amount?.balance
              ? userData?.amount?.balance.toFixed(1)
              : 0}{" "}
            UZS
          </p>
          <p className="absolute bottom-3 left-3 text-base text-white">
            {userData?.payment_id}
          </p>
        </div>
      </div>

      <div className="relative mt-14 mb-14">
        <h1 className="title absolute top-0">Sotib olingan kurslar</h1>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {myCourses?.data.data?.map((item) => {
            return (
              <SwiperSlide key={item?.id}>
                <NewCourseCard item={item} buy={true} type={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-14 mb-14">
        <h1 className="title absolute top-0">Saqlangan kurslar</h1>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {mySavedCourses?.data.data?.map((item) => {
            return (
              <SwiperSlide key={item?.id} className="">
                <NewCourseCard save={true} item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-14 sm:mb-5 mb-10">
        <h1 className="title absolute top-0">Obunalar</h1>
        <Swiper
          slidesPerView={2}
          spaceBetween={15}
          navigation={true}
          freeMode={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {queries?.map((item) => {
            return (
              <SwiperSlide key={item?.data?.data.id} className="">
                <TeachersGroupCard item={item?.data?.data} type={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Drawer
        title="Profilni tahrirlash"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Form
          layout="vertical"
          className="w-full"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid grid-cols-1 gap-2">
            <Form.Item
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
                name="EDITPROFILE.first_name"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        placeholder="Ismingizni kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item
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
                name="EDITPROFILE.last_name"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        placeholder="Familiyangizni kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <Form.Item
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
                name="EDITPROFILE.user_name"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        placeholder="Foydalanuvchi nomini kiriting..."
                        className="w-full py-3 px-4 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>

            <Form.Item
              className=""
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
                name="EDITPROFILE.email"
                render={({ field }) => {
                  return (
                    <Input
                      {...field}
                      type="email"
                      placeholder="email@gmail.com"
                      className="w-full py-3 px-5 rounded-[10px]"
                    />
                  );
                }}
              />
            </Form.Item>

            <button
              type="submit"
              className="w-full text-base py-2 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
            >
              Saqlash
            </button>
          </div>
        </Form>
      </Drawer>
    </div>
  );
};

export default StudentProfile;
