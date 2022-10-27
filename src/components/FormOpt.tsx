import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ImgLink from "./ImageLink";
import LogInLinks from "./LogInLinks";
const Form = () => {
  const navigate = useNavigate();
  const [opt, setOpt] = useState("");
  return (
    <div className="flex items-center flex-col justify-center w-max ml-auto lg:mr-10 xl:mr-16">
      <div className=" relative flex border  border-gray-300 text-gray-900  bg-shady rounded-lg focus:ring-secondary focus:border-secondary   ">
        <input
          type="text"
          className="w-full rounded-lg  text-sm bg-shad min-h-full text-black  focus:outline-none p-2.5"
          value={opt}
          onChange={(e) => setOpt(e.target.value)}
          id="opt"
          placeholder="Enter Opt"
          required
        />
        <AiOutlineCloseCircle
          className="bg-white absolute top-3 cursor-pointer right-3 text-gray-600"
          onClick={() => setOpt("")}
        />
      </div>
      <p className="w-full flex mb-3 p-2">
        <Link className=" text-sm  text-gray-400 ml-auto  mt-6 " to="#">
          Recover Password ?
        </Link>
      </p>

      <button
        onClick={() => navigate("/sign-up")}
        className="bg-secondary mt-2 mb-3 w-full p-3 rounded-lg btn-shadow"
      >
        Continue
      </button>

      <LogInLinks />
    </div>
  );
};
export default Form;
