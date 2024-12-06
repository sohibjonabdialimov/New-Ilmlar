import { Link } from "react-router-dom";
import select1 from "../../assets/images/select1.png";
import select2 from "../../assets/images/select2.png";
import "./auth.css";
const Select = () => {
  return (
    <div className="flex sm:flex-row flex-col items-center w-full justify-center min-h-[100dvh] sm:gap-[50px] gap-4">
      <Link
        className="sm:w-[480px] w-[85%] flex justify-center items-center flex-col sm:shadow-[0px_32px_48px_-16px_#00000033] shadow-[0px_2px_4px_0px_#0000001F] sm:p-[48px_64px] p-[25px_15px] rounded-[24px]"
        to="/register"
      >
        <img
          className="sm:h-[240px] sm:w-[333px] w-[150px] h-auto"
          src={select2}
          alt=""
        />
        <p className="mt-[32px] text-center sm:text-3xl text-base font-semibold">
          O'quvchi sifatida ro'yxatdan o'tish
        </p>
      </Link>
      <br />
      <Link
        className="sm:w-[480px] w-[85%] flex justify-center items-center flex-col sm:shadow-[0px_32px_48px_-16px_#00000033] shadow-[0px_2px_4px_0px_#0000001F] sm:p-[48px_64px] p-[25px_15px] rounded-[24px]"
        to="/register"
      >
        <img
          className="sm:h-[240px] sm:w-[240px] w-[150px] h-auto"
          src={select1}
          alt=""
        />
        <p className="mt-[32px] text-center sm:text-3xl text-base font-semibold">
          O'qituvchi sifatida ro'yxatdan o'tish
        </p>
      </Link>
    </div>
  );
};

export default Select;
