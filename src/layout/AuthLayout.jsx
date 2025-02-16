import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
const LoginLayout = ({ children }) => {
  return (
    <div className="relative">
      <Link to={"/"} className="cursor-pointer block p-4 sm:w-[180px]  w-[150px]">
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
