import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axiosT from "../../../services/axios";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
const ForgetPassword = () => {
  const { control, getValues } = useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const submitHandler = async () => {
    // const login = getValues().LOGIN;
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
        <div className="sm:col-span-6 col-span-12 sm:mx-[50px] flex justify-center items-center">
          <Form
            layout="vertical"
            className="sm:px-24 px-10 sm:py-16 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color text-xl sm:text-[30px] sm:leading-[50px] font-semibold text-center mb-5">
              Parolni unitdingizmi?
            </h1>
            <div className="grid grid-cols-1 gap-2">
              <Form.Item
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
                  name="LOGIN.username"
                  render={({ field }) => {
                    return (
                      <>
                        <Input
                          {...field}
                          placeholder="Emailni kiriting..."
                          className="w-full py-3 px-4 rounded-[10px] sm:text-base text-sm sm:placeholder:text-base placeholder:text-xs"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>

              <button
                type="submit"
                className="w-full sm:text-base text-sm sm:py-2 py-1.5 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Emailga kod jo'natish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal">
                Shaxsiy sahifangiz yo'qmi?{" "}
                <Link
                  className="cursor-pointer text-blue_color"
                  to={"/register"}
                >
                  Ro'yxatdan o'ting
                </Link>
              </p>
            </div>
          </Form>
        </div>

        <div className="sm:block hidden auth_img col-span-6">
          <img className="" src={auth} alt="" />
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
