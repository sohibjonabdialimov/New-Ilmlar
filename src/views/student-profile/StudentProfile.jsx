import teacher_profile from "../../assets/images/teacher_profile.jpg";
import mycard from "../../assets/images/my_card.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "../home/components/NewCourseCard";
import { Drawer, Form, Input } from "antd";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TeachersGroupCard from "../home/components/TeachersGroupCard";
import { ProfileContext } from "../../context/ProfileProvider";
import { useQuery } from "react-query";
import { GetPurchasedCourses, GetSavedCourses } from "../../services/api";
const navData = [
  {
    id: 1,
    name: "Kurs nomi 1",
  },
  {
    id: 2,
    name: "Kurs nomi 2",
  },
  {
    id: 3,
    name: "Kurs nomi 3",
  },
  {
    id: 4,
    name: "Kurs nomi 4",
  },
  {
    id: 5,
    name: "Kurs nomi 5",
  },
  {
    id: 6,
    name: "Kurs nomi 6",
  },
  {
    id: 7,
    name: "Kurs nomi 6",
  },
  {
    id: 8,
    name: "Kurs nomi 6",
  },
  {
    id: 9,
    name: "Kurs nomi 6",
  },
];
const StudentProfile = () => {
  const [open, setOpen] = useState(false);
  const { control, getValues } = useForm();
  const { userData } = useContext(ProfileContext);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const submitHandler = async () => {
    const edit_data = getValues().EDITPROFILE;
    console.log(edit_data);

    // axiosT
    //   .post("/accounts/Token", login)
    //   .then(({ data }) => {
    //     localStorage.setItem("accessToken", data.access_token);
    //     localStorage.setItem("refreshToken", data.refresh_token);
    //     messageApi.open({
    //       type: "info",
    //       content: "Tizimga muvaffaqqiyatli kirildi",
    //     });
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     messageApi.open({
    //       type: "error",
    //       content: "Bunday login parol mavjud emas",
    //     });
    //   });
  };
  const { data: myCourses } = useQuery(["GetPurchasedCourses"], GetPurchasedCourses);
  const { data: mySavedCourses } = useQuery(["GetSavedCourses"], GetSavedCourses);
  let courses = myCourses?.data.data;
  let savedCourses = mySavedCourses?.data.data;
  
  return (
    <div className="py-7">
      <div className="flex sm:flex-row flex-col justify-between sm:mb-16 mb-0">
        <div className="sm:w-[78%] w-full">
          <div className="flex sm:flex-row flex-col items-center sm:gap-5 gap-2">
            <img
              className="sm:w-[142px] sm:h-[142px] w-[90px] h-[90px] rounded-full"
              src={teacher_profile}
              alt=""
            />
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
              onClick={showDrawer}
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
            {userData?.amount?.balance ? userData?.amount?.balance : 0} UZS
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
          {courses?.map((item) => {
            
            return (
              <SwiperSlide key={item.id}>
                <NewCourseCard item={item} type={true} />
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
          {savedCourses?.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard item={item} />
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
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <TeachersGroupCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <Drawer title="Profilni tahrirlash" onClose={onClose} open={open}>
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
                name="EDITPROFILE.firstname"
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
                name="EDITPROFILE.lastname"
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
                name="EDITPROFILE.username"
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
