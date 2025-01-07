import { Form } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../assets/images/auth_img.png";
import "./auth.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import OTPInput from "react-otp-input";
import { PostUsersVerify } from "../../services/api";
const EmailCode = () => {
  const [otp, setOtp] = useState("");
  const { email } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (value) => {
    setOtp(value);
  };
  const submitHandler = () => {
    PostUsersVerify({ email: email, password: otp }).then((res) => {
      console.log(res);
      
      navigate("/login", {
        state: { name: location.state?.name },
      });
    });
  };
  return (
    <>
      <div className="grid grid-cols-12 p-6 w-full gap-6 min-h-[100dvh]">
        <div className="sm:col-span-6 col-span-12 sm:mx-[60px] flex justify-center items-center">
          <Form
            layout="vertical"
            className="register_form sm:px-24 px-10 sm:pt-4 sm:pb-8 auth_form w-full text-center"
            onSubmitCapture={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <h1 className="text-main_color sm:text-[30px] text-2xl sm:leading-[38px] font-semibold text-center mb-3">
              Raqamingizni tasdiqlang
            </h1>
            <h3 className="text-secondary_color sm:text-xl text-sm font-medium sm:mb-10 mb-5">
              Emailingizga yuborilgan 4 xonali raqamni kiriting
            </h3>
            <div className="grid grid-cols-1 sm:gap-10 gap-3">
              <OTPInput
                value={otp}
                onChange={handleChange}
                numInputs={6}
                isInputNum
                shouldAutoFocus
                inputStyle="otp-input"
                containerStyle="otp-input-container"
                renderInput={(props) => (
                  <input className="select-none" {...props} />
                )}
              />

              <button
                type="submit"
                className="w-full my-[10px] sm:text-base text-sm sm:py-2 py-1.5 text-white rounded-2xl bg-blue_color cursor-pointer transition-opacity hover:opacity-85"
              >
                Kirish
              </button>
              <p className="text-center text-secondary_color text-sm font-normal">
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

        <div className="sm:block hidden auth_img col-span-6">
          <img className="" src={auth} alt="" />
        </div>
      </div>
    </>
  );
};

export default EmailCode;
