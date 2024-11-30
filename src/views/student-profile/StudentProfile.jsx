import teacher_profile from "../../assets/images/teacher_profile.jpg";
import mycard from "../../assets/images/my_card.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation, FreeMode } from "swiper/modules";
import NewCourseCard from "../home/components/NewCourseCard";
import { Drawer, Form, Input } from "antd";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TeachersGroupCard from "../home/components/TeachersGroupCard";
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

  return (
    <div className="py-7">
      <div className="flex justify-between mb-16">
        <div className="w-[78%]">
          <div className="flex gap-5">
            <img
              className="w-[142px] h-[146px] rounded-full"
              src={teacher_profile}
              alt=""
            />
            <div className="flex justify-between flex-col py-1">
              <h1 className="text-main_color font-semibold text-xl mb-1">
                Michael Wong
              </h1>
              <p className="text-base font-semibold">
                Foydalanuvchi nomi: <span className="font-normal">user</span>
              </p>
              <p className="text-base font-semibold">
                Email: <span className="font-normal">user@gmail.com</span>
              </p>
              <p className="text-base font-semibold">
                Sotib olgan kurslaringiz soni:{" "}
                <span className="font-normal">2 ta</span>
              </p>
            </div>
          </div>
          <div className="mt-5">
            <button onClick={showDrawer} className="btn text-sm p-[10px_30px]">
              Profilni tahrirlash
            </button>
          </div>
        </div>
        <div className="relative h-full w-[22%]">
          <img
            className="aspect-[25/16] h-full w-full"
            src={mycard}
            alt="Student's Plastic card"
          />
          <p className="absolute bottom-20 left-5 font-medium text-xl text-white">
            120 000 UZS
          </p>
          <p className="absolute bottom-3 left-3 text-base text-white">
            3827 4637 3103 7389
          </p>
        </div>
      </div>

      <div className="relative mt-14 mb-14">
        <h1 className="title absolute top-0">Sotib olingan kurslar</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="comments_swiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard type={true} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-14 mb-14">
        <h1 className="title absolute top-0">Saqlangan kurslar</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={16}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="comments_swiper"
        >
          {navData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="">
                <NewCourseCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="relative mt-14 mb-5">
        <h1 className="title absolute top-0">Obunalar</h1>
        <Swiper
          slidesPerView={6}
          spaceBetween={24}
          navigation={true}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          className="comments_swiper"
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
