import { Controller, useForm } from "react-hook-form";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
import { GetUsersUserme, PostUsersLogin } from "../../services/api";
import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileProvider";
const LoginPage = () => {
  const { control, getValues } = useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const {setUserData} = useContext(ProfileContext);
  const navigate = useNavigate();
  const submitHandler = async () => {
    const login = getValues().LOGIN;

    try {
      // Birinchi POST so'rovni jo'natamiz
      const postResponse = await PostUsersLogin(login);
      localStorage.setItem("token", postResponse.data.data.token);
      await GetUsersUserme(postResponse?.data.data.token).then((response) => {
        if (response.data.data.type === 1) {
          navigate("/non-active-profile");
        } else {
          navigate("/");
        }
        setUserData(response.data.data);
        localStorage.setItem("user-data", JSON.stringify(response.data.data));
      });
    } catch (err) {
      console.log(err);
      messageApi.open({
        type: "error",
        content: "Foydalanuvchi nomi yoki email xato kiritildi!",
      });
    }

    // PostUsersLogin(login)
    //   .then((res) => {
    //     console.log(res);

    //     if (type === "teacher") {
    //       navigate("/non-active-profile");
    //     } else {
    //       navigate("/");
    //     }
    //     localStorage.setItem("token", res.data.data.token);

    //     window.location.reload();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     messageApi.open({
    //       type: "error",
    //       content: "Foydalanuvchi nomi yoki email xato kiritildi!",
    //     });
    //   });
  };
  return (
    <>
      {contextHolder}

      <div className="grid grid-cols-12 p-6 w-full gap-6 min-h-[100dvh]">
        <div className="sm:col-span-6 col-span-12  sm:mx-[50px] mx-0 flex justify-center items-center">
          <Form
            layout="vertical"
            className="sm:px-24 px-10 py-16 auth_form w-full"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color sm:text-[30px] text-2xl sm:leading-[50px] font-semibold text-center mb-5">
              Yangi bilimlarni kashf qiling
            </h1>
            <div className="grid grid-cols-1 gap-2">
              <Form.Item
                label={
                  <span className="text-secondary_color font-semibold sm:text-base text-sm">
                    Foydalanuvchi nomi yoki email
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
                          placeholder="Foydalanuvchi nomi yoki emailni kiriting..."
                          className="w-full py-3 px-4 rounded-[10px] sm:placeholder:text-base placeholder:text-xs sm:text-base text-sm"
                        />
                      </>
                    );
                  }}
                />
              </Form.Item>
              <Form.Item
                className=""
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
                  name="LOGIN.password"
                  render={({ field }) => {
                    return (
                      <Input.Password
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full py-3 px-5 rounded-[10px] sm:placeholder:text-base placeholder:text-xs sm:text-base text-sm"
                      />
                    );
                  }}
                />
              </Form.Item>

              <button
                type="submit"
                className="w-full sm:text-base sm:py-2 py-1.5 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85 text-sm"
              >
                Kirish
              </button>
              <div className="flex sm:items-center sm:justify-between items-start sm:flex-row flex-col gap-1">
                <p className="text-center text-secondary_color text-sm font-normal">
                  Shaxsiy sahifangiz yo'qmi?{" "}
                  <Link
                    className="cursor-pointer text-blue_color"
                    to={"/register"}
                  >
                    Ro'yxatdan o'ting
                  </Link>
                </p>
                <Link
                  to={"/forget-password"}
                  className="text-center text-blue_color text-sm font-normal"
                >
                  Parolni unitdingizmi?
                </Link>
              </div>
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

export default LoginPage;
