import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const LoginLayout = ({ children }) => {
  return (
    <div className="relative">
      <Link to={"/"} className="cursor-pointer fixed top-6 left-6 sm:w-[215px]  w-[110px] z-10">
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
