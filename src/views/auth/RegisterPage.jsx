import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
import { PostUsers } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const RegisterPage = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { setEmail } = useContext(AuthContext);

  const submitHandler = () => {
    const registerData = getValues().REGISTER;
    delete registerData.repassword;
    console.log(registerData);
    registerData.type = "student";
    PostUsers(registerData)
      .then((res) => {
        console.log(res);
        setEmail(res.data.data.email);
        navigate("/verify-code");
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content: "Foydalanuvchi nomi yoki emailda xato bo'lishi mumkin",
        });
      });

    //
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
    <>
      {contextHolder}

      <div className="grid grid-cols-12 p-6 w-full gap-6 min-h-[100dvh]">
        <div className="sm:col-span-6 col-span-12 sm:mx-[50px] mx-auto flex justify-center items-center">
          <Form
            layout="vertical"
            className="register_form sm:px-24 px-10 sm:pt-4 sm:pb-8 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color sm:text-[25px] text-xl sm:leading-[30px] font-semibold text-center mb-3">
              Katta imkoniyatlar dunyosiga qadam qo'ying
            </h1>
            <div className="grid grid-cols-1 gap-0">
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Ism
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.first_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Ismingizni kiriting..."
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm sm:placeholder:text-base placeholder:text-xs "
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Familiya
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.last_name"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Familiyangizni kiriting..."
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Foydalanuvchi nomi
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Foydalanuvchi nomi"
                          className="w-full py-2 px-4 rounded-[10px] sm:text-base text-sm"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Email
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.email"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        type="email"
                        placeholder="user@gmail.com"
                        className="w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Parol
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.password"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-2 px-5 rounded-[10px] sm:text-base text-sm"
                      />
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className="mb-2"
                label={
                  <span className="text-secondary_color font-semibold text-base">
                    Parolni qayta kiriting
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.repassword"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-2 px-5 rounded-[10px]"
                      />
                    );
                  }}
                />
              </Form.Item>

              <button
                type="submit"
                className="w-full my-[10px] sm:text-base text-sm sm:py-2 py-1 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Ro'yxatdan o'tish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal ">
                Shaxsiy sahifangiz bormi?{" "}
                <Link
                  className="cursor-pointer font-medium text-blue_color"
                  to={"/login"}
                >
                  Kirish
                </Link>
              </p>
            </div>
          </Form>
        </div>

        <div className="auth_img sm:block hidden col-span-6">
          <img className="" src={auth} alt="" />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
