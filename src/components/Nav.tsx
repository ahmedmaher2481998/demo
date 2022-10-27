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
    <nav className="flex flex-row justify-between items-center">
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
      <div className="flex flex-row justify-between  space-x-10">
        <div className={`link `}>
          <DropDown />
        </div>
        <button onClick={onclickHandler} className={`link`}>
          <span className={`${active === "Sign in" ? "active" : ""}`}>
            Sign in
          </span>
        </button>
        <button
          className={`link bg-white rounded-xl text-black transition-all  hover:text-white hover:bg-secondary `}
        >
          <span className={`${active === "Register" ? "active" : ""}`}>
            Register
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
