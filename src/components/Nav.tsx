import React, { useState } from "react";
// import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
const Nav = () => {
  const [active, setActive] = useState<null | String>(null);
  const onclickHandler = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement, MouseEvent>
  ) => {
    setActive(e.currentTarget.textContent);
  };

  return (
    <nav className="flex flex-row  justify-between items-center">
      <div>
        <Link onClick={onclickHandler} className={`link `} to="#">
          <span className={`${active === "Home" ? "active" : ""}`}>Home</span>
        </Link>

        <Link onClick={onclickHandler} className={`link `} to="#">
          <span className={`${active === "About" ? "active" : ""}`}>About</span>
        </Link>

        <Link onClick={onclickHandler} className={`link `} to="#">
          <span className={`${active === "Blog" ? "active" : ""}`}>Blog</span>
        </Link>

        <Link onClick={onclickHandler} className={`link `} to="#">
          <span className={`${active === "Pages" ? "active" : ""}`}>Pages</span>
        </Link>

        <Link onClick={onclickHandler} className={`link `} to="#">
          <span className={`${active === "Contact" ? "active" : ""}`}>
            Contact
          </span>
        </Link>
      </div>
      <div className="flex flex-row justify-center    mr-16">
        <div className={`left-link `}>
          <DropDown />
        </div>
        <button className={`left-link`}>
          <Link to="/log-in">
            <span className={`sign-in`}>Sign in</span>
          </Link>
        </button>
        <button
          className={`left-link bg-white rounded-lg text-secondary transition-all  hover:text-black hover:bg-secondary `}
        >
          <Link to="sign-up">
            <span className={`${active === "Register" ? "active" : ""}`}>
              Register
            </span>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
