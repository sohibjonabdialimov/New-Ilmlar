import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const LoginLayout = ({ children }) => {
  return (
    <div className="relative">
      <Link to={"/"} className="cursor-pointer fixed top-4 left-4 sm:w-[180px]  w-[110px] z-10">
        <img
          className="w-full h-full object-cover"
          src={logo}
          alt="ilmlar logo"
        />
      </Link>
      {children}
    </div>
  );
};

export default LoginLayout;
