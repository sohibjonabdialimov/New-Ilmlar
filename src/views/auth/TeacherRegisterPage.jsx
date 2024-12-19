import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./auth.css";
import { PostUsers } from "../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const { TextArea } = Input;
const TeacherRegisterPage = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const { setEmail } = useContext(AuthContext);

  const submitHandler = () => {
    const registerData = getValues().REGISTER;
    delete registerData.repassword;
    delete registerData.description;
    console.log(registerData);
    registerData.type = "teacher";
    PostUsers(registerData)
      .then((res) => {
        console.log(res);
        setEmail(res.data.data.email);

        navigate("/verify-code", {
          state: { name: "teacher" },
        });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        messageApi.open({
          type: "error",
          content: "Foydalanuvchi nomi yoki emailda xato bo'lishi mumkin",
        });
      });
  };

  return (
    <>
      {contextHolder}

      <div className="p-6 w-full gap-6 sm:h-[100dvh] min-h-[100dvh]">
        <div className="sm:mx-[50px] mx-auto h-full flex justify-center items-center">
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
            <div className="grid grid-cols-2 grid-rows-2 gap-5">
              <Form.Item
                className="mb-2 col-span-1 row-span-1"
                label={
                  <span className="text-secondary_color  font-semibold sm:text-base text-sm">
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
                className="mb-2 col-span-1 row-span-1"
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
                className="mb-2 col-span-1 row-span-1"
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
                className="mb-2 col-span-1 row-span-1"
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
                className="mb-2 col-span-1 row-span-2"
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Izoh
                  </span>
                }
              >
                <Controller
                  rules={{
                    required: "Field is required",
                  }}
                  control={control}
                  name="REGISTER.description"
                  render={({ field }) => {
                    return (
                      <>
                        <TextArea
                          {...field}
                          style={{ height: 150 }}
                          placeholder="...."
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
            </div>
            <div className="w-[30%] mx-auto flex justify-center items-center flex-col">
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
      </div>
    </>
  );
};

export default TeacherRegisterPage;
